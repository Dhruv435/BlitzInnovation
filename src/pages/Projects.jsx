import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Projects() {
  const [expandedSection1, setExpandedSection1] = useState("none");
  const [expandedSection2, setExpandedSection2] = useState("none");

  const toggleSection = (section, side) => {
    if (section === 1) {
      setExpandedSection1((prev) => (prev === side ? "none" : side));
    } else if (section === 2) {
      setExpandedSection2((prev) => (prev === side ? "none" : side));
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* ===== TOP CONTENT SECTION ===== */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black mb-6"
        >
          Our <span className="text-blue-600">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          At <span className="font-semibold text-black">Blitz Innovation</span>,
          we craft digital experiences that combine creativity, functionality,
          and performance. From responsive web platforms to high-performing
          mobile apps, each project reflects our commitment to innovation and
          excellence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl"
        >
          Explore some of our featured works that showcase our passion for
          design, development, and seamless user experience.
        </motion.p>
      </section>

      {/* ===== FIRST PROJECT SECTION ===== */}
      <div className="flex h-screen relative overflow-hidden">
        {/* LEFT PANEL */}
        <motion.div
          animate={{
            width:
              expandedSection1 === "left"
                ? "100%"
                : expandedSection1 === "right"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-black text-white text-center relative overflow-hidden z-10"
        >
          <div className="absolute flex items-center h-full right-0 w-48">
            <div
              onClick={() => toggleSection(1, "left")}
              className="w-full h-48 flex items-center justify-center cursor-pointer transition duration-500 hover:bg-gray-300 bg-white text-black"
            >
              links
            </div>
          </div>
          <div className="flex items-center justify-center p-48 h-full">
            WEB DEVELOPMENT
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          animate={{
            width:
              expandedSection1 === "right"
                ? "100%"
                : expandedSection1 === "left"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-white text-black text-center relative overflow-hidden z-0"
        >
          <div className="absolute flex items-center h-full left-0 w-48">
            <div
              onClick={() => toggleSection(1, "right")}
              className="w-full h-48 flex items-center justify-center cursor-pointer transition duration-500 hover:bg-gray-700 bg-black text-white"
            >
              rechts
            </div>
          </div>
          <div className="flex items-center justify-center p-48 h-full">
            APP DEVELOPMENT
          </div>
        </motion.div>
      </div>

      {/* ===== SECOND PROJECT SECTION ===== */}
      <div className="flex h-screen relative overflow-hidden">
        {/* LEFT PANEL */}
        <motion.div
          animate={{
            width:
              expandedSection2 === "left"
                ? "100%"
                : expandedSection2 === "right"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-black text-white text-center relative overflow-hidden z-10"
        >
          <div className="absolute flex items-center h-full right-0 w-48">
            <div
              onClick={() => toggleSection(2, "left")}
              className="w-full h-48 flex items-center justify-center cursor-pointer transition duration-500 hover:bg-gray-300 bg-white text-black"
            >
              links
            </div>
          </div>
          <div className="flex items-center justify-center p-48 h-full">
            UI / UX DESIGN
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          animate={{
            width:
              expandedSection2 === "right"
                ? "100%"
                : expandedSection2 === "left"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-white text-black text-center relative overflow-hidden z-0"
        >
          <div className="absolute flex items-center h-full left-0 w-48">
            <div
              onClick={() => toggleSection(2, "right")}
              className="w-full h-48 flex items-center justify-center cursor-pointer transition duration-500 hover:bg-gray-700 bg-black text-white"
            >
              rechts
            </div>
          </div>
          <div className="flex items-center justify-center p-48 h-full">
            CUSTOM SOFTWARE DEVELOPMENT
          </div>
        </motion.div>
      </div>
      < Footer />
    </div>
    
  );
  
}
