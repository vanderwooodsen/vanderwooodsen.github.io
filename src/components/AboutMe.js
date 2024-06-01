import React from "react";

function AboutMe() {
  return (
    <div id="about_me" className="pt-8 pb-2 lg:py-10">
      <h1
        id="aboutMe_header"
        className="md:text-3xl text-2xl text-center font-semibold col-span-full pb-8 text-bold"
      >
        About me a bit 🤍
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-1 md:pl-8">
          <img src="./myPhoto.jpg" className="w-full" alt="christine" />
        </div>

        <div className="content md:col-span-2 lg:col-span-3">
          <article id="aboutMe_body" className="item-body">
            <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8 ">
            I am Christine, a full-stack JavaScript developer with extensive experience in React, TypeScript, Redux, and Material UI. I am also proficient in Express, REST, PostgreSQL, Bootstrap, and other technologies. I graduated from the Grace Hopper Program at Fullstack Academy and am currently employed at Visa company. Further details about my coding bootcamp experiences can be found {" "}
              <a
                href="https://christine-tsiupa.medium.com/my-experiences-at-coding-bootcamps-1e48c1df890a"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-900 hover:text-pink-600 hover:underline"
              >
                here.
              </a>
            </p>
            <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8">
            In addition to my JavaScript expertise, I have foundational knowledge in Python and Java. I pride myself on my ability to learn quickly and adapt to new challenges. I thrive in collaborative environments, offering support to my teammates and engaging in pair programming to enhance my skills. I am dedicated to creating meaningful work and delivering impactful results.
            </p>
          </article>

          <div className="mx-4 md:mx-0 flex flex-col lg:flex-row items-center md:pl-4 my-4">
            <img
              className="w-full md:w-auto md:px-0 md:h-64 lg:mr-8 mt-2 block"
              src="./certificate.png"
              alt="certificate"
            />
            {/*
            <a href="https://www.hackerrank.com/certificates/4e3a51b8fb46" className="mt-2 block" target="_blank" rel="noreferrer">
              <img id="certificate" className="w-full md:w-auto md:h-64" src="./hackerRank.png" alt="hackerRank"/>
            </a>
             */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
