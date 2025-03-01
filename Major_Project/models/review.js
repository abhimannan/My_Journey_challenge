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
    },
    author: {
      type:Schema.Types.ObjectId,
      ref:"User"
    }
});

// model for review
let Review = mongoose.model("Review",reviewsSchema);
module.exports = Review;