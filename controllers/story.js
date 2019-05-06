const express = require('express');
const story = express.Router();
const Story = require('../models/story.js');

story.get('/new', (req, res) => {
  res.send('ready for your story')
  // res.render('story/new.ejs', {
  //   currentUser: req.session.currentUser
  // });
});

module.exports = story;
