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

story.post('/', (req, res) => {
  Shop.findById(req.body.shopId, (err, foundShop) => {
    req.body.username = req.session.currentUser.username;
    console.log(req.session);
    Story.create(req.body, (err, createdStory) => {
      console.log(err);
      console.log(createdStory);
      foundShop.stories.push(createdStory);
      foundShop.save((err,data) => {
        res.redirect('/')
      });
      // if (err) {
      //   console.log(err);
      // }
      // console.log(createdStory);
      // res.redirect('/')
    });
  });
});

module.exports = story;
