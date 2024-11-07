import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = 'uploads/';

    if (req.params.folder === 'players') {
      uploadPath += 'players/';
    } else if (req.params.folder === 'gallery') {
      uploadPath += 'gallery/';
    } else if (req.params.folder === 'news') {
      uploadPath += 'news/';
    } else if (req.params.folder === 'videos') {
      uploadPath += 'videos/';
    } else if (req.params.folder === 'media') {
      uploadPath += 'videos/';
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image and video files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

router.post('/:folder/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  const filePath = req.file.path;

  const correctedPath = filePath.replace(/\\/g, '/');
  const absolutePath = correctedPath.startsWith('/') ? correctedPath : `/${correctedPath}`;

  res.json({ filePath: absolutePath });
});

export default router;
