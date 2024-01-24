const { Package } = require("../models/package.model");
const BasicServices = require("./basic.service");

class PackageService extends BasicServices {
  constructor() {
    super(Package);
  }
}

module.exports.PackageService = new PackageService();
