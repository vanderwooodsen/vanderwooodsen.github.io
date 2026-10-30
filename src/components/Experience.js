import React from "react";
import { FiActivity, FiArrowUpRight, FiCpu, FiLayout } from "react-icons/fi";
import FocusOrbit from "./FocusOrbit";

const CONTRIBUTIONS = [
  {
    title: "Visa Direct Portal",
    Icon: FiLayout,
    description:
      "Contributed to the development of an enterprise web portal within Visa’s money movement business.",
  },
  {
    title: "AI agent",
    Icon: FiCpu,
    description:
      "Built and integrated an AI agent into the Visa Direct Portal.",
  },
  {
    title: "AI analysis",
    Icon: FiActivity,
    description:
      "Developed an AI analyzer for new products and disputes.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="portfolio-section"
    >
      <header className="section-heading section-heading--illustrated">
        <div>
          <p className="section-eyebrow">Experience</p>
          <h2 id="experience-heading" className="section-title">Work experience</h2>
        </div>
        <FocusOrbit />
      </header>
      <article className="surface-panel experience-card">
        <header className="experience-header">
          <div>
            <h3 className="experience-company">Visa</h3>
            <p className="experience-role">Full-stack Software Developer</p>
          </div>
          <p className="experience-period">
            <time dateTime="2022-05">May 2022</time>
            {" – "}
            <time dateTime="2026-10">October 2026</time>
          </p>
        </header>
        <div className="experience-overview">
          <h4>About Visa Direct</h4>
          <p>
            Visa Direct is Visa’s global money movement platform, enabling
            businesses and financial institutions to send funds to eligible
            cards, bank accounts, and digital wallets. It supports domestic and
            cross-border payment flows, including person-to-person transfers,
            business payouts, and transfers between accounts.
          </p>
        </div>
        <h4 className="contributions-heading">My contributions</h4>
        <ul className="contribution-grid">
          {CONTRIBUTIONS.map(({ title, description, Icon }) => (
            <li key={title} className="contribution-item">
              <span className="contribution-icon" aria-hidden="true"><Icon /></span>
              <h4>{title}</h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <div className="experience-links">
          <a
            href="https://www.visa.com/en-us/products/visa-direct"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            About Visa Direct <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://developer.visa.com/capabilities/visa-direct-account-and-wallet"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Account and wallet capabilities <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  );
}

export default Experience;
