import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const pageSchema = new Schema({
  url: { type: String, required: true },
  htmlContent: { type: Object, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  category: { type: String, required: true }
});

const Page = model('Page', pageSchema);

export default Page;
