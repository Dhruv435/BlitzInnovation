import React from "react";
import { motion } from "framer-motion";

export default function Services({ isTransitioning, onNavigate }) {
  return (
    <motion.section
      className="relative w-full min-h-screen bg-[#1B1716] text-white pt-[100px] px-[80px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? 50 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h1 className="text-[64px] font-inter font-bold mb-6">Services</h1>
        <p className="text-[22px] font-inter text-gray-200 max-w-4xl leading-relaxed mb-8">
          Welcome to the Services page. This is where your content will go.
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={() => onNavigate("home")}
            className="px-6 py-3 bg-[#F81A27] text-white font-semibold rounded-lg hover:bg-[#C70008] transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="px-6 py-3 bg-[#F81A27] text-white font-semibold rounded-lg hover:bg-[#C70008] transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("blogs")}
            className="px-6 py-3 bg-[#F81A27] text-white font-semibold rounded-lg hover:bg-[#C70008] transition-all duration-300"
          >
            Blogs
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-3 bg-[#F81A27] text-white font-semibold rounded-lg hover:bg-[#C70008] transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}