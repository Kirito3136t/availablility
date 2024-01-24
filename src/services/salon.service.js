const { Salon } = require("../models/salon.model");
const BasicServices = require("./basic.service");

class SalonService extends BasicServices {
  constructor() {
    super(Salon);
  }
}

module.exports.SalonService = new SalonService();
