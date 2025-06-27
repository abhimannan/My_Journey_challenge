let Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
let mapToken = process.env.API_MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.showCallback = async (req,resp)=>{
    let data = await Listing.find({});
    resp.render("index.ejs",{data});
};

module.exports.renderNewForm = (req,resp)=>{                                   
    resp.render("new.ejs");
}

module.exports.addNewData = async (req, resp, next) => {
  try {
    if (!req.body.listing || !req.body.listing.location) {
      req.flash("error", "Location is required!");
      return resp.redirect("/listings/new");
    }

    const response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    const geoData = response.body.features[0];
    if (!geoData) {
      req.flash("error", "Invalid location entered!");
      return resp.redirect("/listings/new");
    }

    if (!req.file) {
      req.flash("error", "Image upload failed!");
      return resp.redirect("/listings/new");
    }

    const url = req.file.path;
    const filename = req.file.filename;

    const newData = new Listing(req.body.listing);
    newData.owner = req.user._id;
    newData.image = { url, filename };
    newData.geometry = geoData.geometry;

    const savedListing = await newData.save();
    console.log(savedListing);

    req.flash("success", "New Listing is Created!");
    resp.redirect("/listings");
  } catch (err) {
    next(err); // important for error handling middleware
  }
};


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
    // console.log(listing.owner);
    resp.render("show.ejs",{listing});
}

module.exports.rendereditListingform = async (req, resp) => {
     let {id} = req.params;
     let listing =await Listing.findById(id);
      if(!listing) {
        req.flash("error","sorry! The Listing Your Requested for doesn't existed!");
        resp.redirect("/listings");
      }  
    let OriginalImageURL = listing.image.url;
    // The below arguments are given by cloudinary cloud : go and search like "cloudinary image transformation" like this seach in the browser
    OriginalImageURL = OriginalImageURL.replace("/upload","/upload/w_250"); 

      resp.render("edit.ejs",{listing , OriginalImageURL});
}

module.exports.editListing = async (req, resp) => {
        let {id} = req.params;
        let editData = await Listing.findByIdAndUpdate(id,{...req.body.listing});
        if(typeof req.file !== "undefined") {
             let url = req.file.path;
             let filename = req.file.filename;
             editData.image = {url , filename};
             await editData.save();
        }
        req.flash("success","Listing is Updated!");
        resp.redirect(`/listings`);
}

module.exports.destroyListings = async (req,resp)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing is Deleted!");
    resp.redirect("/listings");
}





