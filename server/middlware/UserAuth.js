import jwt from 'jsonwebtoken';
import redisClient from '../redisClient.js';

const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const reply = await redisClient.get(token);
        if (!reply) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            const requestedId = req.body.id || req.params.id; 

            if (req.user.id === requestedId) {
                return next();
            }

            if (['admin', 'trainer', 'coach'].includes(req.user.role)) {
                return next(); 
            }

            return res.status(403).json({ message: 'Forbidden: Access denied' });

        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};


export default userAuth;
