import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Animation from './components/AnimationPage.js';
import Home from './components/Home';



function App() {
  return (
      <div id="bodyColor" className="tracking-normal">
        <Navbar/>
        <div>
          <Animation/>
          <Home/>
        </div>
      </div>
  );
}

export default App;
