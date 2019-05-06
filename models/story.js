const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = Schema({
  rating: { type: Number, max: 5, min: 1 },
  story: String
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story
