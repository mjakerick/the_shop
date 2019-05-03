const express = require('express');
const router = express.Router();
const Shop = require('../models/shop.js');

router.get('/', (req, res) => {
  Shop.find({}, (error, allShops) => {
    res.render('index.ejs', {
      shops: allShops
    });
  });
});

module.exports = router;
