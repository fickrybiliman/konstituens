'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Kecamatans', [{
      kecamatan: 'PONTIANAK KOTA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kecamatan: 'PONTIANAK BARAT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kecamatan: 'PONTIANAK SELATAN',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kecamatan: 'PONTIANAK TENGGARA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kecamatan: 'PONTIANAK TIMUR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kecamatan: 'PONTIANAK UTARA',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Kecamatans', null, {});    
  }
};
