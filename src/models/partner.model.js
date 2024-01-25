const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  salons: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  orders: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  Inventory: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the Partner model using the schema
const Partner = mongoose.model('Partner', partnerSchema);

module.exports.Partner = Partner;