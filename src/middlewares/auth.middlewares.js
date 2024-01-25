const jwt = require('jsonwebtoken');

const AdminService = require("../services/admin.service");

const Logger = require("../helpers/logger.helpers");
const HttpError = require('../helpers/httpError.helpers');

const { JWT_SECRET } = process.env;

const Auth = async (req, res, next) => {
    const token = req.body.token;
    if (!token) {
      throw new HttpError(401, 'Unauthorized: Missing Token');
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await AdminService.findById(decoded._id);

    if (!admin || !decoded._id === admin._id) {
      throw new HttpError(401, 'Unauthorized: Invalid Token');
    }

    req.user = admin;

    Logger.info(`Admin authenticated: ${admin}`);
    next();
};

module.exports = { Auth };