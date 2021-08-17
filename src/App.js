import './App.css';
import React from 'react';
import Routes from './routes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';




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
