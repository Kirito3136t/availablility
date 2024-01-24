const { Partner } = require("../models/partner.model");
const BasicServices = require("./basic.service");

class PartnerService extends BasicServices {
  constructor() {
    super(Partner);
  }
}

module.exports.PartnerService = new PartnerService();
