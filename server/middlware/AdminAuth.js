import jwt from 'jsonwebtoken';
import redisClient from '../redisClient.js'; 

const checkRoleAndToken = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        const tokenExists = await redisClient.get(token);
        if (!tokenExists) {
            return res.status(401).json({ message: 'Unauthorized: Token not found in Redis' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { role } = decoded;

        if (role === 'admin' || role === 'manager' || role === 'coach') {
            return next(); 
        } else {
            return res.status(401).json({ message: 'Unauthorized: Insufficient role' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

export default checkRoleAndToken;
