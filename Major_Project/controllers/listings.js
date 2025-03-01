const Listing = require("../models/listing.js");


module.exports.index = async (req,resp,next)=>{
    let res= await Listing.find({});
    resp.render("listings.ejs",{res});
}

module.exports.renderNewForm = (req,resp)=>{
    resp.render("new.ejs");
 }

 module.exports.newListing = async (req, resp, next) => {
   let listing = req.body;
   console.log(listing);
   // let newListing = new Listing(req.body);
   //  console.log(newListing);
   // await newListing.save();
   // resp.redirect("/listing");
 }

 module.exports.showListings = async (req,resp)=>{
    let {id}=req.params;
    let res= await Listing.findOne({_id:id}).populate({
       path:"reviews",
       populate:{
         path:"author"
       }
    }).populate("owner");
    if(!res){
      req.flash("error","Listing You Requested For Doesn't Existed!");
      resp.redirect("/listings");
    }
    console.log(res);
    resp.render("show.ejs",{res});
 }



  module.exports.editListing = async (req,resp)=>{
     let {id}=req.params;
     let edit_list=await Listing.find({_id:id});
     resp.render("edit.ejs",{edit_list});
  }

  module.exports.updateListing = async (req,resp)=>{
    let {id}=req.params;
    // let listing = req.body.listing
    let {title,description,url,price,location,country}=req.body;
     let edited_data=await Listing.findOneAndUpdate({_id:id},{
       title:title,
       description:description,
       price:price,
       location:location,
       country:country,
       image:{
          url:url
       }
     });
     let res = edited_data.save();
     req.flash('editmsg','The Hotel Details Has Been Successfully Edited!');
     console.log(res);
     resp.redirect(`/listings/${id}`);
 }

 module.exports.destroyListing = async (req,resp)=>{
    let {id}=req.params;
    await Listing.findOneAndDelete({_id:id});
    req.flash("deletemsg","The Listing Has Deleted Successfully!");
    resp.redirect("/listings");
}