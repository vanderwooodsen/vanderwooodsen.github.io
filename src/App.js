import React from "react";
import Navbar from "./components/Navbar";
import Animation from "./components/AnimationPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div id="bodyColor" className="tracking-normal">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Animation />
        <Home />
      </main>
    </div>
  );
};

export default App;
