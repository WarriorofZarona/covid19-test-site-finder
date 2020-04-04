var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a adminname/email and password
passport.use(new LocalStrategy(
  // Our admin will sign in using an email, rather than a "adminname"
  {
    adminnameField: "email"
  },
  function(email, password, done) {
    // When a admin tries to sign in this code runs
    db.Admins.findOne({
      where: {
        email: email
      }
    }).then(function(dbAdmin) {
      // If there's no admin with the given email
      if (!dbAdmin) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a admin with the given email, but the password the admin gives us is incorrect
      else if (!dbAdmin.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the admin
      return done(null, dbAdmin);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the admin
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(admin, cb) {
  cb(null, admin);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Exporting our configured passport
module.exports = passport;