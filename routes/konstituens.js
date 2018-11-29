var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
   models.Konstituen.findAll({include: [{model: models.Kecamatan}]}).then(konstituens => {
      res.render('konstituen/index', {konstituen: konstituens});
   }).catch(err => {
      console.log(err);
      res.render('konstituen/index');
   })
});

module.exports = router;