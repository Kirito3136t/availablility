const HttpError = require("../helpers/HttpError.helpers");
const Response = require("../helpers/response.helpers");
const { UserService } = require("../services/user.service");

class UserController {

    getAllUsers = async (req, res) => {
      console.info("ALL USERS");
    };
  
    getUser = async (req, res) => {
      console.info("USER");
    };
  
    createUser = async (req, res) => {
      console.info("USER CREATED");
    };

    updateUser = async (req, res) => {
      console.info("USER UPDATED");
    };
  
    deleteUser = async (req, res) => {
      console.info("USER DELETED");
    };
  
  }
  
  module.exports.UserController = new UserController();
  