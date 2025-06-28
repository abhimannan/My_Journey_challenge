let mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
  name : String, // String is shorthand for {type: String}
  place: String,
  price: Number,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
