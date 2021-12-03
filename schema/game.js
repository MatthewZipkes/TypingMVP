const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  nickname: String,
  currentWordIndex: {
    type: Number,
    default: 0
  },
  socketID: String,
  isPartLeader: {
    type: Boolean,
    default: false
  },
  WPM: {
    type: Number,
    default: -1
  }
})

const gameSchema = new mongoose.Schema({
  words: [{type: String}],
  isOpen: {
    type: Boolean,
    default: true
  },
  isOver: {
    type: Boolean,
    default: false
  },
  players: [playerSchema],
  startTime: Number
})

module.exports = mongoose.model('Game', gameSchema);