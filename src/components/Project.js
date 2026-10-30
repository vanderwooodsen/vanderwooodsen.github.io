import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ title, skills, githubLink, webLink, children, index }) => {
  return (
    <article className="surface-panel project-card">
      <header className="project-header">
        <span className="project-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{title}</h3>
      </header>
      <ul className="project-technologies" aria-label="Technologies">
        {skills.split(",").map((skill) => (
          <li key={skill.trim()}>{skill.trim()}</li>
        ))}
      </ul>
      <div className="project-content">{children}</div>
      <div className="project-links">
        <a className="project-link" target="_blank" rel="noreferrer" href={githubLink}>
          <FaGithub aria-hidden="true" /> View code <FiArrowUpRight aria-hidden="true" />
        </a>
        {webLink && (
          <a className="project-link project-link--accent" target="_blank" rel="noreferrer" href={webLink}>
            View website <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
};

export default Project;
