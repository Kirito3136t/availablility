const express = require("express");
const { DashboardController } = require("../controllers/dashboard.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/clients",Auth,DashboardController.getAllClients)
router.get("/earnings",Auth,DashboardController.getEarningStats)
router.get("/partners",Auth,DashboardController.getAllPartners)
router.get("/transactions",Auth,DashboardController.getAllTransactions)

//post requests

//put requests

//delete requests

//customScripts

module.exports.DashboardRouter = router;
