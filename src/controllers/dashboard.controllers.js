const HttpError = require("../helpers/httpError.helpers");
const Response = require("../helpers/response.helpers");
const { UserService } = require("../services/user.service");
const { PartnerService } = require("../services/partner.service");
const { OrderService } = require("../services/order.service");
const { AppointmentService } = require("../services/appointment.service");

class DashboardController {

    getAllClients = async (req, res) => {
      console.info("ALL CLIENTS");
      res.send();
    };
  
    getEarningStats = async (req, res) => {
      console.info("EARNING STATISTICS");
    };
  
    getAllPartners = async (req, res) => {
      console.info("ALL PARTNERS");
    };
  
    getAllTransactions = async (req, res) => {
      console.info("ALL TRANSACTIONS");
    };
  
  }
  
  module.exports.DashboardController = new DashboardController();
  