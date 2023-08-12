const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    type : {
        type : String,
        required : true
    },
    name : {
        type : Number,
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
        required : true
    },
    imageURL : {
        type : string
    }
});

module.exports = mongoose.model("old product" , productSchema);
