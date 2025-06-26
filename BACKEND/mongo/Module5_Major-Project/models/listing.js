let mongoose = require("mongoose");
const { Schema } = mongoose;
let Review = require("./review.js");
let User = require("./user.js");


const listingSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    url : String,
    filename : String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "Review",
    default: []
  },
  owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
  }
});


listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

let Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
