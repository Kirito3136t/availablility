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
router.post("/sendOtp",UserController.sendOtp)

//put requests
router.put("/:id",Auth,UserController.updateUser)

//delete requests
router.delete("/:id",Auth,UserController.deleteUser)

//customScripts

module.exports.UserRouter = router;