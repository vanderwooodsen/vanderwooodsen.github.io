import React from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

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
      </a>
      <div className="contact-socials">
        <a
          className="contact-social-link"
          href="https://www.linkedin.com/in/christidev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FiArrowUpRight aria-hidden="true" />
        </a>
        <a
          className="contact-social-link"
          href="https://github.com/vanderwooodsen"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
