import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Animation from "./components/AnimationPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div id="bodyColor" className="tracking-normal">
      <Navbar />
      <div>
        <Animation />
        <Home />
      </div>
    </div>
  );
};

export default App;
