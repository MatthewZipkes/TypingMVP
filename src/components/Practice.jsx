import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Practice() {
  const [quotes, setQuotes] = useState([])
  const [keyPress, setKeyPress] = useState('')
  const [letter, setLetter] = useState(0)
  const [word, setWord] = useState(0)
  const [wordString, setWordString] = useState('')
  const [completedWords, setCompletedWords] = useState([])
    useEffect( () => {
    fetchQuotes();
    },[])

    const fetchQuotes = () => {
        return (axios.get('https://api.quotable.io/random?minLength=200&maxLength=400')
        .then(response => {
          let newQuote = response.data.content.toLowerCase().split(' ')
          // console.log(newQuote)
          setQuotes(newQuote)
        })
        .catch(error => {
          console.log(error)
        }))
    }

    window.addEventListener('keypress', event => {
      setKeyPress(event.key);
      console.log(event.key)
    })

    if (quotes.length > 0) {

      //if letter != 0
        // if you hit space bar add word to completed words and it takes you to the next word, set letter to 0
      // if you hit delete and letter = 0
          //go back to previousWord in completed words set ifletter to word.length
        // else remove letter from end of string decrement letter

        // if add keypress to wordstring
        //

    }

    // if (keyPress === quotes[word][letter]) {
    //   console.log('quote Length', quotes[word].length -1)
    //   console.log('current Letter', letter)
    //   console.log(keyPress)
    //   if (letter === quotes[word].length - 1) {
    //       setWord(word + 1)
    //       setLetter(0);
    //   } else {
    //     setLetter(letter + 1)
    //     console.log('CORRECT')
    //   }
    // } else {
    //   console.log('no Quote Yet')
    // }
    return (
        <div className='words'>
          {quotes.map(word => (
            <div className='wordStyle'>
              {word.split('').map(letter => {
                return(
                  <span value={letter}>{letter}</span>
                )
              })}
            </div>
         ))}
        </div>
    )
}

export default Practice;