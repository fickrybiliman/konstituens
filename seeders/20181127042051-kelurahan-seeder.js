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
    return queryInterface.bulkInsert('Kelurahans', [{
      kelurahan: 'DARAT SEKIP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'MARIANA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SUNGAI BANGKONG',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SUNGAI JAWI',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'TENGAH',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'PAL LIMA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SUNGAI BELIUNG',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SUNGAI JAWI DALAM',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SUNGAI JAWI LUAR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'AKCAYA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BENUA MELAYU DARAT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BENUA MELAYU LAUT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'KOTA BARU',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'PARIT TOKAYA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BANGKA BELITUNG DARAT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BANGKA BELITUNG LAUT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BANSIR DARAT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BANSIR LAUT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BANJAR SERASAN',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'DALAM BUGIS',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'PARIT MAYOR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SAIGON',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'TAMBELAN SAMPIT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'TANJUNG HILIR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'TANJUNG HULU',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'BATU LAYANG',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SIANTAN HILIR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SIANTAN HULU',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kelurahan: 'SIANTAN TENGAH',
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
    return queryInterface.bulkDelete('Kelurahans', null, {});   
  }
};
