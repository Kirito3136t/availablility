const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    default: [],
  },
});

// Define the Staff model using the schema
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
