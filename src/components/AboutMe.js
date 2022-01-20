import React from 'react';

function AboutMe() {

  return (
    <div id="about_me" className="pt-8 pb-2 lg:py-10">

    <h1 id="aboutMe_header" className="md:text-3xl text-2xl text-center font-semibold col-span-full pb-8 text-bold">
     About me a bit 🤍
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div className="col-span-1 md:pl-8"><img src="./myPhoto.jpg" className="w-full" alt="christine"/></div>

    <div className="content md:col-span-2 lg:col-span-3">

        <article id="aboutMe_body" className="item-body">

          <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8 ">
            I am Christine a full stack Javascript developer currently open for new opportunities. I am mostly working with React, Redux and Material UI but am also proficient in Express, PostgreSQL, Bootstrap and others. I graduated from the Grace Hopper Program at Fullstack Academy and was an intern at Meveto, a secure authentication startup.
              You can learn more about my experience in coding bootcamps <a href="https://christine-tsiupa.medium.com/my-experiences-at-coding-bootcamps-1e48c1df890a" target="_blank" rel="noreferrer" className="underline text-blue-900 hover:text-pink-600 hover:underline">right here.</a>
          </p>
          <p className='indent text-l md:text-xl text-gray-800 px-4 md:pr-8'>
          In addition to web development, I am also interested in graphics design and draw digitally. Before joining the Grace Hopper bootcamp I also learned Python fundamentals and I believe learning quickly on my feet is my strongest point. I work great in a team and am eager to help my teammates or pair program to learn from them. I love creating things and am oriented to deliver results and make impact
          with my work.
          </p>
        </article>

          <div className="mx-4 md:mx-0 flex flex-col lg:flex-row items-center md:pl-4 my-4">
            <img className="w-full md:w-auto md:px-0 md:h-64 lg:mr-8 mt-2 block" src="./certificate.png" alt="certificate"/>
            {/*
            <a href="https://www.hackerrank.com/certificates/4e3a51b8fb46" className="mt-2 block" target="_blank" rel="noreferrer">
              <img id="certificate" className="w-full md:w-auto md:h-64" src="./hackerRank.png" alt="hackerRank"/>
            </a>
             */
        }
          </div>

        </div>
    </div>
    </div>
  );
}

export default AboutMe;
