import React from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div id="home_page" className="flex flex-col items-center">
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
