const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  phoneno:{
    type:Number,
  },
  otp:{
    type:Number,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  // active: {
  //   type: Boolean,
  //   default: true,
  // },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // DOB: {
  //   type: Date,
  //   required: true,
  // },
  // appointments: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   default: [],
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports.User = User;