const HttpError = require('../helpers/httpError.helpers')
const Logger = require('../helpers/logger.helpers')
const Response = require("../helpers/response.helpers");
const { UserService } = require("../services/user.service");
const UserHelper = require('../helpers/user.helper')
const axios = require('axios')
const geoip = require('geoip-lite');


class UserController {

    getAllUsers = async (req, res) => {
      console.info("ALL USERS");
    };
  
    getUser = async (req, res) => {
      console.info("USER");
    };
  
    createUser = async (req, res) => {
      const { username, email, password, phoneno, gender, address } = req.body;

      
      // Get client's IP address
      const clientIp = '192.168.0.1';
      

      // Perform IP geolocation lookup
      const location = geoip.lookup(clientIp);
      console.log(location);
      
      // Validate request data
      if (!username || !email || !password || !phoneno || !gender || !address) {
        throw new HttpError(400, 'All fields are mandatory!');
      }
      if (phoneno.length !== 10) {
        throw new HttpError(400, 'Please enter a valid phone number');
      }
      if (address.length > 40) {
        throw new HttpError(400, 'Address is too long!');
      }
  
      // Check if user already exists
      const userExists = await UserService.findOne({ email });
      if (userExists) {
        throw new HttpError(400, 'User already exists!');
      }
  
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
  
      // Create user with OTP
      const hashedPassword = await UserHelper.hashPassword(password);
      const user = await UserService.create({
        username,
        password: hashedPassword,
        email,
        phoneno,
        gender,
        address,
        otp,
      });
  
      // Send OTP via SMS
      // await axios.get(
      //   `https://2factor.in/API/V1/79df5389-c004-11ee-8cbb-0200cd936042/SMS/+91${phoneno}/${otp}/OTP1`
      // );
  
      // Log and respond with success message
      Logger.info(`User Created: ${user}`);
      Response(res).status(201).message('User created successfully').body({ user }).send();
    };

    

    // sendOtp = async (req, res) => {
    //   const { phoneno } = req.body;
  
    //   console.log(req.body);
    //   // if (!phoneno) {
    //   //   throw new HttpError(400, "Please enter your mobile number");
    //   // } else if (phoneno.lenght != 10) {
    //   //   throw new HttpError(400, "Please enter valid mobile number");
    //   // }
  
    //   // Generate OTP
    //   const otp = Math.floor(100000 + Math.random() * 900000);
  
    //   // const user = new UserService({
    //   //   mobile: phoneno,
    //   //   otp: otp,
    //   // });
  
    //   const user = await UserService.create({
    //     phoneno: Number(phoneno),
    //     otp: Number(otp),
    //     name: "sarvesh",
    //     password: "sarvesh",
    //     email: "sarvesh2902@gmail.com",
    //     gender: "Male",
    //     address: "address",
    //   });
  
    //   await axios.get(
    //     `https://2factor.in/API/V1/79df5389-c004-11ee-8cbb-0200cd936042/SMS/+91${phoneno}/${otp}/OTP1`
    //   );

    //   Response(res).status(201).message('Otp sent succesfully').send();
    // };
  
    verifyOtp = async (req, res) => {
      const { phoneno, otp } = req.body;
      // console.log(req.body);
  
      // Find user by verificationId and check if OTP matches
      const user = await UserService.findOne({ phoneno });
      console.log(user)
      if (!user || user.otp !== Number(otp)) {
        res.status(400).json({ error: "Invalid OTP" });
        return;
      }
  
      // OTP verification successful
      // Perform any other necessary actions like creating a session or generating a token
      res.json({ message: "OTP verification successful", name: user.username });
    };
  
    updateUser = async (req, res) => {
      console.info("USER UPDATED");
    };
  
    deleteUser = async (req, res) => {
      console.info("USER DELETED");
    };

    resetPassword = async (req, res) => {
      Logger.info(`Request received: ${req.method} ${req.url}`);
  
      const { email, phoneno, otp, newPassword } = req.body;
  
      try {
        // Find user by email or phone number and check if OTP matches
        const user = await UserService.findOne({ $or: [{ email }, { phoneno }] });
        if (!user) {
          throw new HttpError(404, "User not found!");
        }
        if (user.otp !== Number(otp)) {
          throw new HttpError(400, "Invalid OTP");
        }
  
        // Hash the new password and update user's password
        const hashedPassword = await UserHelper.hashPassword(newPassword);
        user.password = hashedPassword;
        await user.save();

        console.log(user.password)
  
        Logger.info(`Password has been reset for user: ${user.username}`);
        return Response(res).status(200).message('Password has been reset!').send();
      } catch (error) {
        throw new HttpError(400,error)
      }
    };
  
    loginUser = async (req, res) => {
      Logger.info(`Request received: ${req.method} ${req.url}`);
    
      const { email, password } = req.body;
      if (!email || !password) {
        throw new HttpError(400, "All fields Mandatory!");
      }
    
      try {
        const user = await UserService.findOne({ email });
    
        if (!user || !(await UserHelper.verifyPassword(password, user.password))) {
          throw new HttpError(401, "User does not exist!");
        }
    
        const token = UserHelper.generateToken(user);
        UserHelper.addSession.call(user, token, 3600000); // 1 hour
    
        // Set the token as a cookie
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 3600000, // 1 hour
        });
    
        Logger.info(`User logged In: ${user}`);
        return Response(res).status(200).message('User logged in').send();
      } catch (error) {
        // Handle errors
        if (error instanceof HttpError) {
          return Response(res).status(error.statusCode).message(error.message).send();
        } else {
          Logger.error(`Error logging in user: ${error.message}`);
          return Response(res).status(500).message('Internal Server Error').send();
        }
      }
    };
    
    


    updateUser = async (req, res) => {
      console.info("USER UPDATED");
    };
  
    deleteUser = async (req, res) => {
      Logger.info(`Request received: ${req.method} ${req.url}`);
    
      const { email } = req.body;
    
      try {
        // Find the user by email
        const user = await UserService.findOne({ email });
        if (!user) {
          throw new HttpError(400, 'No user associated with the email is found!');
        }
    
        // Delete the user
        await UserService.deleteOne({ email }); // Assuming UserService.deleteOne deletes based on email
    
        Logger.info(`User deleted: ${email}`);
        return Response(res).status(200).message('User deleted successfully').send();
      } catch (error) {
        // Handle errors
        if (error instanceof HttpError) {
          return Response(res).status(error.statusCode).message(error.message).send();
        } else {
          Logger.error(`Error deleting user: ${error.message}`);
          return Response(res).status(500).message('Internal Server Error').send();
        }
      }
    };
    
  
  }
  
  module.exports.UserController = new UserController();
  