var express = require('express');
var home = express.Router();
const path = require('path');

module.exports = () => {

  home.get('/', (req, res) => {
    // res.json("Hi")
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
  });

  return home;
};
