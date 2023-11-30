const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
    .get(userController.renderSignupForm) // SignUp - GET Route
    .post(wrapAsync(userController.signup)); // SignUp - POST Route


router.route("/login")
    .get(userController.renderLoginForm) // Login GET Route
    .post(                                         // Login - POST Route
        saveRedirectUrl, 
        passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
        userController.login
    );


// LogOut - GET Route
router.get("/logout", userController.logout);

module.exports = router;