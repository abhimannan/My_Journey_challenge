// getting-started.js
const mongoose = require('mongoose');

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
   }
});

let Listing=mongoose.model("Listing",ListingSchema);

module.exports=Listing;