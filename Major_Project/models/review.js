let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// Schema for reviews
let reviewsSchema = new Schema({
    comment:String,
    rating:{
         type:Number,
         min:1,
         max:5
    },
    createdAt:{
         type:Date,
         default:new Date()
    }
});

// model for review
let Review = mongoose.model("ReviewModel",reviewsSchema);
module.exports = Review;