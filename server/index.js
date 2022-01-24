const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
const Subscribers = require('../schema/subscribe');
const path = require('path');
const cors = require('cors')
const port = 8080;

app.use(express.json())
app.use(express.static(__dirname + '/../dist'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/typeMVPUsers', ()=> {
  console.log('connected to the DB')
})

app.post('/subscribe', (req, res) => {
  let newUser = new Subscribers({userEmail: req.body.email})
  newUser.save((err, user) => {
    err ? res.send(err).status(404) : res.sendStatus(202)
  })
})

app.get('/quotes', (req, res) => {
  axios.get('https://api.quotable.io/random?minLength=100&maxLength=150')
  .then(quote => {
    res.send(quote.data.content).status(200)
  })
  .catch(error => {
    res.send(error).status(404)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
const expressServer = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
