const express = require('express');
const story = express.Router();
const Story = require('../models/story.js');

story.get('/new', (req, res) => {
  // res.send('ready for your story')
  res.render('story/new.ejs', {
    currentUser: req.session.currentUser
  });
});

story.post('/', (req, res) => {
  Story.create(req.body, (err, createdStory) => {
    if (err) {
      console.log(err);
    }
    console.log(createdStory);
    res.redirect('/shops/:id')
  })
})

module.exports = story;
