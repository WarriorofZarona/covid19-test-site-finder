module.exports = function (sequelize, DataTypes) {
    const State = sequelize.define("State", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    State.associate = function (models) {
        State.hasMany(models.City, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return State;
};
