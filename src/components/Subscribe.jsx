import React, {useState} from 'react';
import axios from 'axios';

function Subscribe() {
  const [subscribe, setSubscribe] = useState('')

  const handleChange = (event) => {
    setSubscribe((event.target.value))
  }

  const handleSubmit = (event) => {
    axios.post('http://localhost:8080/subscribe', {email: subscribe.toLowerCase()})
    .then((response)=> {
      setSubscribe('')
    })
    .catch((error => {
      console.log(error)
    }))
    event.preventDefault();
  }
    return (
        <div>
          <form className='formPosition' onSubmit={handleSubmit}>
            <label className='formText'>
              Subscribe:
              <input className='inputText' type='text' value={subscribe} onChange={handleChange} />
            </label>
            <input className='submitText' type='submit' value='Submit'/>
          </form>
        </div>
    )
}

export default Subscribe;
