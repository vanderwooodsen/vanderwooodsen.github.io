import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function AboutMe() {
  return (
    <section id="about_me" aria-labelledby="aboutMe_header">
      <div className="about-container">
        <header className="section-heading">
          <p className="section-eyebrow">Introduction</p>
          <h2 id="aboutMe_header" className="section-title">About me</h2>
        </header>

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
            <p className="about-intro">
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
              Fullstack Academy.
            </p>
            <a
              href="./certificate.png"
              target="_blank"
              rel="noreferrer"
              className="text-link about-certificate"
            >
              View certificate <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
