const HttpError = require("../helpers/httpError.helpers");
const Response = require("../helpers/response.helpers");
// const { InventoryService } = require("../services/inventory.service");

class InventoryController {

    getAllProducts = async (req, res) => {
      console.info("ALL PRODUCTS");
    };
  
    getProduct = async (req, res) => {
      console.info("PRODUCT");
    };
  
    createProduct = async (req, res) => {
      console.info("PRODUCT CREATED");
    };

    updateProduct = async (req, res) => {
      console.info("PRODUCT UPDATED");
    };
  
    deleteProduct = async (req, res) => {
      console.info("PRODUCT DELETED");
    };
  
  }
  
  module.exports.InventoryController = new InventoryController();