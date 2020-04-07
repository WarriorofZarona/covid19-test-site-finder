const express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const axios = require("axios");
const populate = require("./db/populateCity")

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// We need to use sessions to keep track of our admin's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/api-signup")(app);
require("./routes/html-signup")(app);

populate();


// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})

