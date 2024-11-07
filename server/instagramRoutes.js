import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/insta-token', (req, res) => {
  const instaToken = process.env.INSTA_TOKEN;
  res.json(instaToken);
});

export default router;
