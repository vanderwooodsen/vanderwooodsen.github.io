import React from 'react';

function AboutMe() {

  return (
    <div id="about_me" className="container flex-wrap flex-shrink h-full w-full py-4 px-24 grid">

    <h1 id="aboutMe_header" className="text-3xl text-center pt-9 font-semibold">
     > Hi, I&#x27;m Christine🤍
    </h1>

    <div className="content flex px-4 py-6">

      <div><img src="./myPhoto.jpg" className="w-56 grid-cols-1"/></div>

        <article id="aboutMe_body" className="item-body">

          <h2 className="max-w-3xl  text-xl md:text-xl mx-auto text-gray-800 md:grid-cols-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </h2>

        </article>
        </div>
    </div>
  );
}

export default AboutMe;
