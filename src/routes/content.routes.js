const express = require("express");
const { ContentController } = require("../controllers/content.controllers");
const { Auth } = require("../middlewares/auth.middlewares");
const router = express.Router();

//get requests
router.get("/terms",Auth,ContentController.getTermsAndConditions)
router.get("/policy",Auth,ContentController.getPrivacyPolicy)
router.get("/about",Auth,ContentController.getAboutUs)
router.get("/FAQ",Auth,ContentController.getFAQ)

//post requests

//put requests

//delete requests

//customScripts

module.exports.ContentRouter = router;