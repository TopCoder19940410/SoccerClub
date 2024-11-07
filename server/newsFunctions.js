// newsFunctions.js

import express from 'express';
import News from './models/news.js'; 
import mongoose from 'mongoose';

const router = express.Router();

router.get('/news', async (req, res) => {
  try {
    const allNews = await News.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/news/:id', getNews, (req, res) => {
  res.json(res.news);
});

router.post('/news', async (req, res) => {
  const news = new News({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    videoLink: req.body.videoLink,
    markdownContent: req.body.markdownContent,
    previewImg: req.body.previewImg,
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/news/:id', getNews, async (req, res) => {
  try {
    res.news.title = req.body.title;
    res.news.videoLink = req.body.videoLink;
    res.news.markdownContent = req.body.markdownContent;
    res.news.content = req.body.content;
    res.news.author = req.body.author;
    res.news.publishedAt = req.body.publishedAt;
    res.news.previewImg = req.body.previewImg;

    const updatedNews = await res.news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getNews(req, res, next) {
  let news;
  try {
    news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'Новость не найдена' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.news = news; 
  next();
}

router.delete('/news/:id', async (req, res) => {
  const newsId = req.params.id;

  try {
    const deletedPlayer = await News.findByIdAndDelete(newsId);

    if (!deletedPlayer) {
      return res.status(404).send('Новость не удалена');
    }

    res.status(200).send('Новость удалена');
  } catch (error) {
    console.error('Ошибка при удалении игрока:', error);
    res.status(500).send('Ошибка сервера при удалении игрока');
  }
});
export default router;
