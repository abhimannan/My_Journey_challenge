const express = require("express");
const router = express.Router();
let User = require("../models/user.js");
const WrapAsync = require("../utils/WrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usersContreoller = require("../controllers/users.js");

// route to render the form for user to add the data & store the user data
router
    .route("/signup")
    .get(usersContreoller.userSignupFormRender)
    .post(WrapAsync(usersContreoller.saveUser));
/*
// route to render the form for user to add the data    
// router.get("/signup",usersContreoller.userSignupFormRender);
// route to store the user data
// router.post("/signup",WrapAsync(usersContreoller.saveUser));
*/

router
    .route("/login")
    .get(usersContreoller.LoginFormRender)
    .post(saveRedirectUrl,
        passport.authenticate('local', { failureRedirect: '/login',failureFlash: true }),
        usersContreoller.logIn    
    );

// login routes
// router.get("/login",usersContreoller.LoginFormRender);
/*
// router.post("/login",saveRedirectUrl,
//     passport.authenticate('local', { failureRedirect: '/login',failureFlash: true }),
//     usersContreoller.logIn    
// );
*/

// logout Route
router.get("/logout",usersContreoller.logOut);

module.exports = router;

