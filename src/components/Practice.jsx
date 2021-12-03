import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Practice() {
    useEffect( () => {
    fetchQoutes();
    },[])
    
    const [qoutes, setQoutes] = useState([])
    const fetchQoutes = () => {
        return (axios.get('https://api.quotable.io/random?minLength=200&maxLength=400')
        .then(response => {
          let newQoute = response.data.content.split(' ')
          console.log(newQoute)
          setQoutes(newQoute)
        })
        .catch(error => {
          console.log(error)
        }))
    }
    

    return (
        <div>
            {qoutes.join(' ')}
        </div>
    )
}

export default Practice;