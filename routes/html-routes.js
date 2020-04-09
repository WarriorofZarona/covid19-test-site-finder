// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/New-Jersey", function (req, res) {
       res.sendFile(path.join(__dirname, "../public/nj.html"));
       
    });

    app.get("/New-York", function (req, res) {
       res.sendFile(path.join(__dirname, "../public/ny.html"));
       
    });

    app.get("/Pennsylvania", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pa.html"));
        
     });

     app.get("/nj", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/nj.html"));
        
     });
     
     app.get("/submissions", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/submissions.html"));
        
     });

};
