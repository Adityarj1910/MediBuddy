import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Store from './pages/Store';
// import Signup from './pages/Signup';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App;