const HttpError = require("../helpers/httpError.helpers");
const Response = require("../helpers/response.helpers");
const { PartnerService } = require("../services/partner.service");

class PartnerController {

    getAllPartners = async (req, res) => {
      console.info("ALL PARTNERS");
    };

    getPartner = async (req, res) => {
      console.info("PARTNER");
    };

    getAllAppointments = async (req, res) => {
      console.info("ALL APPOINTMENTS");
    };

    getAllStaff = async (req, res) => {
      console.info("ALL STAFF");
    };

    getStaff = async (req, res) => {
      console.info("STAFF");
    };

    getAllServices = async (req, res) => {
      console.info("ALL SERVICES");
    };

    getService = async (req, res) => {
      console.info("SERVICE");
    };
  
    createPartner = async (req, res) => {
      console.info("PARTNER CREATED");
    };

    createProduct = async (req, res) => {
      console.info("PRODUCT CREATED");
    };

    createPackage = async (req, res) => {
      console.info("PACKAGE CREATED");
    };

    createStaff = async (req, res) => {
      console.info("STAFF CREATED");
    };

    createService = async (req, res) => {
        console.info("SERVICE CREATED");
    };

    updatePartner = async (req, res) => {
        console.info("PARTNER UPDATED");
    };

    updateStaff = async (req, res) => {
      console.info("STAFF UPDATED");
    };

    updateService = async (req, res) => {
      console.info("SERVICE UPDATED");
    };

    deletePartner = async (req, res) => {
      console.info("PARTNER DELETED");
    };

    deleteStaff = async (req, res) => {
      console.info("STAFF DELETED");
    };

    deleteService = async (req, res) => {
      console.info("SERVICE DELETED");
    };
  
}
  
module.exports.PartnerController = new PartnerController();