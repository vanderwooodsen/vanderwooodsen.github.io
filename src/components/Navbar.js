import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "../data/navigation";
import MobileNavBar from "./MobileNavbar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const main = document.getElementById("main-content");
    const wasScrollLocked = document.body.classList.contains("overflow-hidden");
    const wasInert = main?.hasAttribute("inert");

    document.body.classList.add("overflow-hidden");
    main?.setAttribute("inert", "");

    return () => {
      if (!wasScrollLocked) document.body.classList.remove("overflow-hidden");
      if (!wasInert) main?.removeAttribute("inert");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    const focusableSelector = "button, a[href]";
    drawer.querySelector(focusableSelector).focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const elements = Array.from(drawer.querySelectorAll(focusableSelector));
      const first = elements[0];
      const last = elements[elements.length - 1];
      const isOutside = !drawer.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === first || isOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || isOutside)) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      const returnTarget = window.innerWidth >= 1024
        ? document.querySelector('#navbar a[href="#animation"]')
        : menuButton;
      if (returnTarget?.isConnected) returnTarget.focus({ preventScroll: true });
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <>
      <button
        id="menuBtn"
        ref={menuButtonRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobileNavBody"
        onClick={() => setIsMobileMenuOpen(true)}
        className={
          "fixed top-0 left-0 lg:hidden items-center justify-center px-2 py-1 ml-3 mt-3 md:px-4 md:py-3 md:ml-4 md:mt-4 text-white rounded font-bold hover:text-white hover:border-blue-400 appearance-none" +
          (isMobileMenuOpen ? " hidden" : " flex")
        }
      >
        <IoIosMenu className="text-2xl md:text-3xl" aria-hidden="true" />
      </button>

      <MobileNavBar drawerRef={drawerRef} visible={isMobileMenuOpen} onClose={closeMobileMenu} />

      <nav id="navbar" className="lg:fixed w-full z-10 top-0" aria-label="Primary navigation">
        <div className="w-full container mx-auto flex items-center justify-between pl-4 py-2">
          <div id="nav-content" className="w-full flex-grow flex items-center z-20">
            <div className="flex-1 w-full mx-auto max-w-sm">
              <ul className="list-reset flex justify-end items-center" aria-label="Social profiles">
                {SOCIAL_LINKS.map(({ id, label, href, Icon, hoverClass }) => (
                  <li key={id} className="mr-3">
                    <a
                      className={"inline-block py-2 px-4 text-gray-50 " + hoverClass}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="list-reset flex justify-end items-center">
              {NAVIGATION_LINKS.map(({ href, label, Icon, iconOnly }) => (
                <li key={href} className="mr-3">
                  <a
                    className="navHover inline-block py-2 px-4 text-gray-50 no-underline"
                    href={href}
                    aria-label={iconOnly ? label : undefined}
                  >
                    {iconOnly ? <Icon aria-hidden="true" /> : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
