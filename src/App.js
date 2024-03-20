import logo from './logo.svg';
import './index.css';
import React from 'react';
import Manager from "./componets/Manager";
import Navbar from "./componets/Navbar";
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Manager />
    </div>

  );
}
export default App;
