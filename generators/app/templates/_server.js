const express = require('express'),
      path = require('path'),
      server = express(),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      knex = require('./models/database');



// server configs
server.use(express.static('./app/public'));
server.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();


// Routes
server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './app/public/index.html'))
})

// Headers config
const allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', true)
}
server.use(allowCrossDomain);

// server port listening
server.listen(process.env.PORT || 3000, function () {
  console.log("App running in port 3000");
});
