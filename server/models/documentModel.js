import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

export default Document;
