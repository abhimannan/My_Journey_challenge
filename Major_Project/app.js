let express=require("express");
let app=express();
let port=8080;
let path=require("path");
let Listing=require("./models/listing.js");
var methodOverride = require('method-override');
let ejsMate = require('ejs-mate');
let WrapAsync = require("./utils/WrapAsync.js");
let ExpressError = require("./utils/ExpressError.js");
let SchemaValidation = require("./schema.js");
let ReviewValidation =require("./schema.js");

app.get("/",(req,resp)=>{
  resp.send("I Am Root");
});
// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);

// getting-started.js
const mongoose = require('mongoose');
const Review = require("./models/review.js");
main()
.then((res)=>{
  console.log("DB Connected!")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');
}

/* app.get("/listing",async (req,resp)=>{
  let list=new Listing({
   title:"My New Home",
   description:"Have a Good Experience",
   price:1500,
   location:"ABR City,Chennai",
   country:"India" 
  });
  await list.save();
  resp.send("Data Inserted");
}); */
// Listing route
app.get("/listings",WrapAsync(async (req,resp,next)=>{
    let res= await Listing.find({});
    resp.render("listings.ejs",{res});
}));
// Show Route
app.get("/show/:id",WrapAsync(async (req,resp)=>{
   let {id}=req.params;
   let res= await Listing.findOne({_id:id});
   resp.render("show.ejs",{res});
}));


// MIddleware for schema vaidation
const validateSchema = (req, res, next) => {
  const { error } = SchemaValidation.validate(req.body); // Destructure the error directly
  if (error) {
    // Map error details to provide clear messages
    const errorMessage = error.details.map((el) => el.message).join(', ');
    // Throw an ExpressError with the mapped error message
    throw new ExpressError(400, errorMessage);
  } else {
    next(); // Proceed to the next middleware if validation passes
  }
};

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


// New Route
app.get("/new",(req,resp)=>{
   resp.render("new.ejs");
});
// Add The details into database
app.post(
  '/listing/new',validateSchema,
  WrapAsync(async (req, resp, next) => {
    const { title, description, price, location, country, url } = req.body;
    // Insert new listing into the database
    await Listing.create({
      title,
      description,
      price,
      location,
      country,
      image: {
        filename: 'default', // Default filename if not provided
        url: url || 'https://via.placeholder.com/150', // Fallback to a placeholder URL if `url` is not provided
      },
    });
    // Redirect to the listings page
    resp.redirect('/listings');
  })
);
// Edit Route
app.get("/edit/:id",WrapAsync(async (req,resp)=>{
   let {id}=req.params;
   let edit_list=await Listing.find({_id:id});
   resp.render("edit.ejs",{edit_list});
}));
// Update Route
app.patch("/edit/:id/handle",validateSchema,
  WrapAsync(async (req,resp)=>{
   let {id}=req.params;
   // let listing= req.body.listing
   let {title,description,url,price,location,country}=req.body;
    await Listing.findOneAndUpdate({_id:id},{
      title:title,
      description:description,
      price:price,
      location:location,
      country:country,
      image:{
         url:url
      }
    });
    resp.redirect("/listings")
}));
// Delete Operation
app.delete("/delete/:id",WrapAsync(async (req,resp)=>{
    let {id}=req.params;
    await Listing.findOneAndDelete({_id:id});
    resp.redirect("/listings");
}));
// Reviews
app.post("/listings/:id/review",
  validateReview,
  WrapAsync(async (req,resp)=>{
  let {id} = req.params;
  let {comment,rating} = req.body;
  // console.log(comment);
  // console.log(rating);
 let hotel_data =await Listing.findById(`${id}`);
 let reviewAdd = new Review({
   comment:comment,
   rating:rating
 });
 hotel_data.reviews.push(reviewAdd);
 let res = await reviewAdd.save();
 let res2 = await hotel_data.save();
//  console.log(res);
//  console.log(res2);
  //  resp.send("working fine!");
   resp.redirect(`/show/${id}`);
}));





// Path Not Found
app.all("*",(req,resp,next)=>{
   next(new ExpressError(404,"Page Not Found!"));
});

// Default Error Handling
app.use((err,req,resp,next)=>{
   let {status=500,message="Error"}=err;
  //  resp.status(status).send(message);
  resp.status(status).render("error.ejs",{message})
});

app.listen(port,(req,resp)=>{
  console.log(`The server is Running in ${port}`);
});