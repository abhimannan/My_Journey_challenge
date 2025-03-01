const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.addReviews = async (req,resp)=>{
    let {id} = req.params;
    let {comment,rating} = req.body;
   let hotel_data =await Listing.findById(`${id}`);
   let reviewAdd = new Review({
     comment:comment,
     rating:rating
   });
   reviewAdd.author = req.user._id;
  //  console.log(reviewAdd);
   hotel_data.reviews.push(reviewAdd);
     await reviewAdd.save();
     await hotel_data.save();
     // creating flash message for creating new review
     req.flash("addReview","The Review Successfully Added!");
     
     resp.redirect(`/show/${id}`);
  }


module.exports.destroyReview = async (req, resp, next) => {
        const { id, reviewId } = req.params;
        //  console.log(id);
        //  console.log(reviewId);
        // Find the listing and remove the review reference
        
        const review = await Review.findByIdAndDelete(reviewId);
        if (!review) {
          return resp.status(404).json({ error: 'Review not found' });
        }
        const listing = await Listing.findByIdAndUpdate(
          id,
          { $pull: { reviews: reviewId } },
          { new: true } // Return the updated listing
        );
  
        if (!listing) {
          return resp.status(404).json({ error: 'Listing not found' });
        }
  
        // Redirect back to the listing page
        // listing.save();/ / node need of the save methods here
        // review.save();
         
        // flash for delete route
        req.flash("deleteReview","The Review is Deleted!");
        resp.redirect(`/show/${id}`);
      }
      