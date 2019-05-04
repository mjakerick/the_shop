const express = require('express');
const router = express.Router();
const Shop = require('../models/shop.js');
const shopSeed = require('../models/seed.js');

router.put('/shops/:id', (req, res) => {
  console.log(req.body);
  Shop.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updateModel) => {
    // res.send(updateModel)
    res.redirect('/shops/' + req.params.id);
  });
});

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
});

router.post('/', (req, res) => {
  console.log(req.body);
  Shop.create(req.body, () => {
    res.redirect('/')
  });
});

router.delete('/:id', (req, res) => {
  // Shop.findByIdAndRemove(req.params.id, (err, data) => {
  //   res.redirect('/')
  // });
  res.send('deleting');
});

router.get('/:id/edit', (req, res) => {
  Shop.findById(req.params.id, (err, foundShop) => {
    {
      res.render(
        'edit.ejs',
        {
          shop: foundShop
        }
      );
    };
  });
});

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
