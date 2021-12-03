import React from "react";
import { hot } from 'react-hot-loader/root';
import Nav from './components/Nav.jsx';
import Race from './components/Race.jsx';
import Practice from './components/Practice.jsx';
import Home from './components/Home.jsx';
import CustomGame from "./components/CustomGame.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/race' element={<Race />}/>
          <Route path='/customGame' element={<CustomGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default hot(App);