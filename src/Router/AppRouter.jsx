import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import NotFound from '../Pages/NotFound';
import Navbar from '../Components/Navbar/Navbar';
import Details from '../Pages/Details/Details';

const AppRouter = () => {
  const [nav, setNav] = useState(false);

  return (
    <BrowserRouter>
      {nav && <Navbar />}
      <Routes>
        <Route path="/" element={<Login funcNav={setNav} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About funcNav={setNav} />} />
        <Route path="/home" element={<Home funcNav={setNav} />} />
        <Route path="/Details" element={<Details funcNav={setNav} />} />
        <Route path="*" element={<NotFound funcNav={setNav} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
