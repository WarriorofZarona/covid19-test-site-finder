module.exports = function (sequelize, DataTypes) {
    var Site = sequelize.define("Site", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            len: [1, 10]
        },
        walkIn: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        driveThru: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        isHospital: {

            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        hoursOfOp: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        qualifications: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]

        },
        approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    },
        {
            paranoid: true
        }
    );

    Site.associate = function (models) {
        Site.belongsTo(models.City, {
            foreignKey: {
                allowNull: false
            }
        });

        Site.getByState = (stateID, callback) => {
            let StateID = parseInt(stateID);
            console.log("StateID=" + StateID);
            Site.findAll({
                include: [models.City],
                where: {
                    StateId: StateID
                }
            }).then(function (results) {
                callback(results);
            });
        }
    };


    return Site;
};
