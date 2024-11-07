
import express from 'express';
import mongoose from 'mongoose';
import Gallery from '../models/gallery.js';
import Match from '../models/matchModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const matches = await Match.find().populate({
      path: 'author',
      model: 'User',
      select: 'username',
    });
    const transformedMatches = matches.map(match => ({
      images: match.images,
      _id: match._id,
      id: match.id,
      title: match.title,
      src: match.src,
      text: match.text,
      username: match.author ? match.author.username : null,
    }));
    console.log('Matches:', transformedMatches);
    res.json(transformedMatches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});


router.get('/gallery', async (req, res) => {
  try {
    const galleryItems = await Gallery.find().select('title team previewImg images videos description').lean();
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/gallery/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }
    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/gallery', async (req, res) => {
  const galleryItem = new Gallery({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    images: req.body.images,
    team: req.body.team,
    previewImg: req.body.previewImg,
    videos: req.body.videos,
    description: req.body.description
  });

  try {
    const newGalleryItem = await galleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/gallery/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (galleryItem == null) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }

    if (req.body.title != null) {
      galleryItem.title = req.body.title;
    }
    if (req.body.images != null) {
      galleryItem.images = req.body.images;
    }

    const updatedGalleryItem = await galleryItem.save();
    res.json(updatedGalleryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/gallery/:id', async (req, res) => {
  const galleryItemId = req.params.id;

  try {
    const deleteItem = await Gallery.findByIdAndDelete(galleryItemId);
    if (!deleteItem) {
      return res.status(404).send('Gallery item is undefined');
    }

    res.status(200).send('Gallery item has been deleted');
  } catch (error) {
    console.error('Ошибка при удалении галереи:', error);
    res.status(500).send('Ошибка сервера при удалении галереи');
  }
});

router.post('/gallery/post', async (req, res) => {
  try {
    const { id } = req.body;

    const galleryItem = await Gallery.findById(id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Cannot find gallery item' });
    }
    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



export default router;
