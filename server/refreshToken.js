import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '/../.env') });

async function refreshAccessToken() {
  try {
    const INSTA_SECRET = process.env.INSTA_SECRET;

    const response = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&client_secret=${INSTA_SECRET}&access_token=${process.env.INSTA_TOKEN}`);

    const { access_token, expires_in } = response.data;
    console.log('Refreshed Access Token:', access_token);
    console.log('Expires In:', expires_in);

    process.env.INSTA_TOKEN = access_token;
    process.env.INSTA_TOKEN_DATE = new Date().toISOString();

    const envPath = join(__dirname, '/../.env');
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');

    const updatedLines = lines.map(line => {
      if (line.startsWith('INSTA_TOKEN=')) {
        return `INSTA_TOKEN=${access_token}`;
      } else if (line.startsWith('INSTA_TOKEN_DATE=')) {
        return `INSTA_TOKEN_DATE=${process.env.INSTA_TOKEN_DATE}`;
      }
      return line;
    });

    fs.writeFileSync(envPath, updatedLines.join('\n'), 'utf-8');

    logToFile(`Refreshed Access Token: ${access_token}, Expires In: ${expires_in} seconds`);
  } catch (error) {
    console.error('Error refreshing access token:', error.message);
    logToFile(`Error refreshing access token: ${error.message}`);
    logToFile(`Server Response: ${JSON.stringify(error.response?.data)}`);
  }
}

function logToFile(message) {
  const logFilePath = join(__dirname, '/../token_refresh_log.txt');
  const logMessage = `${new Date().toISOString()}: ${message}\n`;

  fs.appendFileSync(logFilePath, logMessage, 'utf-8');
}

setInterval(refreshAccessToken, 24 * 60 * 60 * 1000);

refreshAccessToken();
