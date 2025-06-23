let express = require("express");
const router = express.Router();
let Wrapasync = require("../utils/Wrapasync.js");
let Listing = require("../models/listing.js");
let Review = require("../models/review.js");
let ExpressError = require("../utils/ExpressError.js");
let {listingSchema} = require("../schema.js");
let { isLoggedIn,isOwner,listingValidation } = require("../middlewares.js");

// requiring controllers
let ListingControllers = require("../controllers/listings.js");

// listing routes
// show route : index route
router.get("/",Wrapasync(ListingControllers.showCallback));

// new route
router.get("/new",
    isLoggedIn,
    ListingControllers.renderNewForm
    );

// add new data
router.post("/",
    isLoggedIn,
    listingValidation,
    Wrapasync(ListingControllers.addNewData));

// show individual data
router.get("/:id",Wrapasync(ListingControllers.showIndividualData));

// eidt form
router.get("/:id/edit",
     isLoggedIn,
     isOwner,
     Wrapasync(ListingControllers.editListing));

// update route
router.put("/:id",
    isLoggedIn,
    isOwner,
    listingValidation,
    Wrapasync(ListingControllers.editListing));

// destroy route
router.delete("/:id",
    isLoggedIn,
    isOwner,
    Wrapasync(ListingControllers.destroyListings));

module.exports = router;
