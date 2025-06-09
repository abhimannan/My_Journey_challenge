let express = require("express");
let app = express();
let port = 8080;
const mongoose = require('mongoose');
let Listing = require("./models/listing.js"); 
let Review = require("./models/review.js");
let path = require("path");
let methodOverride = require('method-override');
let ejsmate = require('ejs-mate');
let ExpressError = require("./utils/ExpressError.js");
let Wrapasync = require("./utils/Wrapasync.js");
let session = require('express-session')
let flash = require('connect-flash');


let listing = require("./routes/listing.js");
let review = require("./routes/review.js");


main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wonderlust');
}

// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname,"/public")));
let sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie : {
    expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly : true
  }
};

app.get("/home",(req,resp)=>{
    resp.send("Home Route");
});

app.use(session(sessionOptions));
app.use(flash());

// middleware for flash messages
app.use((req,resp,next)=>{
    resp.locals.successMeg = req.flash("success");
    resp.locals.errorMeg = req.flash("error");
    next();
});

/*
app.get("/testListing",async (req,resp)=>{
    let list1 = new Listing({
        title : "Abhi",
        description : "Good!",
        image : "xcfb",
        price : 4500,
        location : "chennai",
        country : "India"
    });
    await list1.save();
    resp.send("data is inseted");
});
*/


// use all the listing routes
app.use("/listings",listing);
app.use("/listings/:id/reviews",review);



// if the route is not matched
app.all("*",(req,resp,next)=>{
    next(new ExpressError(404,"Page not found"));
});

// logger
// app.use((req, res, next) => {
//   console.log("REQUEST PATH ", req.path);
//   next();
// });

// error handling middlewares
app.use((err,req,resp,next)=>{
    let {status=500,message="something went wrong"} = err;
    resp.render("error.ejs",{err});
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port ${port}`);
});                    