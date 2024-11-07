// login.js
import express from 'express';
import passport from 'passport';

const router = express.Router();

import jwt from 'jsonwebtoken';

// ...

router.post('/login', passport.authenticate('local'), (req, res) => {
  // Получаем данные пользователя после успешной аутентификации
  const user = req.user;

  // Создаем JWT токен
  const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key');

  // Отправляем токен на клиент
  res.json({ message: 'Login successful', token });
});


export default router;
