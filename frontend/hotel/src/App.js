import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Rooms from './components/Rooms';
import Book from './components/Book';
import Home from './components/Home';




function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/rooms" element={<Rooms/>}/>
          <Route exact path="/book" element={<Book/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
