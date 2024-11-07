// proxyServer.js

import express from 'express';
import axios from 'axios';

const app = express();
const port = 5173;

app.use(express.json());

app.get('/getData', async (req, res) => {
  try {
    const apiUrl = req.query.url; 
    const response = await axios.get(apiUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
