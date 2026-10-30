import React from "react";

export default function FocusOrbit() {
  return (
    <div className="focus-orbit">
      <svg viewBox="0 0 420 250" role="img" aria-labelledby="focus-orbit-title">
        <title id="focus-orbit-title">
          Financial technology, web applications, and AI, connected through full-stack development
        </title>
        <defs>
          <radialGradient id="focus-orbit-glow">
            <stop stopColor="#7b91ed" stopOpacity="0.22" />
            <stop offset="1" stopColor="#7b91ed" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="focus-orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#88cff2" />
            <stop offset="0.55" stopColor="#b0a0f0" />
            <stop offset="1" stopColor="#e69ab9" />
          </linearGradient>
          <pattern id="focus-orbit-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.75" fill="#abc0e5" fillOpacity="0.2" />
          </pattern>
        </defs>
        <rect x="30" y="20" width="360" height="210" fill="url(#focus-orbit-grid)" />
        <circle className="orbit-core-halo" cx="210" cy="125" r="110" fill="url(#focus-orbit-glow)" />
        <g fill="none" stroke="#a2b6df" strokeWidth="1">
          <ellipse cx="210" cy="125" rx="168" ry="82" transform="rotate(-17 210 125)" opacity="0.3" />
          <ellipse cx="210" cy="125" rx="127" ry="91" transform="rotate(32 210 125)" strokeDasharray="3 7" opacity="0.2" />
          <path d="M131 83 179 112M243 112 290 70M242 143 316 187" opacity="0.55" />
        </g>
        <g fill="#b9cdf0">
          <circle cx="53" cy="153" r="2.5" />
          <circle cx="345" cy="91" r="2" />
          <circle cx="146" cy="205" r="2" />
          <circle cx="242" cy="40" r="1.5" />
        </g>
        <circle cx="210" cy="125" r="35" fill="#101e35" stroke="url(#focus-orbit-stroke)" strokeWidth="1.25" />
        <path d="m202 115-10 10 10 10m16-20 10 10-10 10m-6-24-5 28" fill="none" stroke="#d4e3fb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <g className="orbit-label" transform="translate(35 60)">
          <rect width="108" height="37" rx="18.5" />
          <circle cx="18" cy="18.5" r="3" fill="#99c6fa" />
          <text x="30" y="23">Fintech</text>
        </g>
        <g className="orbit-label" transform="translate(277 45)">
          <rect width="92" height="37" rx="18.5" />
          <circle cx="18" cy="18.5" r="3" fill="#b2a0f0" />
          <text x="30" y="23">Web</text>
        </g>
        <g className="orbit-label" transform="translate(300 174)">
          <rect width="76" height="37" rx="18.5" />
          <circle cx="18" cy="18.5" r="3" fill="#e89ab8" />
          <text x="30" y="23">AI</text>
        </g>
      </svg>
    </div>
  );
}
