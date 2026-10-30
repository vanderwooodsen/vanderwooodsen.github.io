import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SKILL_ANIMATION = {
  scale: [1, 1.04, 1],
};

const SKILLS = [
  { label: "React", className: "devicon-react-original colored" },
  { label: "JavaScript", className: "devicon-javascript-plain colored" },
  { label: "TypeScript", className: "devicon-typescript-plain colored" },
  { label: "Java", className: "devicon-java-plain colored" },
  { label: "Cucumber — automation testing", className: "devicon-cucumber-plain colored" },
  { label: "Node.js", className: "devicon-nodejs-plain colored" },
  { label: "jQuery", className: "devicon-jquery-plain colored" },
  { label: "Express", className: "devicon-express-original text-white" },
  { label: "Redux", className: "devicon-redux-original colored" },
  { label: "Sequelize", className: "devicon-sequelize-plain text-blue-400" },
  { label: "PostgreSQL", id: "postgres", className: "devicon-postgresql-plain" },
  { label: "GitHub", className: "devicon-github-original text-gray-50" },
  { label: "Git", className: "devicon-git-plain colored" },
  { label: "MySQL", id: "mysql", className: "devicon-mysql-plain" },
  { label: "Heroku", className: "devicon-heroku-plain colored" },
  { label: "Travis CI", className: "devicon-travis-plain colored" },
  { label: "Firebase", className: "devicon-firebase-plain colored" },
  { label: "CSS3", className: "devicon-css3-plain colored" },
  { label: "HTML5", className: "devicon-html5-plain colored" },
  { label: "Material UI", className: "devicon-materialui-plain colored" },
  { label: "Bootstrap", className: "devicon-bootstrap-plain colored" },
  { label: "Bulma", className: "devicon-bulma-plain colored" },
  { label: "Tailwind CSS", className: "devicon-tailwindcss-plain colored" },
  { label: "Mocha", id: "mocha", className: "devicon-mocha-plain" },
  { label: "Linux", className: "devicon-linux-plain text-gray-200" },
  { label: "Adobe Illustrator", className: "devicon-illustrator-plain colored" },
  { label: "Adobe XD", id: "xd", className: "devicon-xd-plain" },
];

const SKILL_FILTERS = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

const SKILL_GROUPS = {
  frontend: ["React", "JavaScript", "TypeScript", "jQuery", "Redux", "CSS3", "HTML5", "Material UI", "Bootstrap", "Bulma", "Tailwind CSS"],
  backend: ["Java", "Node.js", "Express", "Sequelize", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Cucumber — automation testing", "GitHub", "Git", "Heroku", "Travis CI", "Mocha", "Linux", "Adobe Illustrator", "Adobe XD"],
};

function Skill({ label, className, id }) {
  const reducedMotion = useReducedMotion();
  const [clicked, setClicked] = useState(false);

  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      className="select-none skill-button"
      id={id}
      onClick={() => setClicked(true)}
      onAnimationComplete={() => setClicked(false)}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
      animate={clicked && !reducedMotion ? SKILL_ANIMATION : {}}
    >
      <i className={className} aria-hidden="true" />
      <span className="skill-label">{label === "Cucumber — automation testing" ? "Cucumber" : label}</span>
    </motion.button>
  );
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reducedMotion = useReducedMotion();
  const visibleSkills = activeFilter === "all"
    ? SKILLS
    : SKILLS.filter(({ label }) => SKILL_GROUPS[activeFilter].includes(label));

  return (
    <section id="skills-section" aria-labelledby="skills-heading" className="portfolio-section">
      <header className="section-heading">
        <p className="section-eyebrow">The toolkit</p>
        <h2 id="skills-heading" className="section-title">Technical skills</h2>
        <p className="section-description">Across interfaces, services, and the details in between.</p>
      </header>
      <div id="body_skills" className="surface-panel skills-panel">
        <div className="skills-toolbar">
          <div className="skill-filters" role="group" aria-label="Filter technologies">
            {SKILL_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className="skill-filter"
                aria-pressed={activeFilter === id}
                aria-controls="skills-grid"
                onClick={() => setActiveFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="skills-count" aria-live="polite">{visibleSkills.length} technologies</p>
        </div>
        <motion.div
          id="skills-grid"
          className="skills-grid"
          key={activeFilter}
          initial={reducedMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
        >
          {visibleSkills.map((skill) => (
            <Skill key={skill.label} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
