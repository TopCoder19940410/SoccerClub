import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig.js';

const router = express.Router();

const storageEngine = multer.memoryStorage();
const upload = multer({ storage: storageEngine });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filename = `${uuidv4()}-${file.originalname}`;
    const storageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(storageRef, file.buffer);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
      },
      (error) => {
        res.status(500).json({ error: error.message });
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        res.status(200).json({ downloadURL });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
