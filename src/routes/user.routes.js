const express = require("express");
const { UserController } = require("../controllers/user.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const { User } = require("../models/user.model");
const router = express.Router();

//get requests
router.get("/",Auth,UserController.getAllUsers)

router.get("/:id",Auth,UserController.getUser)

//post requests
router.post("/create",UserController.createUser)
router.post("/verifyOtp",UserController.verifyOtp)
router.post("/resetPassword",UserController.resetPassword)
router.post("/login",UserController.loginUser)

//put requests
router.put("/:id",UserController.updateUser)

//delete requests
router.delete("/delete",UserController.deleteUser)

//customScripts

module.exports.UserRouter = router;