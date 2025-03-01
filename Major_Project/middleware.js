const Listing = require("./models/listing.js");
let Review = require("./models/review.js");
let ExpressError = require("./utils/ExpressError.js");
let SchemaValidation = require("./schema.js");

module.exports.isLoggedIn = (req,resp,next)=>{
  console.log(req.user);
    if(!req.isAuthenticated()){ 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You Must Be Logged In To Create New Listings!");
        return resp.redirect("/login");
      }
      next();
}

module.exports.saveRedirectUrl=(req,resp,next)=>{
  if(req.session.redirectUrl) {
    resp.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner =async (req,resp,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(resp.locals.currUser._id)){
      req.flash("error","You are not the owner of the listing!");
    return resp.redirect(`/listings`);
    }
    next();
}

// MIddleware for listings schema vaidation
module.exports.validateSchema = async (req, res, next) => {
  if (!req.body || !req.body.listing) {
      return res.status(400).send("Bad Request: Missing listing data"); // Prevent crashing
  }

  const { error } = SchemaValidation.validate(req.body);

  if (error) {
      const errorMessage = error.details.map((el) => el.message).join(", ");
      throw new ExpressError(400, errorMessage);
  } else {
      next();
  }
};

  module.exports.isReviewAuthor =async (req,resp,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(resp.locals.currUser._id)){
      req.flash("error","You are not the author of this review!");
    return resp.redirect(`/listings`);
    }
    next();
}
  