import React from "react";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "../data/navigation";

const LINK_CLASS =
  "mobileMenu relative flex flex-row items-center h-11 text-gray-400 hover:text-white border-l-4 border-transparent pr-6";

export default function MobileNavBar({ visible, onClose, drawerRef }) {
  if (!visible) return null;

  return (
    <>
      <div
        id="navOverlay"
        className="backdrop-blur-3xl"
        role="presentation"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobileNavBody"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed flex flex-col top-0 left-0 w-64 h-full"
      >
        <button
          type="button"
          onClick={onClose}
          className="text-white p-4 self-end"
          aria-label="Close navigation menu"
        >
          Close ✕
        </button>
        <nav className="overflow-y-auto overflow-x-hidden flex-grow" aria-label="Mobile navigation">
          <ul className="flex flex-col pt-4 space-y-1">
            {NAVIGATION_LINKS.map(({ href, label, mobileLabel, Icon }) => (
              <li key={href}>
                <a href={href} onClick={onClose} className={LINK_CLASS}>
                  <span className="inline-flex justify-center items-center ml-4">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">{mobileLabel || label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="px-5 h-8 flex items-center text-sm font-light tracking-wide text-gray-400 mt-1">
            My Social Networking
          </p>
          <ul className="flex flex-col pb-4 space-y-1" aria-label="Social profiles">
            {SOCIAL_LINKS.map(({ id, href, label, Icon }) => (
              <li key={id}>
                <a href={href} onClick={onClose} className={LINK_CLASS} target="_blank" rel="noreferrer">
                  <span className="inline-flex justify-center items-center ml-4">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate hover:font-bold">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
