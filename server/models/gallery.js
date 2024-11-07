import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  title: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  previewImg: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  images: [{
    type: String,
    required: true
  }],
  videos: [{
    type: String,
    required: true
  }],
  
});

const Gallery = mongoose.model('Gallery', gallerySchema, 'gallery');

export default Gallery;
