const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    type : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    price : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
        // required : true
    },
    imageURL : {
        type : String
    }
});

module.exports = mongoose.model("new product" , productSchema);
