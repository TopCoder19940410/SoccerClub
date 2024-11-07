
import crypto from 'crypto';
import InviteKey from '../models/InviteKey.js';

async function generateLink() {
  const key = crypto.randomBytes(16).toString('hex');

  const inviteKey = new InviteKey({ key });
  await inviteKey.save();

  return `http://localhost:3000/user/register/${key}`;
}

export { generateLink };
