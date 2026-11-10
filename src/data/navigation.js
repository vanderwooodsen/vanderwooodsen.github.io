import {
  FaBehanceSquare,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";

export const NAVIGATION_LINKS = [
  { href: "#animation", label: "Home", mobileLabel: "Home Page", Icon: FaHome, iconOnly: true },
  { href: "#about_me", label: "About me", mobileLabel: "About Me", Icon: FaUser },
  { href: "#experience", label: "Experience", mobileLabel: "Work Experience", Icon: IoBriefcase },
  { href: "#skills-section", label: "Skills", mobileLabel: "Technical Skills", Icon: GiSkills },
  { href: "#contactMe", label: "Contact Me", Icon: FaEnvelope },
];

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christidev/",
    Icon: FaLinkedin,
    hoverClass: "hover:text-blue-500",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/vanderwooodsen",
    Icon: FaGithub,
    hoverClass: "hover:text-gray-500",
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://www.behance.net/christine_tsiupa",
    Icon: FaBehanceSquare,
    hoverClass: "hover:text-yellow-500",
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/christicodes",
    Icon: FaTwitter,
    hoverClass: "hover:text-blue-400",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/christis_creations_/",
    Icon: FaInstagramSquare,
    hoverClass: "hover:text-pink-500",
  },
];

export const CONTACT_LINKS = SOCIAL_LINKS.filter(
  ({ id }) => id === "linkedin" || id === "github"
);
