const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    companySize : {
        type : String,
    },
    type : {
        type : String,
        required : true
    },
    token : {type : String},
    tokenExpire : {type : Date},
});

module.exports = mongoose.model("User" , userSchema);