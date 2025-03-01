const express = require("express");
const router = express.Router();
let ReviewValidation =require("../reviewValidation.js");
let WrapAsync = require("../utils/WrapAsync.js");
let ExpressError = require("../utils/ExpressError.js");
let Review = require("../models/review.js");
let Listing=require("../models/listing.js");
const { isLoggedIn,isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// MIddleware for review vaidation
const validateReview = (req, res, next) => {
    const { error } = ReviewValidation.validate(req.body); // Destructure the error directly
    if (error) {
      // Map error details to provide clear messages
      const errorMessage = error.details.map((el) => el.message).join(', ');
      // Throw an ExpressError with the mapped error message
      throw new ExpressError(400, errorMessage);
    } else {
        next(); // Proceed to the next middleware if validation passes
    }
  };

  // Reviews
// post review route
router.post("/listings/:id/addReviews",
    isLoggedIn,
    validateReview,
    WrapAsync(reviewController.addReviews));
  
    // delete review route
    router.delete(
      "/listing/:id/reviews/:reviewId",
      isLoggedIn,
      isReviewAuthor,
      validateReview,
      WrapAsync(reviewController.destroyReview)
    );

module.exports = router;