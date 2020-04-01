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
        cityId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        stateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
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

        }

    });

    Site.associate = function (models) {
        Site.belongsTo(models.State, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    Site.associate = function (models) {
        Site.belongsTo(models.City, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Site;
};
