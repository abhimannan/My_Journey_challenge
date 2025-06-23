let express = require("express");
const router = express.Router();
const User = require("../models/user.js");
let Wrapasync =require("../utils/Wrapasync.js");
let passport = require("passport")
let { saveRedirectUrl } = require("../middlewares.js");

// requiring users controllers
let UsersControllers = require("../controllers/users.js");

// signup routes
router.get("/signup",UsersControllers.renderUserSignup);

// add new user
router.post("/signup",Wrapasync(UsersControllers.addNewUser));

// login routes
router.get("/login",UsersControllers.renderLogin);

// login authentication
router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate('local',
     {
       failureRedirect: '/login',
       failureFlash : true
     }),
    UsersControllers.loginAuthentication);

// logout route
router.get("/logout",UsersControllers.logOut);


module.exports = router;
