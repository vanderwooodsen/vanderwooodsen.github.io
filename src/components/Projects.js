import React from "react";
import Project from "./Project";
import ProjectImage from "./ProjectImage";

const PROJECTS = [
  {
    title: "UNIWEB-ACCESS",
    skills:
      "REACT, REDUX, MATERIAL UI, CHART.JS, D3, PUPPETIER, POSTGRES SQL, CHAI, FIREBASE",
    githubLink: "https://github.com/uniwebaccess/Capstone",
    webLink: "http://uniweb-access.herokuapp.com/",
    description: (
      <>
        <p>
          It is a tool that tests websites against standards of web
          accessibility according to the A11 Project checklist. It analyzes
          pages, gathers statistics and compares results to average scores. The
          user can explore visualizations that showcase how their site measures
          up and can learn more about some of the most important qualities of an
          accessible site. The frontend was developed using Material UI
          components, and I also implemented the checks themselves using browser
          automation with Puppeteer.
        </p>
      </>
    ),
    imagesWrapperClass: "pt-5 grid md:grid-cols-4 md:gap-2 grid-cols-2 gap-2",
    images: [
      {
        className: "w-64",
        small: "./uniwebScrinshots/uniweb1small.png",
        big: "./uniwebScrinshots/uniweb1.png",
      },
      {
        className: "w-64",
        small: "./uniwebScrinshots/uniweb2small.png",
        big: "./uniwebScrinshots/uniweb2.png",
      },
      {
        className: "w-64",
        small: "./uniwebScrinshots/uniweb3small.png",
        big: "./uniwebScrinshots/uniweb3.png",
      },
      {
        className: "w-64",
        small: "./uniwebScrinshots/uniweb4small.png",
        big: "./uniwebScrinshots/uniweb4.png",
      },
    ],
  },
  {
    title: "TASTY LIST",
    skills: "REACT NATIVE, REDUX, REACT NATIVE PAPER, EXPO",
    githubLink: "https://github.com/vanderwooodsen/React-Native-Recipes",
    description: (
      <>
        <p>
          This was my hackathon project at The Grace Hopper Academy. I wanted to
          try using React Native and used Expo for my setup. It is a recipe
          search tool using TheMealDB API with the ability to store recipes
          marked as favorites. I used React Native Paper for the UI, React
          Navigation for page transitions, and Redux to manage the state.
        </p>
      </>
    ),
    imagesWrapperClass: "pt-5 flex flex-row items-center justify-between",
    images: [
      {
        className: "w-64",
        small: "./tastyList/tastyList1sm.png",
        big: "./tastyList/tastyList1sm.png",
      },
      {
        className: "w-64",
        small: "./tastyList/tastyList2sm.png",
        big: "./tastyList/tastyList2sm.png",
      },
      {
        className: "w-64",
        small: "./tastyList/tastyList3sm.png",
        big: "./tastyList/tastyList3sm.png",
      },
      {
        className: "w-64",
        small: "./tastyList/tastyList4sm.png",
        big: "./tastyList/tastyList4sm.png",
      },
    ],
  },
  {
    title: "GITHUB ORGANIZATION VIEWER",
    skills: "REACT, REDUX, TAILWIND",
    githubLink: "https://github.com/vanderwooodsen/Github-Organization-Viewer",
    webLink: "https://christis.page/Github-Organization-Viewer/",
    description: (
      <>
        <p>
          This project is a Github repository viewer I made to practice using
          Redux and working with external APIs. It allows you to browse
          organizations, their repositories and commits. Github allows a limited
          number of requests without authentication, but I also implemented the
          ability to provide your own auth token for API access. I used Tailwind
          CSS for styling the UI.
        </p>
      </>
    ),
    imagesWrapperClass: "pt-5 grid md:grid-cols-4 md:gap-2 grid-cols-2 gap-2",
    images: [
      {
        small: "./githubScrinshots/github1sm.png",
        big: "./githubScrinshots/github1.png",
      },
      {
        small: "./githubScrinshots/github2sm.png",
        big: "./githubScrinshots/github2.png",
      },
    ],
  },
  {
    title: "LEAFLY",
    skills:
      "REACT, REDUX, BULMA, CSS, EXPRESS, POSTGRE SQL, CHAI, HEROKU, TRAVIS CI",
    githubLink: "https://github.com/Genius-Guava/Leafly",
    webLink: "https://gg-graceshopper.herokuapp.com/",
    description: (
      <>
        <p>
          This was a learning project developed by me and my cohort at The Grace
          Hopper Program. It is an online shop for house plants. Admin users
          have access to a management UI to add and remove inventory. Regular
          users can add items to their cart, use promo codes, and checkout.
          Users can sign up for either a local account or use Google login via
          OAuth; in both cases, they can manage their personal profile and
          shipping address. Cart contents for logged in users will be persisted
          between sessions. The frontend was styled using Bulma CSS and I set up
          the tests to be automatically executed on Travis CI with continuous
          deployment to Heroku.
        </p>
      </>
    ),
    imagesWrapperClass: "pt-5 grid md:grid-cols-4 md:gap-2 grid-cols-2 gap-2",
    images: [
      {
        className: "w-64",
        small: "./leaflyScrinshots/leafly1sm.png",
        big: "./leaflyScrinshots/leafly1.png",
      },
      {
        className: "w-64",
        small: "./leaflyScrinshots/leafly2sm.png",
        big: "./leaflyScrinshots/leafly2.png",
      },
      {
        className: "w-64",
        small: "./leaflyScrinshots/leafly3sm.png",
        big: "./leaflyScrinshots/leafly3.png",
      },
      {
        className: "w-64",
        small: "./leaflyScrinshots/leafly4sm.png",
        big: "./leaflyScrinshots/leafly4.png",
      },
    ],
  },
  {
    title: "PORTFOLIO",
    skills: "REACT, TAILWIND CSS, REACT-SPRING, PARTICLES.JS, FRAMER",
    githubLink: "https://github.com/vanderwooodsen/vanderwooodsen.github.io",
    description: <p>You are already here :)</p>,
    images: [],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container py-6 lg:py-8 lg:pt-16">
      <h1 className="md:text-3xl text-2xl text-center font-semibold mb-6 skills">
        Projects
      </h1>

      <div>
        <div className="flex flex-col text-gray-50">
          {PROJECTS.map(({
            title,
            skills,
            githubLink,
            webLink,
            description,
            images = [],
            imagesWrapperClass = "",
          }) => (
            <Project
              key={title}
              title={title}
              skills={skills}
              githubLink={githubLink}
              webLink={webLink}
            >
              <>
                <div className="space-y-4">{description}</div>
                {images.length > 0 && (
                  <div className={imagesWrapperClass}>
                    {images.map(({ small, big, className, width }) => (
                      <ProjectImage
                        key={`${title}-${small}`}
                        className={className}
                        small={small}
                        big={big}
                        width={width}
                      />
                    ))}
                  </div>
                )}
              </>
            </Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
