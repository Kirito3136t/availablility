const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/response.helpers");
const { AdminService } = require("../services/admin.service");

class AdminController {

  loginAdmin = async (req, res) => {
    console.info("ADMIN LOGGEGD IN");
  };

  sendOtp = async (req, res) => {
    console.info("OTP SENT");
  };

  verifyOtp = async (req, res) => {
    console.info("OTP VERIFIED");
  };

  resetPassword = async (req, res) => {
    console.info("PASSWORD RESET");
  };

  updateAdmin = async (req,res) => {
    console.info("ADMIN UPDATED");
  };

  logoutAdmin = async (req,res) => {
    console.info("ADMIN LOGGED OUT");
  };

}

module.exports.AdminController = new AdminController();
