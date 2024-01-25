const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  partner_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  products: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    required: true,
  },
});

// Define the Orders model using the schema
const Order = mongoose.model('Order', orderSchema);

module.exports.Order = Order;