const { AdminService } = require("../services/admin.service");
const HttpError=require('../helpers/httpError.helpers')
const Response = require("../helpers/response.helpers");
const AdminHelpers = require("../helpers/admin.helpers");
const Logger = require('../helpers/logger.helpers');

class AdminController {

  //@desc Register a Admin
  //@route POST /api/admin/register
  //@access public
  registerAdmin = async (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);
    
    const { username, password, email, roles } = req.body;
    if (!username || !email || !password) {
      throw new HttpError(400, "All fields Mandatory!");
    }

    const adminAvailable = await AdminService.findOne({ email });
    if (adminAvailable) {
      throw new HttpError(400, "User already registered!");
    }

    const hashedPassword = await AdminHelpers.hashPassword(password);
    const admin = await AdminService.create({
      username,
      password: hashedPassword,
      email,
      roles
    });

    if (admin) {
      Logger.info(`Admin Created: ${admin}`);
      Response(res).status(201).message('Admin created successfully').body({ admin }).send();
    } else {
      throw new HttpError(400, "Admin data is not valid");
    }
  };

  //@desc Login a Admin
  //@route POST /api/admin/login
  //@access public
  loginAdmin = async (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);

    const { email, password } = req.body;
    if (!email || !password) {
      throw new HttpError(400, "All fields Mandatory!");
    }

    const admin = await AdminService.findOne({ email });

    if (!admin || !(await AdminHelpers.verifyPassword(password, admin.password))) {
      throw new HttpError(401, "Admin does not exsist!");
    }

    const token = AdminHelpers.generateToken(admin);
    AdminHelpers.addSession.call(admin, token, 3600000); // 1 hour

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
    });

    Logger.info(`Admin logged In: ${admin}`);
    Response(res).status(200).message('Admin created successfully').body({ token }).send();
  };

  //@desc send OTP to email of Admin
  //@route POST /api/admin/sendOtp
  //@access public
  sendOtp = async (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);

    const { email } = req.body;
    const admin = await AdminService.findOne({ email });
    if (!admin) {
      throw new HttpError(401, "Admin does not exsist!");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    admin.otp = otp;
    await admin.save();

    await AdminHelpers.sendOTP(email, otp);

    Logger.info(`OTP sent to email: ${admin}`);
    Response(res).status(200).message('OTP sent to email!').body({ admin }).send();
  };

  //@desc verify OTP sent to email of Admin
  //@route POST /api/admin/verifyOtp
  //@access public
  verifyOtp = async (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);

    const { email, otp } = req.body;
    const admin = await AdminService.findOne({ email, otp });
    if (!admin) {
      throw new HttpError(401, "Admin does not exsist!");
    }

    if (admin.sessions && admin.sessions.length > 0) {
      AdminHelpers.removeSession.call(admin, admin.sessions[0].token);
    } else {
      throw new HttpError(401, "Session removal failed!");
    }

    const token = AdminHelpers.generateToken(admin);
    AdminHelpers.addSession.call(admin, token, 3600000); // 1 hour

    // Set the token as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
    });

    Logger.info(`OTP has been verified: ${admin}`);
    Response(res).status(200).message('OTP has been verified!').body({ admin }).send();
  };

  //@desc reset password of Admin
  //@route POST /api/admin/resetPassword
  //@access public
  resetPassword = async (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);

    const { email, otp, newPassword } = req.body;
    const admin = await AdminService.findOne({ email, otp });
    if (!admin) {
      res.status(401)
      throw new HttpError(401, "Admin does not exsist!");
    }

    const hashedPassword = await AdminHelpers.hashPassword(newPassword);
    admin.password = hashedPassword;
    admin.otp = undefined;
    await admin.save();

    Logger.info(`Password has been reset: ${admin}`);
    Response(res).status(200).message('Password has been reset!').body({ admin }).send();
  };

  //@desc update details of Admin
  //@route PUT /api/admin/:id
  //@access private
  updateAdmin = async (req,res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`);

    const { username, email, roles } = req.body;
    const adminId = req.params.id;

    // Check if the admin exists
    const existingAdmin = await AdminService.findById(adminId);
    if (!existingAdmin) {
      return new HttpError(404, "Admin not found!");
    }

    // Update the admin details
    existingAdmin.username = username || existingAdmin.username;
    existingAdmin.email = email || existingAdmin.email;
    existingAdmin.roles = roles || existingAdmin.roles;

    // Save the updated admin
    const updatedAdmin = await AdminService.findByIdAndUpdate(adminId, existingAdmin, { new: true });

    Logger.info(`Admin updated successfully: ${updatedAdmin}`);
    Response(res).message('Admin updated successfully!').body({ updatedAdmin }).send();
  };

  //@desc logout Admin
  //@route POST /api/admin/:id
  //@access private
  logoutAdmin = async (req,res) => {
    const adminId = req.params.id; // Assuming you have authentication middleware setting req.user

    // Remove the admin's session
    const admin = await AdminService.findById(adminId);
    if (!admin) {
      return new HttpError(404, "Admin not found");
    }

    const token = req.cookies.token;
    console.log(token)
    if (!token) {
      throw new HttpError(400, "No session token found in the request");
    }

    AdminHelpers.removeSession.call(admin, token);

    // Clear the token cookie
    res.clearCookie('token');

    Logger.info(`Admin logged out successfully: ${updatedAdmin}`);
    Response(res).status(200).message('Admin logged out successfully!').send();
  };

}

module.exports.AdminController = new AdminController();
