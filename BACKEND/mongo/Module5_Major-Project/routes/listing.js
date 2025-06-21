let express = require("express");
const router = express.Router();
let Wrapasync = require("../utils/Wrapasync.js");
let Listing = require("../models/listing.js");
let Review = require("../models/review.js");
let ExpressError = require("../utils/ExpressError.js");
let {listingSchema} = require("../schema.js");
let { isLoggedIn } = require("../middlewares.js");


// middleware for schema validation
let listingValidation = (req,resp,next)=>{
    let {error} = listingSchema.validate(req.body);
       if(error) {
        let errorMsg = error.details.map((el)=>el.message).join(",");
           throw new ExpressError(400,errorMsg);
       }
       else{
          next();
       }
}

// listing routes
// show route
router.get("/",Wrapasync(async (req,resp)=>{
    let data = await Listing.find({});
    resp.render("index.ejs",{data});
}));

// new route
router.get("/new",
    isLoggedIn,
    (req,resp)=>{                                   
    resp.render("new.ejs");
});

// add new data
router.post("/",
    isLoggedIn,
    listingValidation,
    Wrapasync(async(req,resp,next)=>{
        let Newdata = new Listing(req.body.listing);
        await Newdata.save();
        req.flash("success","New Listing is Created!");
        resp.redirect("/listings");
}));

// show individual data
router.get("/:id",Wrapasync(async (req,resp)=>{
    let {id} = req.params;
    let listing =await Listing.findById({_id : id}).populate("reviews");
    if(!listing) {
        req.flash("error","sorry! The Listing Your Requested for doesn't existed!");
        resp.redirect("/listings");
    }
    resp.render("show.ejs",{listing});
    // resp.redirect("/listings");
}));


// eidt form
router.get("/:id/edit",
     isLoggedIn,
     Wrapasync(async (req, resp) => {
     let {id} = req.params;
     let listing =await Listing.findById(id);
      if(!listing) {
        req.flash("error","sorry! The Listing Your Requested for doesn't existed!");
        resp.redirect("/listings");
      }  
      resp.render("edit.ejs",{listing});
}));

// update route
router.put("/:id",
    isLoggedIn,
    listingValidation,
    Wrapasync(async (req, resp) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing is Updated!");
    resp.redirect(`/listings`);
}));

// destroy route
router.delete("/:id",
    isLoggedIn,
    Wrapasync(async (req,resp)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing is Deleted!");
    resp.redirect("/listings");
}));

module.exports = router;
