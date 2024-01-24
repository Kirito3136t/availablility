const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  terms: {
    type: String,
    required: true,
  },
  policy: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  FAQ: {
    type: String,
    required: true,
  },
});

// Define the Content model using the schema
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;