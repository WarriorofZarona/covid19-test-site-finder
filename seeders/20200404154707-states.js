'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('States', [{
      name: "NJ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "NY",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "PA",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("States", null, {});
  }
};
