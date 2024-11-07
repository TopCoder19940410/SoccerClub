import express from 'express';
import jwt from 'jsonwebtoken';
import Invite from '../models/Invite.js';
import { v4 as uuidv4 } from 'uuid';
import redisClient from '../redisClient.js';

const router = express.Router();

router.post('/generate-invite', async (req, res) => {
    try {
        const { email, role } = req.body;
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = await redisClient.get(token);

        if (!userId) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        if (!['admin', 'trainer', 'coach'].includes(decodedToken.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        const inviteToken = uuidv4(); 

        const newInvite = new Invite({
            token: inviteToken,
            email,
            role
        });

        await newInvite.save();
        let domain = process.env.DOMAIN
        const inviteLink = `http://${domain}/user/register/${inviteToken}`;

        res.json({ message: 'Invite link generated', inviteLink });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred during invite generation' });
    }
});

export default router;
