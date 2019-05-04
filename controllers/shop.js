const express = require('express');
const router = express.Router();
const Shop = require('../models/shop.js');
const shopSeed = require('../models/seed.js');

router.get('/', (req, res) => {
  Shop.find({}, (error, allShops) => {
    res.render('index.ejs', {
      shops: allShops
    });
  });
});

router.get('/shops/:id', (req, res) => {
  Shop.findById(req.params.id, (err, foundShop) => {
    res.render('show.ejs', {
      shop:foundShop
    });
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
})

router.post('/', (req, res) => {
  console.log(req.body);
  Shop.create(req.body, () => {
    res.redirect('/')
  })
})

router.get('/seed', (req, res) => {
  Shop.create(shopSeed, (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('added provided shop data');
    }
  });
  res.redirect('/');
});

// Shop.collection.drop();

module.exports = router;
