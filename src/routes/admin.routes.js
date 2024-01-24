const express = require("express");
const { AdminController } = require("../controllers/admin.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests

//post requests
router.post("/login",AdminController.loginAdmin)
router.post("/forgetPassword/sendOtp",AdminController.sendOtp)
router.post("/forgetPassword/verifyOtp",AdminController.verifyOtp)

//put requests
router.post("/forgetPassword/resetPassword",AdminController.resetPassword)
router.post("/update",Auth,AdminController.updateAdmin)
router.post("/logout",Auth,AdminController.logoutAdmin)

//delete requests

//customScripts

module.exports.AdminRouter = router;
