let express = require("express");
let app = express();
let port = 4141;
let path = require("path");
let Listing = require("./models/listing.js");
let Review = require("./models/review.js");
var methodOverride = require('method-override');
let ExpressError = require("./utils/ExpressError.js");
let Wrapasync = require("./utils/Wrapasync.js");
var cookieParser = require('cookie-parser')
var session = require('express-session')
var flash = require('connect-flash');

// getting-started.js
const mongoose = require('mongoose');

main().then(()=>{
    console.log("DB is connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PracticeDB');
}

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

/*
app.use(methodOverride('_method'));
app.use(cookieParser("secrete"));


app.get("/cookies",(req,resp)=>{
    resp.cookie("name","abhi");
    resp.send("cookies was sent!");
});

// get cookies
app.get("/getCookies",(req,resp)=>{
    console.dir(req.cookies);
    resp.send("The cookies is accessed");
});
// send sigined cookies
app.get("/getSignedCookies",(req,resp)=>{
    resp.cookie("signed","cookies",{signed : true});
    resp.send("the signed cookies are sent!");
});
// get the signed cookies
app.get("/signedCookies",(req,resp)=>{
    console.log(req.signedCookies);
    resp.send("signedCookies got!");
});
// use the cookies data
app.get("/greet",(req,resp)=>{
    let {name = "no name"} = req.cookies;
    resp.send(`hello ${name}`);
});


app.get("/home",(req,resp)=>{
    resp.send("Home route");
});

app.get("/listings",async(req,resp)=>{
    let data = await Listing.find({});
    resp.render("listing.ejs",{data});
});

app.get("/listings/:id",async(req,resp)=>{
    let {id} = req.params;
    let data = await Listing.findById(id);
    resp.render("show.ejs",{data});
});

app.delete("/listings/:id",async(req,resp)=>{
    let {id} = req.params;
    let res = await Listing.findByIdAndDelete(id);
    console.log(res);
    resp.redirect("/listings");
});

// add reviews
app.get("/reviews",(req,resp)=>{
    resp.send("reviews shown");
});

// app.all("*",(req,resp)=>{
//     throw new ExpressError(401,"Page is Not Found!");
// });

// default error handler
app.use((err,req,resp,next)=>{
    let {status=400,message="Something went wrong"} = err;
    resp.staus(status).send(message);
});
*/
let sessionOptions = { 
    secret: 'keyboardcat',
    resave: false,
  saveUninitialized: true

}
// express sessions
app.use(session(sessionOptions));
// connect-flash
app.use(flash());

/*
app.get("/session",(req,resp)=>{
    if(req.session.count) {
        req.session.count++;
    }
    else {
        req.session.count = 1;
    }
    resp.send(`Requested ${req.session.count} times`);
});
*/

// middleware for store the flash messages
app.use((req,resp,next)=>{
    resp.locals.successMsg = req.flash("success");
    resp.locals.errorMsg = req.flash("error");
    next();
});

// storing and use the session data
app.get("/register",(req,resp)=>{
    let {name = "Ananamous"} = req.query;
    req.session.name = name;
    // resp.send(`${req.session.name}`);
    if(name==="Ananamous") {
        req.flash("error","User is not registered!");
    }
    else {
        req.flash("success","Successfully registered!");
    }
    resp.redirect("/anotherroute");
});

app.get("/hello",(req,resp)=>{
    resp.send(req.session.name);
});

app.get("/anotherroute",(req,resp)=>{
    // resp.locals.successMsg = req.flash("success");
    // resp.locals.errorMsg = req.flash("error");
    resp.render("flash.ejs",{name : req.session.name});
});

app.listen(port,()=>{
    console.log(`The server is running at ${port} port`);
});
