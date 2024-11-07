import express from 'express';
const router = express.Router();
import Page from './models/pageModel.js'; 

router.get('/pages/all', async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/pages/add', async (req, res) => {
  const { url, htmlContent, author, title, category } = req.body;

  const newPage = new Page({
    url,
    htmlContent,
    author,
    title,
    category
  });

  try {
    const savedPage = await newPage.save();
    res.status(201).json(savedPage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/pages/:id', async (req, res) => {
  try {
    const removedPage = await Page.findByIdAndDelete(req.params.id);
    res.json(removedPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/pages/:id', async (req, res) => {
  try {
    const updatedPage = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get('/pages/categories', async (req, res) => {
  try {
    const uniqueCategories = await Page.distinct('category');

    const categorizedPages = await Promise.all(
      uniqueCategories.map(async (category) => {
        const pagesInCategory = await Page.find({ category });
        const pageURLs = pagesInCategory.map((page) => page.url);
        return { category, pageURLs };
      })
    );

    res.json(categorizedPages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/pages/id/:id', async (req, res) => {
  try {
    const requestedId = req.params.id;
    console.log("Requested URL:", requestedId);
    
    const page = await Page.findOne({ _id: requestedId });
    
    console.log("Found page:", page);
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/pages/url/:url', async (req, res) => {
  try {
    const requestedUrl = req.params.url;
    console.log("Requested URL:", requestedUrl);
    
    const page = await Page.findOne({ url: requestedUrl });
    
    console.log("Found page:", page);
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
