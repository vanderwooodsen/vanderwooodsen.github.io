import React, { Component } from 'react';
import Skills from './Skills.js';
import AboutMe from './AboutMe';



class Home extends Component{
  render(){
    return(
      <div id="home_page" className="container flex">
        <div className="box">
          <div className="flex flex-col">
                <img src="/myPhoto.jpg" className="rounded-full w-28 mx-auto"/>
                <p className="text-3xl my-6 text-center">
                    Hi, I&#x27;m Christine 🤘
                </p>
                <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-gray-800 text-center py-2">
                    Building digital products, brands, and experiences.
                </h2>
                <div>
                  <AboutMe/>
                </div>
                <div className="flex justify-center">
                  <Skills/>
                </div>
            </div>


        </div>
      </div>
    )
  }
}

export default Home;
