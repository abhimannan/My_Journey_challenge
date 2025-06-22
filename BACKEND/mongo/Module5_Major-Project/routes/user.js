let express = require("express");
const router = express.Router();
const User = require("../models/user.js");
let Wrapasync =require("../utils/Wrapasync.js");
let passport = require("passport")
let { saveRedirectUrl } = require("../middlewares.js");

// signup routes
router.get("/signup",(req,resp)=>{
    resp.render("users/signup.ejs");
});

router.post("/signup",Wrapasync(async(req,resp)=>{
    try {
        let {username,email,password} = req.body;
    let newUser = new User({email,username});
    let registerUser = await User.register(newUser,password);
    // console.log(registerUser);
    req.login(registerUser,(err)=>{
        if(err) {
            return next(err);
        }
        req.flash("success","Welcome To Wanderlust!");
        resp.redirect("/listings");
    });
    }
    catch(e) {
        req.flash("error",e.message);
        resp.redirect("/signup");
    }
}));

// login routes
router.get("/login",(req,resp)=>{
    resp.render("users/login.ejs")
});

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate('local',
     {
       failureRedirect: '/login',
       failureFlash : true
     }),
    async(req,resp)=>{
        req.flash("success","Welocome Back To Wanderlust!");
        let redirectURL = resp.locals.redirectURL || "/listings";
        resp.redirect(redirectURL);
});

// logout route
router.get("/logout",(req,resp,next)=>{
    req.logOut((err)=>{
        if(err) {
            return next(err);
        }
        req.flash("success","You are logged out!");
        resp.redirect("/listings");
    });
});


module.exports = router;
