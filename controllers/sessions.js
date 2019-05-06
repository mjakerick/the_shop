const express = require('express');
const sessions = express.Router();
const User = require('../models/user.js');

// sessions.get('/new', (req, res) => {
//   res.render('sessions/new.ejs') {
//     currentUser: req.session.currentUser
//   };
// });

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {
    currentUser: req.session.currentUser
  });
});

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if(req.body.password === foundUser.password){
      req.session.currentUser = foundUser
        res.redirect('/')
    } else {
      res.send('<a href="/">wrong password</a>')
    }
  });
});

module.exports = sessions;
