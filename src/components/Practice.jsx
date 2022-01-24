import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import $ from 'jquery'

 function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }

function Practice() {
  const [quotes, setQuotes] = useState([])
  const prevQuote = usePrevious(quotes)
  const [WPM, setWPM] = useState(0)
  const [CPM, setCPM] = useState(0)

    useEffect( () => {
    fetchQuotes();
    },[])

    useEffect( () => {
      resetStyles(quotes)
    }, [quotes])

    useEffect( () => {
      window.addEventListener('keydown', onKeyPress);
      return () => window.removeEventListener("keydown", onKeyPress);
    })

  const excludeKeys = ['Enter', 'Shift', 'Control', 'PageUp', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Meta', 'Escape', 'Alt'];

  const removeChars = ['Backspace', 'Delete'];

  let cursor = 0;
  let letterCounter = 0;
  let wordCounter = 0;
  let completedLetters = [];
  let totalLetterCount = 0;
  let startTime = null;
  let endTime = null;
  let quoteLetters = document.getElementsByTagName('span')

    const fetchQuotes = () => {
        return (axios.get('http://localhost:8080/quotes')
        .then(response => {
          if(response.data.includes('’')) {
            fetchQuotes()
          }
          let newQuote = response.data.toLowerCase().split('')
          setQuotes(newQuote)
        })
        .catch(error => {
          console.log(error)
        }))
    }

    function resetStyles (words) {
      words.length !== 0 ?
      words.forEach((word, wIndex) => {
        $(document.getElementsByClassName('wordStyle')[wIndex].getElementsByTagName('span')).removeClass('cursor')
        for( let i = 0; i < document.getElementsByClassName('wordStyle')[wIndex].getElementsByTagName('span').length; i++) {
          $(document.getElementsByClassName('wordStyle')[wIndex].getElementsByTagName('span')[i]).removeClass('incorrect')
          $(document.getElementsByClassName('wordStyle')[wIndex].getElementsByTagName('span')[i]).removeClass('correct')
        }
      })
         :
      console.log('no words yet')
    }

    const onKeyPress = (event) => {
      let keyPress = event.key;
      if (!startTime) {
        startTime = new Date()
      }
      if (keyPress === 'Tab') {
        setWPM(0)
        setCPM(0)
        letterCounter = 0;
        startTime = null;
        fetchQuotes()
        event.preventDefault()
      }
      if (completedLetters.length >= quotes.length - 1) {
        endTime = new Date();
        let delta = endTime - startTime;
        let seconds = Math.floor(delta / 1000)
        let minutes = seconds / 60;
        let numOfWords = quotes.join('').split(' ').length;
        let numOfCharacters = quotes.length
        let wps = numOfWords / seconds;
        let cps = numOfCharacters / seconds;
        setWPM(Math.floor((wps * 60.0)));
        setCPM(Math.floor((cps * 60.0)));
      }
      if (letterCounter !== 0) {
          $(quoteLetters[letterCounter - 1]).removeClass('cursor')
        }
      if (!excludeKeys.includes(keyPress) && !removeChars.includes(keyPress) && keyPress !== 'Tab') {
        $(quoteLetters[letterCounter]).addClass('cursor')
        if (keyPress === quotes[letterCounter]) {
          $(quoteLetters[letterCounter]).addClass('correct')
          completedLetters.push(keyPress)
          letterCounter++
        } else {
          $(quoteLetters[letterCounter]).addClass('incorrect')
          completedLetters.push(keyPress)
          letterCounter++
        }
      }
      if (removeChars.includes(keyPress)) {
        letterCounter !== 0 ? letterCounter-- : letterCounter = 0
        completedLetters.pop();
        $(quoteLetters[letterCounter]).removeClass('cursor')
        $(quoteLetters[letterCounter - 1]).addClass('cursor')
        $(quoteLetters[letterCounter]).removeClass('correct')
        $(quoteLetters[letterCounter]).removeClass('incorrect')
      }
    }

    return (
      <>
      <div className='resultsContainer'>
        <div className='results'>WPM: {WPM}</div>
        <div className='results'>CPM: {CPM}</div>
      </div>
        <div className='words'>
          {quotes.map((letter, index) => {
           if (letter === ' ') {
             return (
              <div className='wordStyle'>
                <span className='letter-space' key={index}>{letter}</span>
              </div>
             )
           } else {
            return (
              <div className='wordStyle'>
                <span className='letter' key={index}>{letter}</span>
              </div>
             )
           }
          }
         )}
        </div>
        <div className='reset'>Press Tab to reset!</div>
      </>
    )
}

export default Practice;
