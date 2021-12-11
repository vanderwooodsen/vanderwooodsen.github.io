import './App.css';
import React from 'react';
import Routes from './routes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import { tsParticles } from "tsparticles";


tsParticles
  .loadJSON("tsparticles", "presets/default.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });

function App() {
  return (
      <div className="bg-gray-900 tracking-wider tracking-normal">
          <Navbar/>
        <div>
          <Routes/>
        </div>
        <div><Footer/></div>
      </div>
  );
}

export default App;
