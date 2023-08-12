const bcrypt = require("bcrypt");

const mail = require("../utils/mail");
const {validationResult} = require("express-validator");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const checkErrors = (errors) => {
    if(errors.isEmpty()) return undefined;
    const err = new Error("wrong data entered");
    err.statusCode = 422;
    err.data = errors.array();
    return err;
}

exports.signup = async (req, res, next) => {
    const validationError = checkErrors(validationResult(req));
    if(validationError){
        return next(validationError);
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    let companySize = req.body.companySize;
    const type = req.body.type;
    if(!companySize) companySize = undefined;
    let emailText = "welcome user! You can now sell your waste product or can start buying sustainable products from sustainable brands";
    if(type == 1){
        emailText = "We are excited to onboard your company " + name + " as a sustainable clothing brand";
    }
    else if(type == 2){
        emailText = "We are excited to onboard your company " + name + " as a sustainable tech brand";
    }
    try {
        const alreadyExist = await User.findOne({$or : [{email : email} , {phone : phone}]});
        if (alreadyExist) {
            const err = new Error("email or phone already in use");
            err.statusCode = 409;
            throw err;
        }
        hashedpass = await bcrypt.hash(password, 12);
        const user = new User({
            email: email,
            password: hashedpass,
            name : name,
            phone : phone,
            type : type,
            companySize : companySize
        })
        const result = await user.save();
        const mailOptions = {
            from: 'ms772254@gmail.com',
            to: email,
            subject: 'Welcome user',
            text: emailText
        };
        mail.mail(mailOptions);
        console.log("user created");
        res.status(201).json({
            message: "User created",
            userId: user._id
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.login = async (req , res , next) => {
    const validationError = checkErrors(validationResult(req));
    if(validationError){
        return next(validationError);
    }
    try{
        const email = req.body.email;
        const password = req.body.password;
        const loadedUser = await User.findOne({email : email});
        if(!loadedUser){
            const err = new Error("No such user found");
            err.statusCode = 404;
            throw err;
        }  
        const match = await bcrypt.compare(password , loadedUser.password);
        if(!match){
            const err = new Error("please enter a correct password");
            err.statusCode = 401;
            throw err;
        }
        const token = jwt.sign({
            email : loadedUser.email,
            userId :loadedUser._id.toString()},
            "somesupersupersupersecret",
            {expiresIn : "2h"}
        );
        res.status(200).json({
            token : token,
            user : loadedUser
        })
    }
    catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}