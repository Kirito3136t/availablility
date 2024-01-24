const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  salon: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    default: [],
  },
  packages: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Define the Appointments model using the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
