let Listing = require("../models/listing.js");

module.exports.showCallback = async (req,resp)=>{
    let data = await Listing.find({});
    resp.render("index.ejs",{data});
};

module.exports.renderNewForm = (req,resp)=>{                                   
    resp.render("new.ejs");
}

module.exports.addNewData = async(req,resp,next)=>{
        let Newdata = new Listing(req.body.listing);
        console.log(req.user);
        Newdata.owner = req.user._id;
        await Newdata.save();
        req.flash("success","New Listing is Created!");
        resp.redirect("/listings");
}

module.exports.showIndividualData = async (req,resp)=>{
    let {id} = req.params;
    let listing =await Listing.findById(id)
        .populate({
            path  : "reviews",
            populate : {
                path : "author",
            }
        })
        .populate("owner");
    if(!listing) {
        req.flash("error","sorry! The Listing Your Requested for doesn't existed!");
        resp.redirect("/listings");
    }
    console.log(listing.owner);
    resp.render("show.ejs",{listing});
}

module.exports.editListing = async (req, resp) => {
     let {id} = req.params;
     let listing =await Listing.findById(id);
      if(!listing) {
        req.flash("error","sorry! The Listing Your Requested for doesn't existed!");
        resp.redirect("/listings");
      }  
      resp.render("edit.ejs",{listing});
}

module.exports.editListing = async (req, resp) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing is Updated!");
    resp.redirect(`/listings`);
}

module.exports.destroyListings = async (req,resp)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing is Deleted!");
    resp.redirect("/listings");
}





