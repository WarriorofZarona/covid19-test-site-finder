const db = require("../models");

module.exports = app => {

    app.get("/api", (req, res) => {

        db.Site.findAll()
            .then(dbSite => res.json(dbSite))

    })

}