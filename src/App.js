import logo from './logo.svg';
import './index.css';
import React from 'react';

import Navbar from "./componets/Navbar";
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import Home from './componets/Home';
import Contact from './componets/Contact';
import About from './componets/About';
import Manager from './componets/Manager';  


function App() {
  return (
    <div className="App">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     
      <Navbar />
        
        
        
      
          
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Manager />} />
        </Routes>
      

        
    </div>

  );
}
export default App;
