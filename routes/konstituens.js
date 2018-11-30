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
      models.Kelurahan.findAll().then(kelurahans => {
         res.render('konstituen/add', {kecamatan: kecamatans, kelurahan: kelurahans});
      }) 
   }).catch(err => {
      console.log(err);
      res.render('konstituen/add');
   })
});

router.post('/add', (req, res, next) => {
   const {nama, nik, hp, alamat, kecamatanID, kelurahanID, tps} = req.body;
   models.Konstituen.create({nama, nik, hp, alamat, kecamatanID, kelurahanID, tps}).then(konstituen => {
      res.redirect('/konstituens');
   }).catch(err => {
      console.log(err);
      res.redirect('/konstituens');
   })
});

router.get('/edit/:id', (req, res, next) => {
   const konstituenId = req.params.id;
   models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => {
      console.log(konstituen)
      res.render('konstituen/edit', {konstituen: konstituen});
   }).catch(err => {
      console.log(err);
      res.redirect('/konstituens');
   })
});

router.post('/edit/:id', (req, res, next) => {
   const konstituenId = req.params.id;
   const {nama, nik, hp, alamat, kecamatanID, kelurahanID, tps} = req.body;
   models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => {
      return konstituen.update({
         nama,
         nik,
         hp,
         alamat,
         kecamatanID,
         kelurahanID,
         tps
      })
   }).then(updatedKonstituen => {
      res.redirect('/konstituens');
   }).catch(err => {
      console.log(err);
      res.redirect('/konstituens');
   })
});

router.get('/delete/:id', (req, res, next) => {
   const konstituenId = req.params.id;
   models.Konstituen.findOne({where: {id: konstituenId}}).then(konstituen => {
      return konstituen.destroy();
   }).then(konstituen => {
      res.redirect('/konstituens');
   }).catch(err => {
      console.log(err);
      res.redirect('/konstituens');
   })
});

module.exports = router;