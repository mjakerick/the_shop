const express = require('express');
const user = express.Router();
const User = require('../models/user.js');

user.get('/new', (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser
  });
});

user.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    }
    console.log(createdUser);
    res.redirect('/');
  });
});

module.exports = user;
