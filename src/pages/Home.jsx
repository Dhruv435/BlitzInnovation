import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Blitzbg from "../assets/Blitzbg.svg";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

export default function Home({ isTransitioning }) {
  const heroData = [
    {
      id: 1,
      title: "Design the Future.\nBuild with Blitz.",
      desc: "We craft elegant digital experiences that merge technology, creativity, and precision — bringing ideas to life with clean design and powerful performance.",
      image: hero1,
    },
    {
      id: 2,
      title: "Empowering Vision.\nCode Beyond Limits.",
      desc: "From ideas to execution, we shape brands and build seamless digital products with pixel-perfect precision.",
      image: hero2,
    },
    {
      id: 3,
      title: "Innovate. Create. Inspire.",
      desc: "Experience innovation with purpose – every design and line of code reflects the art of simplicity and sophistication.",
      image: hero3,
    },
    {
      id: 4,
      title: "Elevate Your Digital Presence.",
      desc: "Transform your business with digital craftsmanship that blends technology, art, and emotion effortlessly.",
      image: hero4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Complete initial animation after 1.5 seconds
    const initialTimeout = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  const currentHero = heroData[current];

  return (
    <section
      className="relative w-full h-screen bg-[#1B1716] text-white overflow-hidden mt-[50px]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Blitz Background with initial animation */}
      <motion.img
        src={Blitzbg}
        alt="Blitz Background"
        className="absolute left-1/2 transform -translate-x-1/2 z-[1] object-contain w-auto h-auto min-w-[100vw] min-h-[100vh]"
        style={{
          top: "0px",
          maxWidth: "1440px",
          maxHeight: "790px",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isTransitioning ? 100 : 0,
          opacity: isTransitioning ? 0 : 1,
        }}
        transition={{ 
          duration: isInitialLoad ? 1.2 : 0.8, 
          ease: "easeInOut" 
        }}
      />

      {/* Hero Image - only shows after initial load */}
      <AnimatePresence mode="wait">
        {!isInitialLoad && (
          <motion.img
            key={currentHero.id}
            src={currentHero.image}
            alt="Hero"
            initial={{ opacity: 0, x: 200 }}
            animate={{ 
              opacity: isTransitioning ? 0 : 1, 
              x: isTransitioning ? -200 : 0 
            }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute right-[-8%] top-0 h-full w-auto object-contain z-0"
          />
        )}
      </AnimatePresence>

      {/* Text Content - only shows after initial load */}
      {!isInitialLoad && (
        <div className="relative z-10 h-full flex flex-col justify-center pl-[80px] max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentHero.id}`}
              initial={{ opacity: 0, x: 150 }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1, 
                x: isTransitioning ? -150 : 0 
              }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 1.2 }}
              className="text-[64px] font-inter font-bold leading-tight whitespace-pre-line"
            >
              {currentHero.title}
            </motion.h1>

            <motion.p
              key={`desc-${currentHero.id}`}
              initial={{ opacity: 0, x: 150 }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1, 
                x: isTransitioning ? -150 : 0 
              }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-6 text-[22px] font-inter font-normal leading-relaxed text-gray-200 max-w-xl"
            >
              {currentHero.desc}
            </motion.p>

            {/* Liquid Glass Learn More Button */}
            <motion.button
              key={`btn-${currentHero.id}`}
              className="mt-10 px-6 py-2.5 text-lg font-semibold text-white backdrop-blur-[10px] transition-all duration-500 w-fit"
              style={{
                borderRadius: "23px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: `
                  inset -3px 3px 10px rgba(255,255,255,0.4),
                  0 -2px 10px rgba(255,255,255,0.4),
                  0 6px 20px rgba(0,0,0,0.35)
                `,
                backdropFilter: "blur(12px)",
              }}
              animate={{
                opacity: isTransitioning ? 0 : 1,
              }}
              whileHover={{
                scale: 1.05,
                background: "rgba(255, 255, 255, 0.12)",
                boxShadow: `
                  inset -3px 3px 12px rgba(255,255,255,0.5),
                  0 -2px 12px rgba(255,255,255,0.5),
                  0 8px 25px rgba(0,0,0,0.35)
                `,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Learn More clicked!")}
            >
              Learn More
            </motion.button>
          </AnimatePresence>
        </div>
      )}

      {/* Bottom-right navigation - only shows after initial load */}
      {!isInitialLoad && (
        <motion.div 
          className="absolute right-16 flex items-center gap-4 z-10" 
          style={{ bottom: "85px" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isTransitioning ? 0 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-[Impact] text-[54px] text-white leading-none tracking-wider">
            0{currentHero.id}
          </span>
          <span className="text-gray-400 text-[32px]">|</span>
          <div className="flex flex-col gap-3">
            {heroData.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-[#F81A27]" : "bg-gray-500"
                }`}
                animate={{
                  scale: index === current ? 1.3 : 1,
                  opacity: index === current ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}