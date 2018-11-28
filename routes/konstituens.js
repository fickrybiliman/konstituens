var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
   models.Konstituen.findAll().then(konstituens => {
      res.render('konstituen/index', {konstituens: konstituens});
   }).catch(err => {
      console.log(err);
      res.render('konstituens/index');
   })
});