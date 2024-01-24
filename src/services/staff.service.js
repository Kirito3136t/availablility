const { Staff } = require("../models/staff.model");
const BasicServices = require("./basic.service");

class StaffService extends BasicServices {
  constructor() {
    super(Staff);
  }
}

module.exports.StaffService = new StaffService();
