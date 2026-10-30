import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div id="home_page" className="flex flex-col items-center">
      <AboutMe />
      <div className="portfolio-content">
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
