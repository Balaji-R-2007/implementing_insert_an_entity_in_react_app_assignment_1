// src/App.jsx

import React from 'react';
import Home from './Home';
import {Form} from './Form';
import './App.css'; // Import global styles
import { BrowserRouter, Router, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addbook' element={<Form/>}/> 
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
