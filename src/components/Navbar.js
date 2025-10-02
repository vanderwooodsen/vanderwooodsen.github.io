import React, { useEffect, useState, useCallback } from "react";
import MobileNavBar from "./MobileNavbar";
import {
  FaTwitter,
  FaBehanceSquare,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaHome,
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const { body } = document;

    if (isMobileMenuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = useCallback((event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback((event) => {
    if (event) {
      event.stopPropagation();
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div>
      <div>
        <button
          id="menuBtn"
          onClick={openMobileMenu}
          className={
            "z-500 overscroll-auto fixed lg:hidden flex px-2 py-1 ml-3 mt-3 md:px-4 md:py-3 md:ml-4 md:mt-4 text-white rounded font-bold hover:text-white hover:border-blue-400 appearance-none focus:outline-none" +
            (isMobileMenuOpen ? " hidden" : "")
          }
          type="button"
          aria-label="Open navigation menu"
        >
          <IoIosMenu className="text-2xl md:text-3xl" />
        </button>
      </div>

      <MobileNavBar
        visible={isMobileMenuOpen}
        clickAway={closeMobileMenu}
        linkClick={closeMobileMenu}
      />

      <nav id="navbar" className="lg:fixed w-full z-10 top-0">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center" />

          <div
            className="w-full flex-grow lg:flex lg:content-center lg:items-center lg:w-auto hidden mt-2 lg:mt-0 z-20"
            id="nav-content"
          >
            <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
              <ul className="list-reset lg:flex justify-end items-center">
                <li className="mr-3 py-2 lg:py-0">
                  <a
                    className="inline-block py-2 px-4 text-gray-50 hover:text-blue-500 font-bold no-underline"
                    target="_blank"
                    rel="noreferrer"
                    href="//www.linkedin.com/in/christidev/"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="mr-3 py-2 lg:py-0">
                  <a
                    className="inline-block text-gray-50 hover:text-gray-500 hover:underline py-2 px-4"
                    target="_blank"
                    rel="noreferrer"
                    href="//github.com/vanderwooodsen"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="mr-3 py-2 lg:py-0">
                  <a
                    className="inline-block text-gray-50 hover:text-yellow-500 hover:underline py-2 px-4"
                    target="_blank"
                    rel="noreferrer"
                    href="//www.behance.net/christine_tsiupa"
                    aria-label="Behance"
                  >
                    <FaBehanceSquare />
                  </a>
                </li>
                <li className="mr-3 py-2 lg:py-0">
                  <a
                    className="inline-block text-gray-50 hover:text-blue-400 hover:underline py-2 px-4"
                    target="_blank"
                    rel="noreferrer"
                    href="//twitter.com/christicodes"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="mr-3 py-2 lg:py-0">
                  <a
                    className="inline-block text-gray-50 hover:text-pink-500 hover:underline py-2 px-4"
                    target="_blank"
                    rel="noreferrer"
                    href="//www.instagram.com/christis_creations_/"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="list-reset lg:flex justify-end items-center">
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="navHover inline-block py-2 px-4 text-gray-50 no-underline"
                  href="#animation"
                  aria-label="Home"
                >
                  <FaHome />
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-50 no-underline navHover py-2 px-4"
                  href="#about_me"
                >
                  About me
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-50 no-underline navHover py-2 px-4"
                  href="#skills-section"
                >
                  Skills
                </a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-50 no-underline navHover py-2 px-4"
                  href="#projects"
                >
                  Projects
                </a>
              </li>

              <li className="mr-3 py-2 lg:py-0">
                <a
                  className="inline-block text-gray-50 no-underline navHover py-2 px-4"
                  href="#contactMe"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
