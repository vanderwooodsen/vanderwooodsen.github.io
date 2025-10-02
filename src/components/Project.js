import React from "react";
import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

const Project = ({ title, skills, githubLink, webLink, children }) => {
  return (
    <div className="flex md:grid grid-cols-12">
      <div className="relative col-start-2">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-800 bg-opacity-85 pointer-events-none" />
          <div className="lg:w-16 h-0.5 bgTimeline absolute lg:left-0" />
        </div>

        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bgTimeline shadow text-center">
          <i className="fas fa-check-circle text-white" />
        </div>
      </div>
      <div className="timelineTXT col-span-8 p-6 rounded-xl shadow-md mb-5">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="w-full descOfProj font-semibold text-sm">{skills}</p>

        <div className="py-4 aboutProjects space-y-4">{children}</div>

        <div className="text-md font-semibold flex-col flex space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <a
            className="githubBtn font-semibold"
            target="_blank"
            rel="noreferrer"
            href={githubLink}
          >
            <FaGithub className="inline h-7 w-7" /> See repo
          </a>
          {webLink && (
            <a className="githubBtn2" target="_blank" rel="noreferrer" href={webLink}>
              <TiArrowForward className="inline h-7 w-7" /> See Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
