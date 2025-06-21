module.exports.isLoggedIn = (req,resp,next)=>{
    if(!req.isAuthenticated()) {
        req.session.redirectURL = req.originalUrl;
        req.flash("error","You must be logged in to create listings!");
        return resp.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,resp,next)=>{
    if(req.session.redirectURL) {
        resp.locals.redirectURL = req.session.redirectURL;
    }
    next();
}