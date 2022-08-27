import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Classes from './classes';
import Schedules from './schedules';
import Contact from './contact';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/classes' element={<Classes/> } />
          <Route path='/schedules' element={<Schedules/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;