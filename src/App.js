import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/Singup/Singup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
