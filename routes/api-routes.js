const db = require("../models");

module.exports = app => {

    app.get("/api/sites", (req, res) => {

        db.Site.findAll({
            include: [db.City]
        })
            .then(dbSite => res.json(dbSite))

    });

    app.get("/api/states/:state", (req, res) => {

        let state;

        switch (req.params.state) {
            case "new-york":
                state = NY;
                break;
            case "new-jersey":
                state = NJ;
                break;
            case "pennsylvania":
                state = PA;
                break;
            default:
                throw err;
        };

        db.Site.findAll({
            include: [db.City],
            where: {
                [db.State.name]: state
            }
        })
            .then(dbSite => res.json(dbSite))



    })

}