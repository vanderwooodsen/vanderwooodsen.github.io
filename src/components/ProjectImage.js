import React from "react";
import Zoom from "react-medium-image-zoom";

const ProjectImage = ({ big, className = "", small, width, height, alt }) => {
  const largeSource = big || small;
  const imageProps = {
    src: small,
    className: `${className} project-screenshot`,
    width,
    height,
    loading: "lazy",
  };

  return (
    <div>
      <div className="md:hidden">
        <a href={largeSource}>
          <img {...imageProps} alt={alt} />
        </a>
      </div>
      <div className="hidden md:block">
        <Zoom>
          <picture>
            <source media="(min-width: 700px)" srcSet={largeSource} />
            <img {...imageProps} alt={alt} />
          </picture>
        </Zoom>
      </div>
    </div>
  );
};

export default ProjectImage;
