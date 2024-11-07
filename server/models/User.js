import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  role: String,
  photo: {
    type: String,
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
  height: {
    type: String
  },

  weight: {
    type: String
  }

});

userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

const User = mongoose.model('User', userSchema);

export default User;
