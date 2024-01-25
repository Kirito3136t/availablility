const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  Category: {
    type: [String],
    default: [],
  },
  icon_url: {
    type: String,
  },
});

// Define the Services model using the schema
const Service = mongoose.model('Service', serviceSchema);

module.exports.Service = Service;
