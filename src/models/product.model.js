const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Category: {
    type: [String],
    default: [],
  },
  image_url: {
    type: String,
  },
});

// Define the Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
