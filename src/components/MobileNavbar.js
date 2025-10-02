import React from "react";
import {
  FaTwitter,
  FaBehanceSquare,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaHome,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";

const MobileNavBar = ({ visible, clickAway, linkClick }) => {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <div
        id="navOverlay"
        className="backdrop-blur-3xl"
        role="presentation"
        onClick={clickAway}
        aria-hidden="true"
      />
      <nav
        id="mobileNavBody"
        className="z-100 fixed flex flex-col top-0 left-0 w-64 h-full"
        aria-label="Mobile navigation"
      >
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <a
                href="/#animation"
                onClick={linkClick}
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaHome />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Home Page</span>
              </a>
            </li>
            <li>
              <a
                href="/#about_me"
                onClick={linkClick}
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaUser />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">About Me</span>
              </a>
            </li>
            <li>
              <a
                href="/#skills-section"
                onClick={linkClick}
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <GiSkills />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Technical Skills</span>
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                onClick={linkClick}
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <IoBriefcase />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="/#contactMe"
                onClick={linkClick}
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaEnvelope />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Contact Me</span>
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-600">
                  My Social Networking
                </div>
              </div>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="//www.linkedin.com/in/christidev/"
                id="linkedinIcon"
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaLinkedin />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="//github.com/vanderwooodsen"
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaGithub />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="//www.behance.net/christine_tsiupa"
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaBehanceSquare />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">Behance</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="//twitter.com/christicodes"
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaTwitter />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="//www.instagram.com/christis_creations_/"
                className="mobileMenu relative flex flex-row items-center h-11 focus:outline-none text-gray-400 hover:text-white border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaInstagramSquare />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavBar;
