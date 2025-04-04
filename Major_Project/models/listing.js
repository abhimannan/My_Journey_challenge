// getting-started.js
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Review = require("./review.js");

let ListingSchema=new mongoose.Schema({
  title:{
     type:String,
     required:true,
   },
   description:{
     type:String,
   },
   image:{
    file:String,
     url:{
       type:String,
       default:"https://cdn.dubai-marina.com/media/internal_articles_image/3._Premier_Suite.jpg",
     set:(v)=>v==""?
     "https://cdn.dubai-marina.com/media/internal_articles_image/3._Premier_Suite.jpg"
     :v,
     }
   },
   price:{
     type:Number,
   },
   location:{
     type:String,
   },
   country:{
     type:String,
   },
   reviews:[
     {
       type:Schema.Types.ObjectId,
       ref:"Review"
     }
   ],
   owner: {
    type:Schema.Types.ObjectId,
    ref:"User"

   }
});


// model for the listing
let Listing=mongoose.model("Listing",ListingSchema);

// middleware for deleting the reviews id in the listing
/* ListingSchema.post("findOneAndDelete",async (Listing)=>{
  if(Listing){
     await Review.deleteMany({_id:Listing._id});
  }
});
*/

module.exports=Listing;