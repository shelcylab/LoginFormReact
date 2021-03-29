import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import JsonApi from './JsonApi';
import Login from './auth/Login';
import Register from './auth/Register';
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div>hello</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/api' element={<JsonApi />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
