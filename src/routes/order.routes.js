const express = require("express");
const { OrderController } = require("../controllers/order.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/",Auth,OrderController.getAllOrders)
router.get("/:id",Auth,OrderController.getOrder)

//post requests
router.post("/:id",Auth,OrderController.createOrder)

//put requests
router.put("/:id",Auth,OrderController.updateOrder)

//delete requests
router.delete("/:id",Auth,OrderController.deleteOrder)

//customScripts

module.exports.OrderRouter = router;