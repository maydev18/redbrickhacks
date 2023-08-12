const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const {body} = require("express-validator");
const isAuth = require("../middleware/isAuth");

router.post("/addproduct" , isAuth , [
    body("type").trim().toLowerCase(),
    body("quantity").trim().toInt(),
    body("address").trim().toLowerCase().isLength({min : 10}).withMessage("Please enter a complete address")
] , userController.addProduct);

router.get("/get-products" , isAuth , userController.getProducts);
module.exports = router;
