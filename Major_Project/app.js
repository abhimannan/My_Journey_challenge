let express=require("express");
let app=express();
let port=8070;
let path=require("path");
var methodOverride = require('method-override');
let ejsMate = require('ejs-mate');
let ExpressError = require("./utils/ExpressError.js");
let session = require('express-session')
let flash = require('connect-flash');
let passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// required from routes folder
const listingRouter = require("./routes/listings.js");
const reviewsRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");


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
main()
.then((res)=>{
  console.log("DB Connected!")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');
}

// session creation
let sessionOptions={
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now() + 7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true
  }
};

// Root Route
app.get("/",(req,resp)=>{
  resp.send("I Am Root");
});

app.use(session(sessionOptions));
app.use(flash());// flash usage

// npm - passpost package for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// local variables middleware
app.use((req,resp,next)=>{
  // local variables for listings CRUD Operations
  resp.locals.success=req.flash("success");
  resp.locals.deletemsg=req.flash("deletemsg");
  resp.locals.editmsg=req.flash("editmsg");
  resp.locals.error = req.flash("error");
  // local variables for review related operations
  resp.locals.addReview=req.flash("addReview");
  resp.locals.deleteReview=req.flash("deleteReview");
  
  // to access to the req.user in nav.ejs
  resp.locals.currUser = req.user;
  next();
});

// app.get("/demoUser",async (req,resp)=>{
//    let fakerUser=new User({
//       email:"abhi543it@gmail.com",
//       username:"Abhi"
//    });
//    let registeredUser = await User.register(fakerUser,"hello1234");
//    resp.send(registeredUser);
// });

// listings route
// below line contains all the listings route
app.use("/",listingRouter);
app.use("/",reviewsRouter);
app.use("/",userRouter);


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