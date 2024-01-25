const HttpError = require("../helpers/httpError.helpers");
const Response = require("../helpers/response.helpers");
const { ContentService } = require("../services/content.service");

class ContentController {
  
    getTermsAndConditions = async (req, res) => {
      console.info("TERMS AND CONDITIONS");
    };

    getPrivacyPolicy = async (req, res) => {
      console.info("PRIVACY POLICY");
    };

    getAboutUs = async (req, res) => {
      console.info("ABOUT US");
    };

    getFAQ = async (req, res) => {
      console.info("FAQ's");
    };
  
  }
  
  module.exports.ContentController = new ContentController();