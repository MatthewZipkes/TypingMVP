const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    unique: true
  }
})

module.exports = mongoose.model('Subscribers', subscribersSchema);