import React, {useState} from 'react';
import Subscribe from './Subscribe.jsx';

function Home() {
    return (
        <div>
            <h1 className='home-textStyle'>Hack Reactor MVP project</h1>
            <div className='home-text'>
            <p className='home-textStyle'>This is a project I did at hack reactor, I still would like on this project after I complete the program. If you want updates for the webApp please enter your email and you will get notified when new features come out!</p>
            </div>
          <Subscribe />
        </div>
    )
}

export default Home;