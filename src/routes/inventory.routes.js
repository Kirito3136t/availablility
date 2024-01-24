const express = require("express");
const { InventoryController } = require("../controllers/inventory.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/",Auth,InventoryController.getAllProducts)
router.get("/:id",Auth,InventoryController.getProduct)

//post requests
router.post("/:id",Auth,InventoryController.createProduct)

//put requests
router.put("/:id",Auth,InventoryController.updateProduct)

//delete requests
router.delete("/:id",Auth,InventoryController.deleteProduct)

//customScripts

module.exports.InventoryRouter = router;