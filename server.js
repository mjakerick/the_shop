// dependencies
const express = require('express');
require('dotenv').config();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const db = mongoose.connection;
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const timestamps = require('mongoose-timestamp');

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
app.use(morgan('tiny'));

// connect router
const shopController = require('./controllers/shop.js');
app.use('/', shopController);
const userController = require('./controllers/user.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
const storyController = require('./controllers/story.js');
app.use('/story', storyController);

// app listen
app.listen(PORT, () => console.log('auth happening on port', PORT));

// code graveyard
// routes
// app.get('/', (req, res) => {
//   res.send('index route')
// });
