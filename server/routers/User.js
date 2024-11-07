import express from 'express';
import User from '../models/User.js'
import AdminAuth from '../middlware/AdminAuth.js';
import userAuth from '../middlware/UserAuth.js';

const router = express.Router();

router.post(`/get`, userAuth, async (req, res) => {
    try {
        const id = req.body.id;

        let result = await User.findById(id);

        res.status(200).json(result)

    } catch (error) {

    }
})

router.put('/list/:id', userAuth, async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
  
      if (updatedUser) {
        res.status(200).json({ message: 'Данные игрока обновлены успешно', user: updatedUser });
      } else {
        res.status(404).json({ message: 'Игрок не найден' });
      }
    } catch (error) {
      console.error('Произошла ошибка при обновлении данных игрока:', error);
      res.status(500).json({ message: 'Произошла ошибка при обновлении данных игрока' });
    }
  });


  // Get all players
  router.get('/players', AdminAuth, async (req, res) => {
    try {
        const players = await User.find({ role: 'player' });

        if (!players || players.length === 0) {
            return res.status(404).json({ message: 'Игроки не найдены' });
        }

        res.status(200).json(players);
    } catch (error) {
        console.error('Ошибка при получении списка игроков:', error);
        res.status(500).json({ message: 'Ошибка при получении списка игроков' });
    }
});



export default router