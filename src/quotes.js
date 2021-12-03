const axios = require('axios');

const url = 'https://api.quotable.io/random?minLength=200&maxLength=400'

const getQuote = ()=> {
  return (axios.get(url)
  .then(response => {
    response.data.content.split(' ')
  })
  .catch(error => {
    console.log(error)
  })
  )
   
}

module.exports = getQuote;
