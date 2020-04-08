module.exports = function (sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    City.associate = function (models) {
        City.belongsTo(models.State, {
            foreignKey: {
                allowNull: false
            }
        });

        City.getByState = (stateID, callback) => {
            let StateID = parseInt(stateID);
            console.log("StateID=" + StateID);
            City.findAll({
                include: [models.State],
                where: {
                    StateId: StateID
                }
            }).then(function (results) {
                callback(results);
            });
        }

        City.hasMany(models.Site);
    }

    return City;
};
