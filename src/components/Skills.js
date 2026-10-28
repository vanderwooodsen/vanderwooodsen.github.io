import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SKILL_ANIMATION = {
  scale: [1, 1.2, 1],
  rotate: [0, 12, -12, 12, 0],
};

const SKILLS = [
  { label: "JavaScript", className: "devicon-javascript-plain colored" },
  { label: "TypeScript", className: "devicon-typescript-plain colored" },
  { label: "Java", className: "devicon-java-plain-wordmark colored" },
  { label: "Cucumber — automation testing", className: "devicon-cucumber-plain-wordmark colored" },
  { label: "Node.js", className: "devicon-nodejs-plain-wordmark colored node" },
  { label: "jQuery", className: "devicon-jquery-plain-wordmark colored" },
  { label: "Express", className: "devicon-express-original-wordmark text-white" },
  { label: "Redux", className: "devicon-redux-original colored" },
  { label: "Sequelize", className: "devicon-sequelize-plain-wordmark text-blue-400 sizing" },
  { label: "PostgreSQL", id: "postgres", className: "devicon-postgresql-plain-wordmark" },
  { label: "GitHub", className: "devicon-github-original-wordmark text-gray-50" },
  { label: "Git", className: "devicon-git-plain-wordmark colored" },
  { label: "MySQL", id: "mysql", className: "devicon-mysql-plain-wordmark" },
  { label: "Heroku", className: "devicon-heroku-plain-wordmark colored" },
  { label: "Travis CI", className: "devicon-travis-plain-wordmark colored" },
  { label: "Firebase", className: "devicon-firebase-plain-wordmark colored" },
  { label: "CSS3", className: "devicon-css3-plain-wordmark colored" },
  { label: "HTML5", className: "devicon-html5-plain-wordmark colored" },
  { label: "Material UI", className: "devicon-materialui-plain colored" },
  { label: "Bootstrap", className: "devicon-bootstrap-plain-wordmark colored" },
  { label: "Bulma", className: "devicon-bulma-plain colored" },
  { label: "Tailwind CSS", className: "devicon-tailwindcss-original-wordmark colored sizing" },
  { label: "Mocha", id: "mocha", className: "devicon-mocha-plain" },
  { label: "Linux", className: "devicon-linux-plain text-gray-200" },
  { label: "Adobe Illustrator", className: "devicon-illustrator-plain colored" },
  { label: "Adobe XD", id: "xd", className: "devicon-xd-plain" },
];

function Skill({ label, className, id }) {
  const reducedMotion = useReducedMotion();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <motion.button
        type="button"
        aria-label={label}
        title={label}
        className="select-none skill-button"
        id={id}
        onClick={() => setClicked(true)}
        onAnimationComplete={() => setClicked(false)}
        transition={{ ease: "linear", duration: 0.4 }}
        animate={clicked && !reducedMotion ? SKILL_ANIMATION : {}}
      >
        <i className={className} aria-hidden="true" />
      </motion.button>
    </div>
  );
}

function Skills() {
  const reducedMotion = useReducedMotion();
  return (
    <div id="skills-section" className="container grid grid-cols-12 pt-8 lg:pt-12">
      <div
        id="body_skills"
        className="border-box px-4 rounded-xl col-span-full md:col-span-8 md:col-start-3"
      >
        <div className="body_skills flex justify-center">
          <h2
            id="skills-heading"
            className="md:text-3xl text-2xl skills pt-6 lg:pt-8 pb-6 lg:pb-6"
          >
            Technical skills
          </h2>
        </div>

        <div className="icons grid grid-cols-4 lg:grid-cols-6 lg:pb-8 text-5xl md:text-7xl leading-normal pb-5 select-none">
          <motion.div
            whileInView={
              reducedMotion ? {} : {
                scale: [1, 1, 1.2, 1, 1],
                rotate: [0, 6, -6, 12, -12, 12, -12, 6, -6, 0],
              }
            }
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Skill label="React" className=" devicon-react-original-wordmark colored" />
          </motion.div>
          {SKILLS.map((skill) => (
            <Skill key={skill.label} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
