let mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
    title : {
        type : String,
    },
    description : {
        type : String,
    },
    image : {
        filename :{
            type : String,
        },
        url : {
            type : String,
            default : "default image link",
            set : (v)=> (v)===""? "default link" : v,
        }
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    }
});

let Listing = mongoose.model("Listing",listingSchema)

module.exports = Listing;