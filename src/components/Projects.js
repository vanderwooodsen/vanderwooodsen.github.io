import React from 'react';
import Project from './Project';

function  Projects(){
  return(

    <div className="container pt-20">

    <h1 className="text-4xl text-center font-semibold mb-6 skills">Projects</h1>

    <div className="">
      <div className="flex flex-col text-gray-50 ">

        <Project title="Uniweb" skills="REACT, REDUX, MATERIAL UI, CHART.JS, D3, PUPPETIER, POSTGRES SQL, CHAI" githubLink="https://github.com/uniwebaccess/Capstone" webLink="http://uniweb-access.herokuapp.com/" >
          There are many variations of passages of Lorem Ipsum available, <b>but the majority</b> have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </Project>

        <Project title="TASTY LIST" skills="REACT NATIVE, REDUX, REACT NATIVE PAPER, EXPO" githubLink="https://github.com/vanderwooodsen/React-Native-Recipes">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </Project>

        <Project title="LEAFLY" skills="REACT, REDUX, BULMA CSS, EXPRESS, POSTGRE SQL, CHAI, HEROKU, TRAVIS CI" githubLink="https://github.com/Genius-Guava/Leafly" webLink="https://gg-graceshopper.herokuapp.com/">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </Project>

        <Project title="PORTFOLIO" skills="REACT, TAILWIND" githubLink="https://github.com/vanderwooodsen/vanderwooodsen.github.io"/>

      </div>
    </div>
  </div>

  )

}

export default Projects;
