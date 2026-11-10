import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SKILLS, SKILL_FILTERS } from "../data/skills";

const SKILL_ANIMATION = {
  scale: [1, 1.04, 1],
};

function Skill({ label, displayLabel = label, className, id, reducedMotion }) {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      className="select-none skill-button"
      id={id}
      onClick={() => { if (!reducedMotion) setClicked(true); }}
      onAnimationComplete={() => setClicked(false)}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
      animate={clicked && !reducedMotion ? SKILL_ANIMATION : {}}
    >
      <i className={className} aria-hidden="true" />
      <span className="skill-label">{displayLabel}</span>
    </motion.button>
  );
}

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reducedMotion = useReducedMotion();
  const visibleSkills = activeFilter === "all"
    ? SKILLS
    : SKILLS.filter(({ category }) => category === activeFilter);

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
          <p className="skills-count" aria-live="polite" aria-atomic="true">{visibleSkills.length} technologies</p>
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
            <Skill key={skill.label} {...skill} reducedMotion={reducedMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
