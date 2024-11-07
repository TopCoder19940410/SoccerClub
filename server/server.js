import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import AuthRouter from './routers/Auth.js'
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import cors from 'cors';
import UploadRouter from './routers/UploadRouter.js'
import path from 'path';  
import inviteRouter from './routers/generateInvite.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getData from './getData.js';
import { connectToDatabase } from './db.js';
import UserRouter from './routers/User.js'
import { verifyToken } from './checker.js';
import sessionChecker from './sessionChecker.js';
import Player from './models/player.js'; 
import fileUploadRouter from './fileUpload.js';
import uploadDocuments from './uploadDocuments.js'
import GalleryRouter from './routers/galleryRouter.js'
import TeamRouter from './routers/teamRouter.js'
import newsRoutes from './newsFunctions.js';
import instagramRoutes from './instagramRoutes.js'
import documentsRouter from './documentsRouter.js';
import history from 'connect-history-api-fallback';
import pagesRoutes from './pages.js'

dotenv.config();




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));


app.use(history({
  verbose: true
}));

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});



const MongoStoreInstance = MongoStore(session);

app.use(
  session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    store: new MongoStoreInstance({
      mongooseConnection: mongoose.connection,
      ttl: 30 * 24 * 60 * 60, 
    }),
  })
);


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любого источника (*)
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use('/api/auth', AuthRouter)
app.use('/api', GalleryRouter)
app.use('/api/invite', inviteRouter)
app.use('/api/user/', UserRouter)

app.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});


app.get('/players', async (req, res) => {
  try {
    const allPlayers = await Player.find();
    res.json(allPlayers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/users/list', async (req, res) => {
  try {
    const allUsers = await User.find().select('-password');
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/users/list/:id', async (req, res) => {
  try {
    const userId = req.params.id; // Отримуємо ID з URL
    const user = await User.findById(userId); // Використовуємо ID для пошуку користувача
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.delete('/users/list/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    // Удаление игрока из базы данных по указанному ID
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).send('Игрок не найден');
    }

    res.status(200).send('Игрок успешно удален');
  } catch (error) {
    console.error('Ошибка при удалении игрока:', error);
    res.status(500).send('Ошибка сервера при удалении игрока');
  }
});


// API routers


async function startServer() {
  const mongoStoreInstance = await connectToDatabase();
}

startServer();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const currentDate = getCurrentDate();
console.log(currentDate)


app.get('/data', async (req, res) => {
  try {

    const currentDate = getCurrentDate();
    console.log(currentDate);

    const baseApiUrl = 'https://www.fussball.de/ajax.club.matchplan.loadmore/-/datum-bis/2024-06-30/datum-von/+' + 'currentDate' + '/id/00ES8GNAVO00006IVV0AG08LVUPGND5I/match-type/-1/mime-type/html/mode/PAGE/show-venues/false/max/1/offset/';
    const numberOfEvents = 50;

    const promises = [];

    for (let offset = 1; offset <= numberOfEvents; offset++) {
      const apiUrl = baseApiUrl + offset;
      const promise = getData(apiUrl);
      promises.push(promise);
    }

    const allEvents = await Promise.all(promises);

    const flattenedEvents = allEvents.flat();


    res.json(flattenedEvents);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



const secretKey = 'your-secret-key';

app.post('/checkToken', (req, res) => {
  const token = req.body.token;

  if (token) {
    const user = verifyToken(token, 'your-secret-key');

    if (user) {
      res.json({ user });
    } else {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    // Токен не найден
    res.status(401).json({ error: 'Token not found' });
  }
});


app.get('/userDetails/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const db = await connectToDatabase(); 

    const User = mongoose.model('User');

    const user = await User.findOne({ _id: userId });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Players Routes

app.post('/players/add', async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/players', async (req, res) => {
  try {
    const allPlayers = await Player.find();
    res.json(allPlayers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/players/:playerId', async (req, res) => {
  try {
    const playerId = req.params.playerId;
    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/users/getUser', async (req, res) => {
  try {
    const userId = req.body.userid; // Получаем значение userid из тела запроса
    const userData = await Player.findOne({ userId: userId }); // Поиск данных пользователя в базе данных
    if (!userData) {
      return res.status(404).json({ message: 'User data not found' });
    }
    res.json(userData); // Возвращаем данные пользователя
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Teams routes
app.use('/api', TeamRouter);

// Media upload 
app.use('/api', UploadRouter)


// Add new player routes

app.use('/api', fileUploadRouter);
app.use('/api', uploadDocuments);

app.put('/players/:id', async (req, res) => {
  const playerId = req.params.id;
  const updatedData = req.body; // Обновленные данные игрока

  try {
    // Найти игрока по ID и обновить его данные
    const updatedPlayer = await Player.findByIdAndUpdate(playerId, updatedData, { new: true });

    if (updatedPlayer) {
      res.status(200).json({ message: 'Данные игрока обновлены успешно', player: updatedPlayer });
    } else {
      res.status(404).json({ message: 'Игрок не найден' });
    }
  } catch (error) {
    console.error('Произошла ошибка при обновлении данных игрока:', error);
    res.status(500).json({ message: 'Произошла ошибка при обновлении данных игрока' });
  }
});

app.delete('/players/:id', async (req, res) => {
  const playerId = req.params.id;

  try {
    // Удаление игрока из базы данных по указанному ID
    const deletedPlayer = await Player.findByIdAndDelete(playerId);

    if (!deletedPlayer) {
      return res.status(404).send('Игрок не найден');
    }

    res.status(200).send('Игрок успешно удален');
  } catch (error) {
    console.error('Ошибка при удалении игрока:', error);
    res.status(500).send('Ошибка сервера при удалении игрока');
  }
});



// News functions 
app.use('/api', newsRoutes);


// Instagram Routes
app.use('/api', instagramRoutes);

// Documents Routes
app.use('/api/documents/', documentsRouter);

// Pages routes
app.use('/api', pagesRoutes)










const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
const photoPath = path.join(__dirname, '../uploads/players/');
app.use(express.static(photoPath));
const previewPath = path.join(__dirname, '../uploads/videos/');
app.use(express.static(previewPath));
const documentsPath = path.join(__dirname, '../documents');
app.use(express.static(documentsPath));

const newsPath = path.join(__dirname, '../uploads/news');
app.use('/uploads/news', express.static(newsPath, { dotfiles: 'allow' }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
