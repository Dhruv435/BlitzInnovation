import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const FormInput = ({ label, type = "text", isTextArea = false }) => (
  <motion.div variants={itemVariants} className="w-full">
    {isTextArea ? (
      <textarea
        rows="4"
        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-500 focus:border-b-white py-3 text-white placeholder-gray-300 focus:outline-none transition duration-300 resize-none"
        placeholder={label}
        aria-label={label}
      />
    ) : (
      <input
        type={type}
        className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-500 focus:border-b-white py-3 text-white placeholder-gray-300 focus:outline-none transition duration-300"
        placeholder={label}
        aria-label={label}
      />
    )}
  </motion.div>
);

export default function ContactUs() {
  const [isSending, setIsSending] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapZ, setMapZ] = useState(0);
  const [contentZ, setContentZ] = useState(20);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Smoothly delay z-index change until opacity transitions complete
    if (showMap) {
      setTimeout(() => {
        setMapZ(10);
        setContentZ(0);
      }, 400);
    } else {
      setTimeout(() => {
        setMapZ(0);
        setContentZ(20);
      }, 400);
    }
  }, [showMap]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      console.log("Form submitted successfully!");
    }, 2000);
  };

  const RAJKOT_COORDS = "22.3072,70.8022";
  const MAP_ZOOM = 12;
  const mapUrl = `https://maps.google.com/maps?q=${RAJKOT_COORDS}&hl=en&z=${MAP_ZOOM}&output=embed`;

  const MAIN_BG = "#121212";
  const TEXT_COLOR = "#FFFFFF";

  return (
    <>
      <div
        className="min-h-screen relative flex flex-col items-center justify-start pt-12 pb-24 font-sans overflow-hidden"
        style={{ backgroundColor: MAIN_BG }}
      >
        {/* === MAP BACKGROUND === */}
        <motion.div
          key="map-layer"
          className="absolute inset-0 map-wrapper"
          initial={{ opacity: 0 }}
          animate={{
            opacity: showMap ? 1 : 0.6,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          style={{
            zIndex: mapZ,
            transition: "z-index 0s linear 0.8s",
          }}
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rajkot Office Location"
            allowFullScreen
            style={{
              border: 0,
              minHeight: "100vh",
              pointerEvents: showMap ? "auto" : "none",
            }}
          ></iframe>
        </motion.div>

        {/* === GRADIENT OVERLAY === */}
        <motion.div
          className="absolute inset-0 gradient-overlay pointer-events-none"
          animate={{
            opacity: showMap ? 1 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `linear-gradient(to top, ${MAIN_BG} 0%, rgba(18,18,18,0.7) 40%, ${MAIN_BG} 100%)`,
            zIndex: 2,
          }}
        ></motion.div>

        {/* === MAIN CONTENT === */}
        <motion.div
          className="relative max-w-7xl w-full mx-auto p-4 sm:p-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            opacity: showMap ? 0 : 1,
            zIndex: contentZ,
            pointerEvents: showMap ? "none" : "auto",
            transition:
              "opacity 0.8s ease-in-out, z-index 0s linear 0.8s, pointer-events 0.8s ease-in-out",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between">
            {/* === LEFT CONTACT INFO === */}
            <div className="w-full lg:w-2/3 xl:w-7/12 space-y-10 lg:space-y-14 mb-8 lg:mb-0 text-white">
              <motion.h1
                variants={itemVariants}
                className="text-5xl mt-[50px] md:mt-0 md:text-6xl font-light"
              >
                Contact <span className="text-red-500">us</span>
              </motion.h1>

              {/* Address Section */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
                  ADDRESS
                  </p>
                  <p className="text-sm font-light">Rajkot</p>
                  <p className="text-sm font-light">Rajkot</p>
                  <p className="text-sm font-light">Rajkot, Gujarat, India</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
                  CONTACTS
                  </p>
                  <p className="text-sm font-light">blitzinnovations@gmail.com </p>
                  <p className="text-sm font-light">+91  63532 74199 </p>
                  <p className="text-sm font-light">+91  74588 83333 </p>
                </motion.div>
              </div>

              {/* Follow Us Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6"
              >
                <p className="text-sm uppercase tracking-widest text-white">
                  — follow us
                </p>
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="text-white hover:text-gray-400 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* === RIGHT FORM === */}
            <motion.form
              onSubmit={handleSubmit}
              className="w-full mt-10 lg:mt-[100px] lg:ml-8 lg:w-2/5 xl:w-5/12 space-y-6"
              variants={containerVariants}
              style={{
                color: TEXT_COLOR,
                position: "relative",
                zIndex: showMap ? 0 : 10,
              }}
            >
              <motion.p
                variants={itemVariants}
                className="text-xs uppercase tracking-widest mb-4 text-white"
              >
                FEEDBACK FORM
              </motion.p>

              <FormInput label="Name" type="text" />
              <FormInput label="E-mail" type="email" />
              <FormInput label="Phone" type="tel" />
              <FormInput label="Message" isTextArea />

              <div className="flex justify-end items-center pt-4">
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className={`py-3 px-8 text-sm font-semibold uppercase tracking-widest transition duration-300 ${
                    isSending
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-300"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>

        {/* PAGE LABEL */}
        <div
          className="absolute bottom-4 right-10 text-white text-xs opacity-60 hidden sm:block"
          style={{
            zIndex: contentZ,
          }}
        >
          / 28
          <p className="mt-1">Contact Us</p>
        </div>

        {/* === FIXED FIND/BACK BUTTON === */}
        <motion.button
          onClick={() => setShowMap(!showMap)}
          animate={{
            opacity: [0.8, 1],
            backgroundColor: showMap ? "#3a3a3a" : "#2b2b2b",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          whileHover={{ opacity: 1, backgroundColor: "#4a4a4a" }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-0 left-0 w-[65px] h-[65px] flex items-center justify-center text-white text-sm font-semibold uppercase tracking-widest transition duration-300"
          style={{
            borderRadius: "0px",
            zIndex: 9999,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={showMap ? "back" : "find"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {showMap ? "Back" : "Find"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <style>{`
          .map-wrapper iframe {
            filter: grayscale(100%) invert(90%) brightness(130%) hue-rotate(180deg);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}
