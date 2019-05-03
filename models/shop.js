const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  hours: String,
  website: String,
  img: String,
  artists: [{
    artistName: String,
    instagramHandle: String,
    rating: { type: Number, min: 1, max: 5},
  }],
  takesWalkIns: Boolean,
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
