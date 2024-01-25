const express = require("express");
const { AdminController } = require("../controllers/admin.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests

//post requests
router.post('/register', AdminController.registerAdmin);
router.post("/login",AdminController.loginAdmin)
router.post("/sendOtp",AdminController.sendOtp)
router.post("/verifyOtp",AdminController.verifyOtp)
router.post("/:id",Auth,AdminController.logoutAdmin)
router.post("/resetPassword",AdminController.resetPassword)

//put requests
router.put("/:id",Auth,AdminController.updateAdmin)


//delete requests

//customScripts

module.exports.AdminRouter = router;
