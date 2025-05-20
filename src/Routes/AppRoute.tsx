
import About from '../components/About';
import Home from '../components/Home';
import Services from '../components/Services';
import Contact from '../components/Contact';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 🏁 Default startup page */}
       <Route path="/Services" element={<Services />} />
       <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;