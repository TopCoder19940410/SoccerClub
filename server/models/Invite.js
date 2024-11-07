import mongoose from 'mongoose';

const inviteSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'trainer', 'coach', 'user'] },
    used: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now, expires: '7d' } 
});

export default mongoose.model('Invite', inviteSchema);
