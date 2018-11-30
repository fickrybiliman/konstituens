var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
   models.Konstituen.findAll({include: [{model: models.Kecamatan}, {model: models.Kelurahan}]}).then(konstituens => {
      // console.log(konstituens)
      res.render('konstituen/index', {konstituen: konstituens});
   }).catch(err => {
      console.log(err);
      res.render('konstituen/index');
   })
});

router.get('/add', (req, res, next) => {
   models.Kecamatan.findAll().then(kecamatans => {
      // console.log(kecamatans)
      res.render('konstituen/add', {kecamatan: kecamatans});
   }).catch(err => {
      console.log(err);
      res.render('konstituen/add');
   })
});

router.post('/add', (req, res, next) => {
   const {nama, nik, hp, alamat, kecamatanID, kelurahanID} = req.body;
   models.Konstituen.create({nama, nik, hp, alamat, kecamatanID, kelurahanID}).then(konstituen => {
      res.redirect('/konstituens');
   }).catch(err => {
      console.log(err);
      res.redirect('/konstituens');
   })
});


module.exports = router;