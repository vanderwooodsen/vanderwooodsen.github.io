import React, { Component } from 'react';
import Skills from './Skills.js';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';



class Home extends Component{
  render(){
    return(
      <div id="home_page" className="flex flex-col items-center">
                {/* <Animation/> */}
                <AboutMe/>
                <Skills/>
                <Projects/>
                <ContactMe/>
            </div>
    )
  }
}

export default Home;
