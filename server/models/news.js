import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: false,
  },
  previewImg: {
    type: String,
    required: false,
  },
  markdownContent: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: authorSchema,
    required: true
  },
  publishedAt: {
    type: Date,
    default: Date.now
  }
});

const News = mongoose.model('News', newsSchema, 'news');

export default News;
