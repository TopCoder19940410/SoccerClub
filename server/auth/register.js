// register.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', (req, res) => {
  const { username,
    password,
    firstName,
    lastName,
    dateOfBirth,
    role, 
    photo,
    team,
    position,
    nationality,
    street,
    zip,
    city,
    phone,
    parent,
    parentPhone,
    passport, } = req.body;

  const newUser = new User({
    username,
    password,
    firstName,
    lastName,
    dateOfBirth,
    role, 
    photo,
    team,
    position,
    nationality,
    street,
    zip,
    city,
    phone,
    parent,
    parentPhone,
    passport,

  });

  User.register(newUser, password, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Registration failed' });
    }

    res.json({ message: 'Registration successful' });
  });
});


export default router;
