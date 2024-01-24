const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  services: {
    type: [String],
    default: [],
  },
  icon_url: {
    type: String,
  },
});

// Define the Package model using the schema
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;