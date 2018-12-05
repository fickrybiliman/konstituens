'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      await queryInterface.addColumn('Konstituens', 'kecamatanID', {
        type: Sequelize.INTEGER
      }),
      await queryInterface.addColumn('Konstituens', 'kelurahanID', {
        type: Sequelize.INTEGER
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      await queryInterface.removeColumn('Konstituens', 'kecamatanID'),
      await queryInterface.removeColumn('Konstituens', 'kelurahanID')
    ]; 
  }
};
