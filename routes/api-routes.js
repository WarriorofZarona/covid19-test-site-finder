const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {

    app.get("/api/sites", (req, res) => {

        db.Site.findAll({
            include: [db.City]
        })
            .then(dbSite => res.json(dbSite))

    });

    app.get("/cities/:state", function (req, res) {
        let stateID = 0;
        switch (req.params.state) {
            case "new-jersey":
                stateID = 1;
                break;
            case "new-york":
                stateID = 2;
                break;
            case "pennsylvania":
                stateID = 3;
                break;
            default:
                throw err;
        };
        if (stateID != -1) {
            db.City.getByState(stateID, function (result) {
                res.json(result);
            })
        };
    });

    // app.get("/sites/:state", function (req, res) {
    //     let stateID = 0;
    //     switch (req.params.state) {
    //         case "new-jersey":
    //             stateID = 1;
    //             break;
    //         case "new-york":
    //             stateID = 2;
    //             break;
    //         case "pennsylvania":
    //             stateID = 3;
    //             break;
    //         default:
    //             throw err;
    //     };
    //     if (stateID != -1) {
    //         db.Site.getByState(stateID, function (result) {
    //             res.json(result);
    //         })
    //     };
    // });

    // app.get("/api/sites/:state", (req, res) => {

    //     let state;

    //     switch (req.params.state) {
    //         case "new-jersey":
    //             stateId = 1;
    //             break;
    //         case "new-york":
    //             stateId = 2;
    //             break;
    //         case "pennsylvania":
    //             stateId = 3;
    //             break;
    //         default:
    //             throw err;
    //     };

    //     db.Site.findAll({
    //         include: [db.City],
    //         where: {
    //             stateId: stateId
    //         }
    //     })
    //         .then(dbSite => res.json(dbSite))

    // }),

    app.post("/api/sites", (req, res) => {

        const name = req.body.name
        const address = req.body.address
        const phone = req.body.phone
        const walkIn = req.body.walkIn
        const driveThru = req.body.driveThru
        const isHospital = req.body.isHospital
        const hoursOfOp = req.body.hoursOfOp
        const qualifications = req.body.qualifications
        let cityId;
        let stateId;

        db.City.findAll({
            attributes: [id]
        })



        //drop down for city and state
        // create city first
        //dropdown for city, other



    });

}