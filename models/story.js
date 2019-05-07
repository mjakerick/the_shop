const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const storySchema = Schema({
  rating: { type: Number, max: 5, min: 1 },
  story: String,
  username: String
});

storySchema.plugin(timestamps);
mongoose.model('Story', storySchema);
const Story = mongoose.model('Story', storySchema);

module.exports = Story
