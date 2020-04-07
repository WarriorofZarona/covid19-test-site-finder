const db = require("../models");

module.exports = app => {

    app.get("/api/sites", (req, res) => {

        db.Site.findAll({
            include: [db.City]
        })
            .then(dbSite => res.json(dbSite))

    });

    app.get("/api/sites/:state", (req, res) => {

        let state;

        switch (req.params.state) {
            case "new-jersey":
                stateId = 1;
                break;
            case "new-york":
                stateId = 2;
                break;
            case "pennsylvania":
                stateId = 3;
                break;
            default:
                throw err;
        };

        db.Site.findAll({
            include: [db.City],
            where: {
                stateId: stateId
            }
        })
            .then(dbSite => res.json(dbSite))

    }),

        app.post("/api/sites", (req, res) => {

            const name = req.body.name
            const address = req.body.address
            const phone = req.body.phone
            const walkIn = req.body.walkIn
            const driveThru = req.body.driveThru
            const isHospital = req.body.isHospital
            const hoursOfOp = req.body.hoursOfOp
            const qualifications = req.body.qualifications
            const cityId = req.body.cityId

            //drop down for city and state
            // create city first
            //dropdown for city, other



        });

}