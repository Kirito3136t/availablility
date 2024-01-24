const express = require("express");
const { PartnerController } = require("../controllers/partner.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/",Auth,PartnerController.getAllPartners)
router.get("/:id",Auth,PartnerController.getPartner)
router.get("/:id/appointments",Auth,PartnerController.getAllAppointments)
router.get("/:id/staff/",Auth,PartnerController.getAllStaff)
router.get("/:id/staff/:id",Auth,PartnerController.getStaff)
router.get("/:id/services/",Auth,PartnerController.getAllServices)
router.get("/:id/services/:id",Auth,PartnerController.getService)

//post requests
router.post("/:id",Auth,PartnerController.createPartner)
router.post("/product",Auth,PartnerController.createProduct)
router.post("/package",Auth,PartnerController.createPackage)
router.post("/:id/staff/create",Auth,PartnerController.createStaff)
router.post("/:id/services/create",Auth,PartnerController.createService)


//put requests
router.put("/:id",Auth,PartnerController.updatePartner)
router.put("/:id/staff/:id",Auth,PartnerController.updateStaff)
router.put("/:id/services/:id",Auth,PartnerController.updateService)

//delete requests
router.delete("/:id",Auth,PartnerController.deletePartner)
router.delete("/:id/staff/:id",Auth,PartnerController.deleteStaff)
router.delete("/:id/services/:id",Auth,PartnerController.deleteService)


//customScripts

module.exports.PartnerRouter = router;