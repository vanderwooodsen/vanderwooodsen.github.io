import React from "react";
import { useReducedMotion } from "framer-motion";
import TypeIt from "typeit-react";

const SecondAnimation = () => {
  const reducedMotion = useReducedMotion();
  return (
    <div className="absolute top-1/3 lg:ml-36 md:ml-24">
      <header>
        <h1 className="md:tracking-tight tracking-tighter md:leading-normal leading-normal px-5 text-gray-50 text-2xl md:text-6xl content-center select-none">
          <span className="sr-only">Hi, I’m Christine, a full stack developer!</span>
          <span aria-hidden="true">
            {reducedMotion ? (
              "Hi, I’m Christine, a full stack developer! :)"
            ) : (
              <TypeIt
                id="textAnimation"
                options={{
                  loop: true,
                  loopDelay: 10000,
                  cursorSpeed: 2000,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Hi, I'm Christine,<br/>a fullstack")
                    .pause(300)
                    .delete(9)
                    .pause(400)
                    .type("full stack developer! :)");

                  return instance;
                }}
              />
            )}
          </span>
        </h1>
      </header>
    </div>
  );
};

export default SecondAnimation;
