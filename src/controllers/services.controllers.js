const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/response.helpers");
const { ServiceService } = require("../services/service.service");

class ServicesController {

    getAllServices = async (req, res) => {
      console.info("ALL SERVICES");
    };
  
    getService = async (req, res) => {
      console.info("SERVICE");
    };
  
    createService = async (req, res) => {
      console.info("SERVICE CREATED");
    };

    updateService = async (req, res) => {
      console.info("SERVICE UPDATED");
    };
  
    deleteService = async (req, res) => {
      console.info("SERVICE DELETED");
    };
  
  }
  
  module.exports.ServicesController = new ServicesController();
  