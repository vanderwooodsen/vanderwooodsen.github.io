import './App.css';
import React from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';
import './index.css';
import Animation from './components/AnimationPage.js';
import MobileNavBar from "./components/MobileNavbar"
import { useHistory } from 'react-router-dom';



function App() {
  const handleClickAway = () => {
		console.log('Maybe close the popup');
	};
  return (
      <div id="bodyColor" className="tracking-wider tracking-normal">
        <Navbar/>
        <div>
          <Animation/>
          <Routes/>
        </div>
      </div>
  );
}

export default App;
