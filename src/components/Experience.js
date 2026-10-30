import React from "react";

const CONTRIBUTIONS = [
  {
    title: "Visa Direct Portal",
    description:
      "Contributed to the development of an enterprise web portal within Visa’s money movement business.",
  },
  {
    title: "AI agent",
    description:
      "Built and integrated an AI agent into the Visa Direct Portal.",
  },
  {
    title: "AI analysis",
    description:
      "Developed an AI analyzer for new products and disputes.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="container px-4 py-8 lg:py-12 text-gray-50"
    >
      <h2
        id="experience-heading"
        className="skills text-2xl md:text-3xl text-center font-semibold mb-6"
      >
        Work experience
      </h2>
      <article className="timelineTXT rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-2xl font-semibold">Visa</h3>
            <p className="text-lg text-[#48BBDE]">Full-stack Software Developer</p>
          </div>
          <p className="text-[#48BBDE]">
            <time dateTime="2022-05">May 2022</time>
            {" – "}
            <time dateTime="2026-10">October 2026</time>
          </p>
        </div>
        <div className="mb-8 text-gray-200 leading-relaxed">
          <h4 className="text-lg text-gray-50 font-semibold mb-2">About Visa Direct</h4>
          <p>
            Visa Direct is Visa’s global money movement platform, enabling
            businesses and financial institutions to send funds to eligible
            cards, bank accounts, and digital wallets. It supports domestic and
            cross-border payment flows, including person-to-person transfers,
            business payouts, and transfers between accounts.
          </p>

        </div>
        <h4 className="text-lg text-[#48BBDE] font-semibold mb-4">My contributions:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTRIBUTIONS.map(({ title, description }) => (
            <li key={title}>
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-gray-200 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://www.visa.com/en-us/products/visa-direct"
          target="_blank"
          rel="noreferrer"
          className="githubBtn inline-block mt-6 underline"
        >
          About Visa Direct
        </a>
        {" · "}
        <a
          href="https://developer.visa.com/capabilities/visa-direct-account-and-wallet"
          target="_blank"
          rel="noreferrer"
          className="githubBtn inline-block mt-6 underline"
        >
          Account and wallet capabilities
        </a>
      </article>
    </section>
  );
}

export default Experience;
