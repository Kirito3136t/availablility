const express = require("express");
const { ServicesController } = require("../controllers/services.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/",Auth,ServicesController.getAllServices)
router.get("/:id",Auth,ServicesController.getService)

//post requests
router.post("/:id",Auth,ServicesController.createService)

//put requests
router.put("/:id",Auth,ServicesController.updateService)

//delete requests
router.delete("/:id",Auth,ServicesController.deleteService)

//customScripts

module.exports.ServicesRouter = router;