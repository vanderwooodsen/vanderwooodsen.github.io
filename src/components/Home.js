import React, { Component } from 'react';
import Skills from './Skills.js';
import AboutMe from './AboutMe';
import Projects from './Projects'




class Home extends Component{
  render(){
    return(
      <div id="home_page" className="flex flex-col items-center">

                <AboutMe/>
                <Skills/>
                <Projects/>
            </div>
    )
  }
}

export default Home;
