import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  nationality: {
    type: String
  },
  street: {
    type: String
  },
  zip: {
    type: String
  },
  city: {
    type: String
  },
  phone: {
    type: String
  },
  parent: {
    type: String
  },
  parentPhone: {
    type: String
  },
  passport: {
    type: String
  },

});

const Player = mongoose.model('Player', playerSchema, 'players');

export default Player;
