import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      id="contactMe"
      className="border-solid border-2 rounded-lg font-semibold py-6 px-4 mb-60"
    >
      <a
        id="contact_me_button"
        className="text-white hover:text-gray-200 text-lg font-semibold py-3 px-6 rounded-md shadow"
        href="mailto:contactme@christis.page"
      >
        Contact Me
      </a>
    </motion.div>
  );
}
