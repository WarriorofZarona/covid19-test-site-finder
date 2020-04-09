const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {

    app.get("/api/sites/approved", (req, res) => {

        db.Site.findAll({
            include: [db.City, {
                model: db.City,
                include: db.State,
            }],
            where: {
                approved: 0
            }
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

    app.get("/api/sites/pending", (req, res) => {

        db.Site.findAll({
            include: [db.City, {
                model: db.City,
                include: db.State,

            }],
            where: {
                approved: 0
            }
        })
            .then(dbSite => res.json(dbSite))

    });

    app.post("/api/sites/", (req, res) => {

        const name = req.body.name
        const address = req.body.address
        const phone = req.body.phone
        const walkIn = req.body.walkIn
        const driveThru = req.body.driveThru
        const isHospital = req.body.isHospital
        const hoursOfOp = req.body.hoursOfOp
        const qualifications = req.body.qualifications
        const city = req.body.city
        const state = req.body.state
        let cityId;

        console.log(req.body);

        db.City.findAll({
            attributes: ["id"],
            where: {
                name: city
            }
        }).then(data => {

            cityId = data[0].id

        })
            .then(() => {
                db.Site.create({
                    name: name,
                    address: address,
                    phone: phone,
                    walkIn: walkIn,
                    driveThru: driveThru,
                    isHospital: isHospital,
                    hoursOfOp: hoursOfOp,
                    qualifications: qualifications,
                    CityId: cityId,
                }).then(data => res.json(data))




                //drop down for city and state
                // create city first
                //dropdown for city, other



            });

    })
}