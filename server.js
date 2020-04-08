const express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const axios = require("axios");

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


require("./routes/api-signin")(app);
require("./routes/html-signin")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.get("/cities/:state", function (req, res) {
    let stateID = req.params.state;
    db.City.getByState(stateID, function (result) {
        res.json(result);
    });
});




// =============================================================
db.sequelize.sync({ force: true, logging: false }).then(() => {
    readData(db);
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});

const readData = (db) => {
    var fs = require("fs");
    const content = fs.readFileSync("./db/cityState.json");
    const jsonData = JSON.parse(content);
    db.State.create({
        name: "New Jersey"
    }).then(function () {
        db.State.create({
            name: "New York"
        }).then(function () {
            db.State.create({
                name: "Pennsylvania"
            }).then(function () {
                jsonData.forEach(cityElement => {
                    let StateID = 0;
                    switch (cityElement.state) {
                        case "New Jersey":
                            StateID = 1;
                            break;
                        case "New York":
                            StateID = 2;
                            break;
                        case "Pennsylvania":
                            StateID = 3;
                            break;
                        default:
                            StateID = -1
                    }
                    if (StateID != -1) {
                        db.City.create({
                            StateId: StateID,
                            name: cityElement.city
                        }, { logging: false })
                    }
                });
            });
        })
    })
};

