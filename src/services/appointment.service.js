const { Appointment } = require("../models/appointment.model");
const BasicServices = require("./basic.service");

class AppointmentService extends BasicServices {
  constructor() {
    super(Appointment);
  }
}

module.exports.AppointmentService = new AppointmentService();
