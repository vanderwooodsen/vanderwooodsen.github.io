import React from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { CONTACT_LINKS } from "../data/navigation";

export default function ContactMe() {
  return (
    <section
      id="contactMe"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="contact-heading">Let’s connect</h2>
      <p className="contact-description">
        Have a question or an idea? I’d love to hear from you.
      </p>
      <a
        id="contact_me_button"
        className="contact-button"
        href="mailto:contactme@christis.page"
      >
        <FiMail aria-hidden="true" />
        Contact me
        <FiArrowUpRight aria-hidden="true" />
      </a>
      <div className="contact-socials">
        {CONTACT_LINKS.map(({ id, label, href }) => (
          <a
            key={id}
            className="contact-social-link"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {label} <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
