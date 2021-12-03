const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');
const Game = require('../schema/game');
const getQuote = require('../src/quotes')
const path = require('path');
const port = 3000;

app.use(express.json())
app.use(express.static(__dirname + '/../dist'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
getQuote();
const expressServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const io = socketio(expressServer);

mongoose.connect('mongodb://127.0.0.1:27017/typeMVP', ()=> {
  console.log('connected to the DB')
})
