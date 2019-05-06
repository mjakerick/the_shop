const express = require('express');
const user = express.Router();
const User = require('../models/user.js');

user.get('/new',  (req, res) => {
  res.render('users/new.ejs');
});

module.exports = user;
