const { Content } = require("../models/content.model");
const BasicServices = require("./basic.service");

class ContentService extends BasicServices {
  constructor() {
    super(Content);
  }
}

module.exports.ContentService = new ContentService();
