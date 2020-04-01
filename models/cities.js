module.exports = function (sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        stateId: {
            type: DataTypes.INTEGER,
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
    };

    return City;
};
