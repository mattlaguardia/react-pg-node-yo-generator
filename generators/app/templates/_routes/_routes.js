const express = require('express'),
      path = require('path'),
      knex = require('../models/database'),
      router = express.Router();

router.get('/', function (req, res) {
  res.sendFile('../app/public/index.html')
})
