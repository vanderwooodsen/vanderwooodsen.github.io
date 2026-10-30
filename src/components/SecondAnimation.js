import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import TypeIt from "typeit-react";

const INTRODUCTION = ["Hi, I'm Christine,", "a full stack developer! :)"];
const SPECIALTIES = ["Financial technology", "Web applications", "AI"];
const TYPE_OPTIONS = {
  speed: 55,
  startDelay: 250,
  cursorSpeed: 1000,
  loop: false,
  afterComplete: (instance) => instance.destroy(),
};

const typeIntroduction = (instance) =>
  instance.type(INTRODUCTION[0]).pause(180).break().type(INTRODUCTION[1]);

const SecondAnimation = () => {
  const reducedMotion = useReducedMotion();
  const introduction = (
    <>
      {INTRODUCTION[0]}
      <br />
      {INTRODUCTION[1]}
    </>
  );

  return (
    <div className="hero-copy">
      <header>
        <h1 className="hero-title">
          <span className="sr-only">Hi, I’m Christine, a full stack developer!</span>
          {/* Reserve the final wrapping before typing starts, at every width. */}
          <span className="hero-title__measure" aria-hidden="true">
            {introduction}
          </span>
          <span className="hero-title__text" aria-hidden="true">
            {reducedMotion ? (
              introduction
            ) : (
              <TypeIt
                id="textAnimation"
                options={TYPE_OPTIONS}
                getBeforeInit={typeIntroduction}
              />
            )}
          </span>
        </h1>
        <ul className="hero-specialties" aria-label="Areas of focus">
          {SPECIALTIES.map((specialty, index) => (
            <motion.li
              className="hero-specialty"
              key={specialty}
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.7,
                delay: reducedMotion ? 0 : 0.65 + index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {index > 0 && (
                <span className="hero-specialty__separator" aria-hidden="true">
                  ·
                </span>
              )}
              {specialty}
            </motion.li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default SecondAnimation;
