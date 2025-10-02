import React from "react";
import TypeIt from "typeit-react";

const SecondAnimation = () => {
  return (
    <div className="absolute top-1/3 lg:ml-36 md:ml-24">
      <header>
        <p className="md:tracking-tight tracking-tighter md:leading-normal leading-normal px-5 text-gray-50 text-2xl md:text-6xl content-center select-none">
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
        </p>
      </header>
    </div>
  );
};

export default SecondAnimation;
