require('dotenv').config();

// dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const db = mongoose.connection;

// configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/shops';

// connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('i am a mongoose')
});

// error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

// middleware
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveinitialized: false
}));

// connect router
const shopController = require('./controllers/shop.js');
app.use('/', shopController);

// app listen
app.listen(PORT, () => console.log('auth happening on port', PORT));

// code graveyard
// routes
// app.get('/', (req, res) => {
//   res.send('index route')
// });
