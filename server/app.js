const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());

const fileStorge = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , "images");
    },
    filename : (req , file , cb) => {
        cb(null , Date.now().toString() + "-" + file.originalname);
    }
});
const fileFilter = (req , file , cb) => {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
        cb(null , true);
    }
    else {
        cb(null , false);
    }
}
app.use(bodyParser.json());

app.use(multer({
    storage : fileStorge,
    fileFilter : fileFilter
}).single('image'));

app.use("/auth" , require("./routes/auth"));
app.use("/user" , require("./routes/user"));


//error handler
app.use((error , req , res , next) => {
    console.log(error);
    const status = error.statusCode;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message : message , data : data});
})

const MONGODB_URI = 'mongodb+srv://mayank:mayanksharma@cluster0.xpmtenf.mongodb.net/sustainable?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
.then(res => {
    console.log("connected");
    app.listen(process.env.POST || 3000);
})
.catch(err => {
    console.log(err);
})

