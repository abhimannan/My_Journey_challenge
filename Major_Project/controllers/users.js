const User = require("../models/user.js");

module.exports.userSignupFormRender = (req,resp)=>{
    resp.render("users/signup.ejs");
}

module.exports.saveUser = async(req,resp)=>{
    try{
        let {username,email,password}=req.body;
     let newUser = new User({email,username});
     const registeredUser = await User.register(newUser, password);
     console.log(registeredUser);
     req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome To WonderLust!");
        resp.redirect("/listings");
     });
    }
    catch(e){
        // console.log(`ERROR IS ABHI : ${e.message}`);
        req.flash("error",e.message);
        resp.redirect("/signup");
    }
}

module.exports.LoginFormRender = (req,resp)=>{
    resp.render("users/login.ejs");
}

module.exports.logIn = async(req,resp)=>{
    req.flash("success","Welcome Back To WonderLust!");
    let redirectUrl = resp.locals.redirectUrl || "/listings";
    resp.redirect(redirectUrl);
}

module.exports.logOut = (req,resp,next)=>{
    req.logout((err)=>{
       if(err) {
           return next(err);
       }
       req.flash("success","You are logged Out!");
       resp.redirect("/listings");
    })
}

