const express = require("express");
const router = express.Router();
let WrapAsync = require("../utils/WrapAsync.js");
let SchemaValidation = require("../schema.js");
let ExpressError = require("../utils/ExpressError.js");
let Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateSchema} = require("../middleware.js");

const ListingController = require("../controllers/listings.js");

// Listing route
router.get("/listings",WrapAsync(ListingController.index));
// Show Route
router.get("/show/:id",WrapAsync(ListingController.showListings));

// New Route 
router.get("/new",isLoggedIn,ListingController.renderNewForm);

// Add The details into database
// New Listing
router.post(
  "/listing/new",
  // isLoggedIn,
  // (req, res, next) => {
  //   if (!req.body.listing) {
  //     return res.status(400).send("Bad Request: Missing listing data");
  //   }
  //   next();
  // },
  // validateSchema,
  WrapAsync(ListingController.newListing)
);

// Edit Route
router.get("/edit/:id",
  isLoggedIn,
  isOwner,
  WrapAsync(ListingController.editListing));
// Update Route
router.patch("/edit/:id/handle",
  isLoggedIn,
  isOwner,
  validateSchema,
  WrapAsync(ListingController.updateListing));

// Delete Operation
router.delete("/delete/:id",
  isLoggedIn,
  isOwner,
  WrapAsync(ListingController.destroyListing));

module.exports = router;
