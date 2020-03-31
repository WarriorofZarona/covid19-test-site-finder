module.exports = function (sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        }
    });

    City.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        City.belongsTo(models.State, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return City;
};
