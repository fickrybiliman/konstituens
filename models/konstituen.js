'use strict';
module.exports = (sequelize, DataTypes) => {
  const Konstituen = sequelize.define('Konstituen', {
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    hp: DataTypes.STRING,
    alamat: DataTypes.STRING,    // ditambah manual setelah dibikin sequelize migration:generate nya
    kecamatanID: DataTypes.INTEGER,   // ditambah manual setelah dibikin sequelize migration:generate nya
    kelurahanID: DataTypes.INTEGER    // ditambah manual setelah dibikin sequelize migration:generate nya
  }, {});
  Konstituen.associate = function(models) {
    // associations can be defined here
    Konstituen.belongsTo(sequelize.models.Kecamatan),
    Konstituen.belongsTo(sequelize.models.Kelurahan)
  };
  return Konstituen;
};