import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  teamPhoto: {
    type: String,
    required: false,
  }
});

const Team = mongoose.model('Team', teamSchema);

export default Team;
