const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.static(__dirname + '/../dist'))

app.get('/', (req, res) => {
 res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})