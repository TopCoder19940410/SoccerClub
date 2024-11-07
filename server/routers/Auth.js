import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import redisClient from '../redisClient.js'; 
import cookieParser from 'cookie-parser';
import Invite from '../models/Invite.js';


const router = express.Router();

router.use(cookieParser());

const TOKEN_EXPIRATION = 14 * 24 * 60 * 60; // 14 days


// User login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { 
                id: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: TOKEN_EXPIRATION }
        );
        await redisClient.setEx(token, TOKEN_EXPIRATION, user._id.toString());

        res.cookie('token', token, { httpOnly: true, maxAge: TOKEN_EXPIRATION * 1000 }); // Token wil  be save in cookies and redis

        res.json({ message: 'Login successful', role: user.role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});


// User registration
router.post('/register', async (req, res) => {
    try {
        const data = req.body;

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = new User({
            ...data,
            password: hashedPassword,
        });

        User.register(newUser, data.password, (err, user) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Registration failed' });
            }

            res.json({ message: 'Registration successful' });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during registration' });
    }
});


// Register with registration link
router.post('/register/:inviteToken', async (req, res) => {
    try {
        const { inviteToken } = req.params;
        const { username, password, firstName, lastName } = req.body;

        const invite = await Invite.findOne({ token: inviteToken, used: false });

        if (!invite) {
            return res.status(400).json({ message: 'Invalid or expired invite link' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            role: role 
        });

        await newUser.save();

        invite.used = true;
        await invite.save();

        res.json({ message: 'Registration successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during registration' });
    }
});

router.post('/logout', async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({ message: 'No token found' });
        }

        await redisClient.del(token);

        res.clearCookie('token');

        res.json({ message: 'Logout successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during logout' });
    }
});

router.get('/verify-token', async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Получаем userId из Redis по токену
        const userId = await redisClient.get(token);

        if (!userId) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Получаем информацию о пользователе из базы данных
        const user = await User.findById(userId).select('role'); // Извлекаем только поле 'role'
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Token is valid', userId, role: user.role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during token verification' });
    }
});






export default router;
