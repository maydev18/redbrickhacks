const TechRequest = require("../models/techrequest.js");
const User = require("../models/user.js");
const OldProduct = require("../models/oldProduct.js");
const {validationResult} = require("express-validator");

const checkErrors = (errors) => {
    if(errors.isEmpty()) return undefined;
    const err = new Error("wrong data entered");
    err.statusCode = 422;
    err.data = errors.array();
    return err;
}

exports.addProduct = async(req , res , next) => {
    const validationError = checkErrors(validationResult(req));
    if(validationError){
        return next(validationError);
    }
    try{
        const quantity = req.body.quantity;
        const address = req.body.address;
        const userId = req.userId;
        const type = req.body.type;
        const product = new OldProduct({
            address : address,
            quantity :  quantity,
            type : type,
            userId : userId
        })
        await product.save();
        res.status(201).json({
            message : "old product created",
            product : product
        })
    }
    catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.gettechrequest = async(req , res , next) => {
    try{
        const userId  = req.userId;
        const tr = await TechRequest.find();
        res.status(201).json({
            message : "products fetched",
            techRequests : tr
        })
    }
    catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.postAddTechRequest = async (req , res , next) => {
    try{
        const material = req.body.material;
        const quantity = req.body.quantity;
        const userId = req.userId;
        const closingDate = req.body.closingDate;
        const tr = new TechRequest({
            material : material,
            quantity :  quantity,
            closingDate : closingDate,
            userId : userId
        })
        await tr.save();
        res.status(201).json({
            message : "Request created",
            request : tr
        })
    }
    catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}