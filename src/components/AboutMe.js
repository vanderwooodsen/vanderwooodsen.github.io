import React from 'react';

function AboutMe() {

  return (
    <div id="about_me" className="container h-full w-full py-4 px-24">
    <div className="content flex px-6 py-6">

      <div><img src="./myPhoto.jpg" className="w-56"/></div>

        <article id="aboutMe_body" className="item-body">

          <p className="text-3xl text-center">
            Hi, I&#x27;m Christine 🤘
          </p>

          <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-gray-800 py-2">
            Building digital products, brands, and experiences.
          </h2>

        </article>
        </div>
    </div>
  );
}

export default AboutMe
