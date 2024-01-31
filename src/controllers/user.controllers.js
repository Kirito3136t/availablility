const { use } = require('express/lib/router');
const HttpError = require('../helpers/httpError.helpers')
const Logger = require('../helpers/logger.helpers')
const Response = require("../helpers/response.helpers");
const { UserService } = require("../services/user.service");
const UserHelper = require('../helpers/user.helper')



class UserController {

    getAllUsers = async (req, res) => {
      console.info("ALL USERS");
    };
  
    getUser = async (req, res) => {
      console.info("USER");
    };
  
    createUser = async (req, res) => {
      const { name, email, password, phoneno, gender ,address } = req.body;
    
      if (!name || !email || !password || !phoneno || !gender || !address) {
        throw new HttpError(400, "All fields are mandatory!");
      } else if (phoneno.length !== 10) {
        throw new HttpError(400, "Please enter a valid phone number");
      }else if(address.length > 40){
        throw new HttpError(400,"Address is too long !!")
      }
    
      const userAvailable = await UserService.findOne({ email });
      if (userAvailable) {
        throw new HttpError(400, "User already exists!");
      }
    
      const hashedPassword = await UserHelper.hashPassword(password);
      const user = await UserService.create({
        name,
        password: hashedPassword,
        email,
        phoneno,
        gender,
        address
      });
    
      if (user) {
        Logger.info(`User Created: ${user}`);
        Response(res).status(201).message('User created successfully').body({ user }).send();
      } else {
        throw new HttpError(400, "User data is not valid");
      }
    };

    

    sendOtp = async (req, res) => {
      const {phoneno}=req.body

      if(!phoneno){
        throw new HttpError(400,"Please enter your mobile number")
      }else if(phoneno.lenght!=10){
        throw new HttpError(400,"Please enter valid mobile number")
      }

      let digits='0123456789';
      let OTP="";
      for(let i=0;i<4;i++){
        OTP += digits[Math.floor(Math.random()*10)]
      }

      await client.messages

    };
    


    updateUser = async (req, res) => {
      console.info("USER UPDATED");
    };
  
    deleteUser = async (req, res) => {
      console.info("USER DELETED");
    };
  
  }
  
  module.exports.UserController = new UserController();
  