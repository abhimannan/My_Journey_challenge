let express = require("express");
const router = express.Router({mergeParams : true});
let Wrapasync = require("../utils/Wrapasync.js");
let Listing = require("../models/listing.js");
let Review = require("../models/review.js");
let {reviewSchema} = require("../schema.js");


// review validation
const reviewValidation = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMsg = error.details.map(el => el.message).join(", ");
    return next(new ExpressError(400, errorMsg));
  }
  next();
};

// all the reviews route
// add review route
router.post("/",
    reviewValidation,
    Wrapasync(async(req,resp)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    resp.redirect(`/listings/${id}`);
}));

// delete review
router.delete("/:reviewsId",Wrapasync(async(req,resp)=>{
    let {id,reviewsId} = req.params;
    // console.log(id);
    // console.log(reviewsId);
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewsId}});
    await Review.findByIdAndDelete(reviewsId);

    resp.redirect(`/listings/${id}`);
}));

module.exports = router;
