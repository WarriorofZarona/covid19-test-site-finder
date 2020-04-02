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
        phone: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false,
            unique: true,
            validate: {
                isValidPhoneNo: function (value) {
                    if (!value) return value;

                    var regexp = /^[0-9]+$/;
                    var values = (Array.isArray(value)) ? value : [value];

                    values.forEach(function (val) {
                        if (!regexp.test(val)) {
                            throw new Error("Number only is allowed.");
                        }
                    });
                    return value;
                }
            }
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
