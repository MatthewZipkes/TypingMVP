const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');
const Game = require('../schema/game');
const getQuote = require('./quotes')
const port = 3001;

app.use(express.json())
app.use(express.static(__dirname + '/../dist'))

// app.get('/', (req, res) => {
//   getQuote();
//   // res.send(quote);
// })

getQuote();
const expressServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const io = socketio(expressServer);

mongoose.connect('mongodb://127.0.0.1:27017/typeMVP', ()=> {
  console.log('connected to the DB')
})
