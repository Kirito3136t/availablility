const { Admin } = require("../models/admin.model");
const BasicServices = require("./basic.service");

class AdminService extends BasicServices {
  constructor() {
    super(Admin);
  }
}

module.exports.AdminService = new AdminService();