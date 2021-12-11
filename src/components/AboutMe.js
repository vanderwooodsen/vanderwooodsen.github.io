import React from 'react';

function AboutMe() {

  return (
    <div id="about_me" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10">

    <h1 id="aboutMe_header" className="text-3xl text-center font-semibold col-span-full">
     &gt; Hi, I&#x27;m Christine🤍
    </h1>

    <div className="col-span-1"><img src="./myPhoto.jpg" className="w-full"/></div>

    <div className="content md:col-span-2 lg:col-span-3">


        <article id="aboutMe_body" className="item-body">

          <h2 className="text-l md:text-xl text-gray-800 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </h2>

        </article>
        </div>
    </div>
  );
}

export default AboutMe;
