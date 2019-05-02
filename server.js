require('dotenv').config();

// dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');

// configuration
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

// middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended:false }));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveinitialized: false
}));

// database
mongoose.connect(mongoURI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('i am a mongoose')
});

// app listen
app.listen(PORT, () => console.log('auth happening on port', PORT));

// routes
app.get('/', (req, res) => {
  res.send('index route')
});
