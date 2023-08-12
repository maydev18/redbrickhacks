const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    material : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    closingDate : {
        type : String,
        required : true
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
});

module.exports = mongoose.model("techrequest" , userSchema);