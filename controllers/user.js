const express = require('express');
const user = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

user.get('/new', (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser
  });
});

user.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    }
    console.log(createdUser);
    res.redirect('/');
  });
});

module.exports = user;
