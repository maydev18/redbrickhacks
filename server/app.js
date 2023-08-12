const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

