const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  partner_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  staff: {
    type: [String],
    default: [],
  },
  services: {
    type: [String],
    default: [],
  },
  products: {
    type: [String],
    default: [],
  },
  packages: {
    type: [String],
    default: [],
  },
  appointments: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

// Define the Salon model using the schema
const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;