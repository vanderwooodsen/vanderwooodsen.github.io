import React from "react";

function AboutMe() {
  return (
    <div id="about_me" className="pt-8 pb-2 lg:py-10">
      <h2
        id="aboutMe_header"
        className="md:text-3xl text-2xl text-center font-semibold col-span-full pb-8 text-bold"
      >
        About me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-1 md:pl-8">
          <img src="./myPhoto.jpg" className="w-full" width="2275" height="4199" alt="Christine Tsiupa" loading="lazy" decoding="async" />
        </div>

        <div className="content md:col-span-2 lg:col-span-3">
          <article id="aboutMe_body" className="item-body">
            <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8 ">
              I’m Christine, a full-stack software developer with a background in
              financial technology and AI applications. I enjoy turning complex
              requirements into clear, usable software and working across the
              frontend and backend to bring features together.
            </p>
            <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8">
              My core technologies include JavaScript, TypeScript, React, and
              Redux, complemented by experience with Java, REST APIs, and
              relational databases. I value readable code, thoughtful interfaces,
              and automated testing, including Cucumber.
            </p>
            <p className="indent text-l md:text-xl text-gray-800 px-4 md:pr-8">
              I bring a collaborative approach to development: sharing knowledge,
              supporting teammates, and learning through pair programming. A
              graduate of the Grace Hopper Program at Fullstack Academy, I’ve
              continued to build on that foundation through professional practice
              and new technical challenges. Read more about{" "}
              <a
                href="https://christine-tsiupa.medium.com/my-experiences-at-coding-bootcamps-1e48c1df890a"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-900 hover:text-pink-600 hover:underline"
              >
                how I started my software development career.
              </a>
            </p>
          </article>

          <div className="mx-4 md:mx-0 flex flex-col lg:flex-row items-center md:pl-4 my-4">
            <img
              className="w-full md:w-auto md:px-0 md:h-64 lg:mr-8 mt-2 block"
              src="./certificate.png"
              width="1584" height="1224" alt="Grace Hopper Program graduation certificate" loading="lazy" decoding="async"
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
