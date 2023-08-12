const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    type : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    address : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("old product" , productSchema);
