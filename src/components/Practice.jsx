import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Practice() {
    useEffect( () => {
    fetchQuotes();
    },[])

    const [quotes, setQuotes] = useState([])
    const fetchQuotes = () => {
        return (axios.get('https://api.quotable.io/random?minLength=200&maxLength=400')
        .then(response => {
          let newQuote = response.data.content.split(' ')
          console.log(newQuote)
          setQuotes(newQuote)
        })
        .catch(error => {
          console.log(error)
        }))
    }


    return (
        <div className='words'>
          {quotes.map(word => (
            <div className='wordStyle'>
              {word.split('').map(letter => {
                return(
                  <letter>{letter}</letter>
                )
              })}
            </div>
         ))}
        </div>
    )
}

export default Practice;