import React from "react";
import Zoom from "react-medium-image-zoom";

const ProjectImage = ({ big, className = "", small, width }) => {
  const largeSource = big || small;

  return (
    <div>
      <div className="md:hidden">
        <a href={largeSource}>
          <img
            src={small}
            className={className}
            width={width}
            alt="Project screenshot"
            loading="lazy"
          />
        </a>
      </div>
      <div className="hidden md:block">
        <Zoom>
          <picture>
            <source media="(min-width: 700px)" srcSet={largeSource} />
            <img
              srcSet={small}
              className={className}
              width={width}
              alt="Project screenshot"
              loading="lazy"
            />
          </picture>
        </Zoom>
      </div>
    </div>
  );
};

export default ProjectImage;
