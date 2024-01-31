const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
  },
  otp: {
    type: String,
    default: undefined,
  },
  sessions: [
    {
      token: String,
      expiresAt: Number,
    },
  ],
  roles: {
    type:String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports.Admin = Admin;