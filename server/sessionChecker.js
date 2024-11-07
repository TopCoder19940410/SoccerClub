import { verifyToken } from './checker.js';

const sessionChecker = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    const user = verifyToken(token, 'your-secret-key'); 

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.status(401).json({ error: 'Token not found' });
  }
};

export default sessionChecker;
