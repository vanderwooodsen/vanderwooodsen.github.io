import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { TiArrowForward } from "react-icons/ti";


function  Projects(){
  return(

    <div className="container mx-auto w-full h-full pt-14">

    <div className="p-4 mt-4">
    <h1 className="text-4xl text-center font-semibold mb-6 skills">Projects</h1>

    <div className="container">
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50 ">

        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bgTimeline pointer
              -events-none"></div>
            </div>

            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgTimeline shadow text-center">
              <i className="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div className="timelineTXT col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-medium text-lg mb-1">UNIWEB</h3>
            <p className="leading-tight text-justify w-full descOfProj font-semibold">
            React, Redux, Material UI, Chart.JS, D3, Puppetier, Postgresql SQL, Chai
            </p>
            <div className="clearfix">
              <a className="float-left githubBtn font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><FaGithub/><article className="text-base">See repo</article></a>
              <a  id="projectsBtn" className="float-right githubBtn2 font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><TiArrowForward/><article className="text-base">See Website</article></a>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">

              <div className="h-full w-1 bgTimeline pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgTimeline shadow text-center">
              <i className="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div className="timelineTXT col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1">TASTY LIST</h3>
            <p className="leading-tight text-justify descOfProj font-semibold">
            REACT NATIVE, REDUX, REACT NATIVE PAPER, EXPO
            </p>
            <div className="clearfix">
              <a className="float-left githubBtn font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><FaGithub/><article className="text-base">See repo</article></a>
              <a  id="projectsBtn" className="float-right githubBtn2 font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><TiArrowForward/><article className="text-base">More info</article></a>
            </div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bgTimeline pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgTimeline shadow text-center">
              <i className="fas fa-times-circle text-white"></i>
            </div>
          </div>
          <div className="timelineTXT col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-gray-50">LEAFLY</h3>
            <p className="leading-tight text-justify descOfProj font-semibold">
            REACT, REDUX, BULMA CSS, EXPRESS, POSTGRE SQL, CHAI, HEROKU, TRAVIS CI
            </p>

            <div className="clearfix">
              <a className="float-left githubBtn font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><FaGithub/><article className="text-base">See repo</article></a>
              <a  id="projectsBtn" className="float-right githubBtn2 font-semibold  text-2xl pt-4" href="//github.com/vanderwooodsen/React-Native-Recipes"><TiArrowForward/><article className="text-base">See Website</article></a>
            </div>

          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bgTimeline pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgTimeline shadow text-center">
              <i className="fas fa-exclamation-circle text-white"></i>
            </div>
          </div>
          <div className="timelineTXT col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-semibold text-lg mb-1 text-white">PORTFOLIO</h3>
            <p className="leading-tight text-justify">

            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  </div>
  )

}

export default Projects;
