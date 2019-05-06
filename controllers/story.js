const express = require('express');
const story = express.Router();
const Story = require('../models/story.js');
const Shop = require('../models/shop.js');

story.get('/new', (req, res) => {
  // res.send('ready for your story')
  Shop.find({}, (err, foundShops) => {
    res.render('story/new.ejs', {
      currentUser: req.session.currentUser,
      shops: foundShops
    });
  });
});

// story.post('/', (req, res) => {
//   // Shop.findById
//   Story.create(req.body, (err, createdStory) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(createdStory);
//     res.redirect('/')
//   })
// })

module.exports = story;