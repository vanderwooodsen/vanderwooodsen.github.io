import React, { Component } from 'react';
import Skills from './Skills.js';
import AboutMe from './AboutMe';



class Home extends Component{
  render(){
    return(
      <div id="home_page" className="container mx-auto flex flex-col items-center">

                <AboutMe/>
                <div className="flex">
                  <Skills/>
                </div>
            </div>
    )
  }
}

export default Home;
