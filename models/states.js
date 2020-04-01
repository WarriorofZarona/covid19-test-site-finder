module.exports = function (sequelize, DataTypes) {
    const State = sequelize.define("State", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 2]
            }
        }
    });

    State.associate = function (models) {
        State.hasMany(models.Site, {
            onDelete: "cascade"
        });
    };

    State.associate = function (models) {
        State.hasMany(models.City, {
            onDelete: "cascade"
        });
    };

    return State;
};
