import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// Custom Button Component
const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      className="button relative w-[170px] h-12 p-0 border-3 border-white text-white font-poppins text-base overflow-hidden transition-colors duration-300 hover:text-black hover:border-white mt-4"
      whileHover="hover"
      initial="rest"
      onClick={onClick}
    >
      <span className="relative z-20 text-center block leading-10">
        {text}
      </span>
      {/* Background slide-in effect */}
      <motion.div
        className="absolute inset-0 z-10 bg-[#37474f] transition-transform duration-500"
        variants={{
          rest: {
            backgroundColor: '#37474f',
            transform: 'translateX(-100%) translateY(-100%)',
          },
          hover: {
            backgroundColor: 'white',
            transform: 'translateX(0%) translateY(0%)',
          },
        }}
        transition={{ type: "tween", duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
      />
    </motion.button>
  );
};

// Custom Service Card Component incorporating the design
const ServiceCardDesign = ({ title, desc, index, activeCard, setActiveCard }) => {
  const isExpanded = activeCard === index;
  const colors = ["#3953a4", "#6abd45", "#ed2024", "#FF5733", "#33FF57", "#5733FF"]; 
  const color = colors[index % colors.length];

  const toggleExpand = () => {
    setActiveCard(isExpanded ? null : index);
  };

  return (
    <motion.div
      // Use 'layout' for a much smoother, coordinated transition of the container's size
      layout 
      className="relative flex flex-col justify-center items-center w-full mx-auto overflow-hidden bg-black text-white transition-all duration-1000 ease-in-out"
      // Adjusted height for better mobile viewing: 400px default, 650px expanded (to accommodate stacked content)
      animate={{ height: isExpanded ? 650 : 400 }} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* --- Geometric/Shape Background Area (Smoother Animation) --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
            className="absolute w-[600px] h-[600px] opacity-10 blur-xl"
            animate={{ 
                scale: isExpanded ? 0.8 : 1.2, 
                rotate: isExpanded ? 30 : 0,
                backgroundColor: isExpanded ? color : "#212121" // Added color change
            }}
            // Use spring transition for a smoother, bouncier feel
            transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1 }} 
            style={{ 
                backgroundColor: color, 
                borderRadius: '50% 30% 70% 40% / 60% 40% 60% 40%' 
            }}
        />
      </div>

      {/* --- Content Area (Added Mobile Padding) --- */}
      <motion.div 
        layout="position" // Ensure content moves smoothly within the resizing container
        className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-8" // Added responsive padding
        // Reduced vertical shift on expansion
        animate={{ y: isExpanded ? -20 : 0 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Title and Description */}
        <div className="md:w-1/2 text-left mb-6 md:mb-0">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-poppins">
            {title}
          </motion.h1>
          
          <AnimatePresence mode="wait">
            {isExpanded ? (
              // Expanded detailed content
              <motion.p
                key="detail-desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-md sm:text-lg max-w-lg font-light leading-relaxed font-poppins pt-4"
              >
                **Detailed Information for {title}:** {desc} This service includes extensive consultation, deployment, and post-launch support tailored to modern business requirements. We guarantee 99.9% uptime and dedicated senior developer allocation.
              </motion.p>
            ) : (
              // Collapsed short description
              <motion.p 
                key="short-desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-400 text-md sm:text-lg max-w-sm font-light leading-relaxed font-poppins"
              >
                {desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        {/* Right side for the button / call-to-action (Fixed Alignment for Mobile) */}
        <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right w-full"> 
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.div
                key="read-more-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedButton 
                  text="Read More >" // Kept original Read More format
                  onClick={toggleExpand} 
                />
              </motion.div>
            )}
            {isExpanded && (
              <motion.div
                key="close-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedButton 
                  text="< Close" // Changed Close button text
                  onClick={toggleExpand} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- Main Services Component ---

export default function Services() {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Streamline processes, reduce manual effort, and boost productivity with our custom workflow automation tools.",
    },
    {
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to match your business goals and enhance efficiency effortlessly.",
    },
    {
      title: "Web Application Development",
      desc: "Responsive, scalable, and secure web applications crafted with modern technologies for exceptional performance.",
    },
    {
      title: "UI/UX Designing",
      desc: "Engaging and intuitive digital experiences that blend creativity with functionality for seamless interaction.",
    },
    {
      title: "Hire Dedicated Developers",
      desc: "Access highly skilled developers who integrate seamlessly with your team to meet your project goals.",
    },
    {
      title: "IT Consultancy",
      desc: "Expert technology guidance to optimize your architecture and unlock new opportunities for digital transformation.",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-poppins overflow-hidden">
      
      <header className="w-full pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[48px] font-bold text-white font-inter"
        >
          Our Core Services
        </motion.h1>
      </header>
      
      <main className="flex-grow">
        <div className="flex flex-col gap-0">
          {services.map((service, index) => (
            <ServiceCardDesign
              key={index}
              title={service.title}
              desc={service.desc}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}