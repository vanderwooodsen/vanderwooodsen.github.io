import React from "react";

function AboutMe() {
  return (
    <section id="about_me" aria-labelledby="aboutMe_header">
      <h2
        id="aboutMe_header"
        className="md:text-3xl text-2xl text-center font-semibold"
      >
        About me
      </h2>

      <div className="about-layout">
        <img
          src="./myPhoto.jpg"
          className="about-portrait"
          width="2275"
          height="4199"
          alt="Christine Tsiupa"
          loading="lazy"
          decoding="async"
        />

        <article id="aboutMe_body" className="about-copy">
          <p>
            I’m Christine, a full-stack software developer with a background in
            financial technology and AI applications. I enjoy turning complex
            requirements into clear, usable software and working across the
            frontend and backend to bring features together.
          </p>
          <p>
            My core technologies include JavaScript, TypeScript, React, and
            Redux, complemented by experience with Java, REST APIs, and
            relational databases. I value readable code, thoughtful interfaces,
            and automated testing. I enjoy sharing knowledge, supporting
            teammates, and solving problems through pair programming. I also
            completed the Grace Hopper software development course at
            Fullstack Academy.{" "}
            <a
              href="./certificate.png"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-900 hover:text-pink-600"
            >
              View certificate
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
