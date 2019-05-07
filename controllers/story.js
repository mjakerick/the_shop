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
    Story.create(req.body, (err, createdStory) => {
      foundShop.stories.push(createdStory);
      foundShop.save((err,data) => {
        res.redirect('/')
      });
    });
  });
});

story.delete('/:id/', (req, res) => {
  Story.findByIdAndRemove(req.params.id, (err, foundStory) => {
    Shop.findOne({ 'stories._id' : req.params.id }, (err, foundShop) => {
      foundShop.stories.id(req.params.id).remove();
      foundShop.save((err, data) => {
        res.redirect('/')
      });
    });
  });
});

module.exports = story;
