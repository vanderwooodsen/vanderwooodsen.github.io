import React from 'react';
import Project from './Project';

function  Projects(){
  return(

    <div id="projects" className="container py-6 lg:py-8 lg:pt-19">

    <h1 className="md:text-3xl text-2xl sm text-center font-semibold mb-6 skills">Projects</h1>

    <div>
      <div className="flex flex-col text-gray-50 ">

        <Project title="UNIWEB-ACCESS" skills="REACT, REDUX, MATERIAL UI, CHART.JS, D3, PUPPETIER, POSTGRES SQL, CHAI" githubLink="https://github.com/uniwebaccess/Capstone" webLink="http://uniweb-access.herokuapp.com/" >
        It is a tool that tests websites against standards of web accessibility according to the A11 Project checklist. It analyzes pages, gathers statistics and compares results to average scores. The user can explore visualizations that showcase how their site measures up and can learn more about some of the most important qualities of an accessible. The frontend was developed using Material UI components and I also implemented the checks themselves using browser automation with Puppeteer.
        </Project>

        <Project title="TASTY LIST" skills="REACT NATIVE, REDUX, REACT NATIVE PAPER, EXPO" githubLink="https://github.com/vanderwooodsen/React-Native-Recipes">
        This was my hackathon project at The Grace Hopper Academy. I wanted to try using React Native and used Expo for my setup. It is a recipe search tool using TheMealDB API with the ability to store recipes marked as favorite. I used React Native Paper for the UI, React Navigation for page transitions and Redux to manage the state.
        </Project>

        <Project title="GITHUB ORGANIZATION VIEWER" skills="REACT, REDUX, TAILWIND" githubLink="https://github.com/vanderwooodsen/Github-Organization-Viewer" webLink="https://christis.page/Github-Organization-Viewer/">
        This project is a Github repository viewer I made to practice using Redux and working with external APIs. It allows you to browse organizations, their repositories and commits. Github allows a limited number of requests without authentication, but I also implemented the ability to provide your own auth token for API access. I used Tailwind CSS for styling the UI.
        </Project>

        <Project title="LEAFLY" skills="REACT, REDUX, BULMA, CSS, EXPRESS, POSTGRE SQL, CHAI, HEROKU, TRAVIS CI" githubLink="https://github.com/Genius-Guava/Leafly" webLink="https://gg-graceshopper.herokuapp.com/">
        This was a learning project developed by me and my cohort at The Grace Hopper Program, it is an online shop for house plants. Admin users have access to a management UI to add and remove inventory. Regular users can add items to their cart, use promo codes and checkout. Users can sign up for either a local account or use Google login via OAuth, in both cases they can manager their personal profile and shipping address. Cart contents for logged in users will be persisted between sessions. Frontend was styled using Bulma CSS and I setup the tests to be automatically executed on Travis CI and continuous deployment to Heroku.
        </Project>

        <Project title="PORTFOLIO" skills="REACT, TAILWIND CSS, REACT-SPRING, PARTICLES.JS, FRAMER" githubLink="https://github.com/vanderwooodsen/vanderwooodsen.github.io"/>

      </div>
    </div>
  </div>

  )

}
export default Projects;
