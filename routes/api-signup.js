// Requiring our models and passport as we've configured it
var db = require("../models/admins");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the admin has valid login credentials, send them to the members page.
  // Otherwise the admin will be sent an error
 
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.admin);
  });

  // Route for signing up a admin. The admin's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize Admin Model. If the admin is created successfully, proceed to log the admin in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.Admin.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging admin out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our admin to be used client side
  app.get("/api/admin_data", function (req, res) {
    console.log(req);
    if (!req.admin) {
      // The admin is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the admin's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.admin.email,
        id: req.admin.id
      });
    }
  });
};
