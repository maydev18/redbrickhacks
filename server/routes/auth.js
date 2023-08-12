const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const {body} = require("express-validator");

router.post("/signup" ,
[
    body("email").isEmail().withMessage("please enter a valid mail")
    .normalizeEmail(),
    body("password").trim().isLength({min : 5}).withMessage("please enter a password with atleast 5 characters"),
    body("phone").trim().isNumeric().withMessage("please enter only numbers").isLength(10).withMessage("please enter a phone with 10 digits"),
    body("name").trim().toLowerCase()
], authController.signup);
module.exports = router;