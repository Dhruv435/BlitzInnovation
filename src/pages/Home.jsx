import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Blitzbg from "../assets/blitzbg.svg";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

export default function Home({ isTransitioning, currentSlide, onSlideChange, onNavigate }) {
  const navigate = useNavigate();
  
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
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 7000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const initialTimeout = setTimeout(() => setIsInitialLoad(false), 1500);
    resetInterval();

    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (currentSlide !== undefined && currentSlide !== current) {
      setDirection(currentSlide > current ? 1 : -1);
      setCurrent(currentSlide);
      resetInterval();
    }
  }, [currentSlide]);

  useEffect(() => {
    if (onSlideChange && !isInitialLoad) onSlideChange(current);
  }, [current]);

  const currentHero = heroData[current];

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 300], [0, 50]);
  const yContent = useTransform(scrollY, [0, 300], [0, 30]);
  const yButton = useTransform(scrollY, [0, 300], [0, 20]);

  const fadeVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1 } },
  };

  // Learn More triggers page transition animation
  const handleLearnMore = () => {
    if (onNavigate) {
      onNavigate("/about");
    } else {
      navigate("/about");
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-[#1B1716] text-white overflow-hidden mt-[50px]"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh" }}
    >
      {/* Background */}
      <motion.img
        src={Blitzbg}
        alt="Blitz Background"
        className="absolute left-1/2 transform -translate-x-[85%] sm:-translate-x-1/2 z-[10] object-contain w-[1440px] h-[790px] max-w-none"
        style={{ top: "0px" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isTransitioning ? 100 : 0, opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: isInitialLoad ? 1.2 : 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      {/* Hero Image */}
      <AnimatePresence mode="wait" custom={direction}>
        {!isInitialLoad && (
          <motion.img
            key={`hero-img-${currentHero.id}`}
            src={currentHero.image}
            alt="Hero"
            custom={direction}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ y: yHero }}
            className="absolute top-0 right-[-2%] z-0 object-contain sm:w-auto sm:h-auto w-[1200px] h-[790px] max-w-[1440px] max-h-[790px]"
          />
        )}
      </AnimatePresence>

      {/* Content */}
      {!isInitialLoad && (
        <div className="relative z-10 h-full flex flex-col justify-center pl-[20px] sm:pl-[80px] -ml-2 max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`content-${currentHero.id}`}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ y: yContent }}
            >
              <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-inter font-bold leading-tight whitespace-pre-line">
                {currentHero.title}
              </h1>
              <p className="mt-6 text-[18px] sm:text-[20px] md:text-[22px] font-inter text-gray-200 leading-relaxed max-w-xl">
                {currentHero.desc}
              </p>

              <motion.button
                style={{
                  y: yButton,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: `
                    inset -3px 3px 10px rgba(255,255,255,0.4),
                    0 -2px 10px rgba(255,255,255,0.4),
                    0 6px 20px rgba(0,0,0,0.35)
                  `,
                }}
                className="mt-10 px-4 py-2 text-base sm:px-6 sm:py-2.5 sm:text-lg font-semibold text-white transition-all duration-500 w-fit rounded-[23px]"
                animate={{ opacity: 1, y: 0 }}
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
                onClick={handleLearnMore}
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Bottom-right slide indicator */}
      {!isInitialLoad && (
        <motion.div
          className="absolute right-4 sm:right-16 flex items-center gap-3 sm:gap-4 z-10 bottom-[120px] sm:bottom-[85px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            key={`number-${currentHero.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[Impact] text-[36px] sm:text-[54px] text-white leading-none tracking-wider"
          >
            0{currentHero.id}
          </motion.span>
          <span className="text-gray-400 text-[20px] sm:text-[32px]">|</span>
          <div className="flex flex-col gap-2 sm:gap-3">
            {heroData.map((_, index) => (
              <motion.div
                key={index}
                className={`rounded-full cursor-pointer ${
                  index === current ? "bg-[#F81A27]" : "bg-gray-500"
                } w-[8px] h-[8px] sm:w-3 sm:h-3`}
                animate={{
                  scale: index === current ? 1.3 : 1,
                  opacity: index === current ? 1 : 0.6,
                }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => {
                  if (index !== current) {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                    resetInterval();
                  }
                }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
