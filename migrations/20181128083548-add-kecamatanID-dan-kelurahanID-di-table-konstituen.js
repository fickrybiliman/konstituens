'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn('Konstituens', 'kecamatanID', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('Konstituens', 'kelurahanID', {
        type: Sequelize.INTEGER
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('Konstituens', 'kecamatanID'),
      queryInterface.removeColumn('Konstituens', 'kelurahanID')
    ]); 
  }
};
