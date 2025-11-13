import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FaShareAlt, FaHeart, FaTimes, FaArrowRight, FaCalendarAlt, FaUser, FaQuoteRight } from "react-icons/fa";
import Footer from "../components/Footer"; // Assuming Footer component exists

// --- Sample Data Enhancement ---
const initialBlogs = [
  {
    title: "Quantum Computing: A Red Shift",
    author: "Jane Doe",
    date: "Oct 15, 2025",
    excerpt: "Quantum entanglement promises a red-hot revolution in computational science, moving us beyond classical limits.",
    tags: ["Quantum", "Tech", "Future"],
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200",
    fullContent: "The convergence of quantum physics and computer science is creating a new paradigm for computation. This shift promises to solve problems currently intractable for even the most powerful supercomputers, primarily in areas like molecular modeling, drug discovery, and advanced AI optimization. The 'Red Shift' in our title refers to the monumental change and the intensity of this new technological era, marked by blazing-fast calculations and complex system simulations. We delve into the foundational principles of qubits, superposition, and entanglement, and analyze the commercial viability of current leading quantum hardware platforms.",
  },
  {
    title: "The Scarlet Web: Next Gen Security",
    author: "John Smith",
    date: "Nov 02, 2025",
    excerpt: "Cutting-edge cybersecurity protocols designed to defend against Advanced Persistent Threats (APTs) in a quantum world.",
    tags: ["Security", "Cyber", "Strategy"],
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200",
    fullContent: "The 'Scarlet Web' refers to hidden, multi-layered network defense architectures required to operate securely against state-sponsored and sophisticated cyber-attacks. With the threat of quantum decryption looming, implementing post-quantum cryptography (PQC) is no longer optional—it's an imperative. This article explores zero-trust models, deceptive technology (honeypots), and the use of AI in threat prediction. The goal is to weave a defense system so complex and adaptive that even an APT will find no stable foothold. We also discuss incident response strategies that minimize dwell time and data exfiltration.",
  },
  {
    title: "Crimson AI: Ethical Boundaries",
    author: "Alex Johnson",
    date: "Sep 28, 2025",
    excerpt: "Examining the moral and ethical 'red lines' that must govern the development of powerful AI systems.",
    tags: ["AI", "Ethics", "Philosophy"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190bebc6?q=80&w=1200",
    fullContent: "As Artificial Intelligence becomes more autonomous and integrated into critical infrastructure, establishing clear 'Crimson' or red-line ethical boundaries is paramount. This blog post critically analyzes algorithmic bias, the problem of accountability in deep learning systems, and the potential for unintended consequences. It advocates for transparent, explainable AI (XAI) models and proposes a framework for international AI governance. We argue that developers must move beyond mere capability and focus intensely on societal impact and human safety.",
  },
];

// --- Custom Hook for 3D Tilt Effect ---
const use3DTilt = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

// --- Main Blogs Component ---
export default function Blogs() {
  const [blogs] = useState(initialBlogs);
  const [openBlog, setOpenBlog] = useState(null);

  // Scroll to top on page load and lock body scroll when modal is open
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (openBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or openBlog changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openBlog]);

  // Variant for hero text animation
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      {/* Main Layout Wrapper: Dark Red Theme */}
      <div className="layout-wrapper min-h-screen relative bg-black">
        {/* Decorative Background Element (Subtle Red Glow) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-900 opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 opacity-15 blur-[100px] animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section: Eye-catching Title and Subtitle */}
        <motion.header 
          className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 text-center text-white bg-black"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Use responsive font sizes for H1 and P */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-4xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
            
          >
            THE SCARLET ARCHIVE 
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-red-400 font-light max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            Insights on Quantum Tech, Next-Gen Security, and AI's Ethical Red Lines.
          </motion.p>
        </motion.header>

        {/* Blog Cards Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-red-700 pb-3 inline-block">
            Latest Dispatches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => {
              const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();
              const isSelected = openBlog && openBlog.title === blog.title;

              return (
                <div key={blog.title}> {/* Wrapping div for key */}
                  <motion.div
                    ref={ref}
                    className={`blog-card group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 ease-out ${
                      openBlog && !isSelected ? "opacity-20 scale-[0.95] pointer-events-none" : "hover:shadow-red-900/50"
                    }`}
                    onClick={() => setOpenBlog(blog)}
                    style={{
                      rotateX: isSelected ? 0 : rotateX,
                      rotateY: isSelected ? 0 : rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    onMouseMove={isSelected ? undefined : handleMouseMove}
                    onMouseLeave={isSelected ? undefined : handleMouseLeave}
                    layoutId={blog.title}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    {/* Background Image with Dark Red Overlay */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${blog.img})`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative p-6 flex flex-col justify-end h-full text-left text-white" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold px-3 py-1 bg-red-700/80 rounded-full hover:bg-red-600 transition duration-300 shadow-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold mb-3 drop-shadow-lg group-hover:text-red-300 transition duration-300">{blog.title}</h2>
                      <p className="text-sm opacity-90 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center text-red-300 font-medium">
                        <FaArrowRight className="mr-2 animate-pulse" />
                        <span className="text-sm uppercase tracking-wider">Read More</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Expanded Modal View - VISIBILITY FIX */}
        <AnimatePresence>
          {openBlog && (
            <motion.div
              // FIX: Modal is centered, full-screen, and allows scrolling the modal content
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                // Ensure max-width and margin for screen fit and scrollability
                className="bg-[#1a0000] border border-red-900 rounded-3xl shadow-2xl max-w-5xl w-full relative my-8 md:my-10 overflow-hidden" 
                layoutId={openBlog.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Close Button - Always visible relative to the modal container */}
                <button
                  onClick={() => setOpenBlog(null)}
                  className="absolute top-4 right-4 z-20 text-white p-3 bg-red-700/80 hover:bg-red-600 rounded-full text-xl transition shadow-xl"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
                
                {/* Image Section with Overlay */}
                <div className="relative">
                    <motion.img
                      src={openBlog.img}
                      alt={openBlog.title}
                      className="w-full h-56 sm:h-80 object-cover" 
                      layoutId={`image-${openBlog.title}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-12 text-white">
                  <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-red-300">{openBlog.title}</h2>
                  
                  {/* Metadata */}
                  <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-6">
                    <div className="flex items-center">
                      <FaUser className="mr-2 text-red-500" />
                      <span className="font-semibold">{openBlog.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-red-500" />
                      <span>{openBlog.date}</span>
                    </div>
                  </div>
                  
                  {/* Tags in Modal */}
                  <div className="flex flex-wrap gap-2 mb-8">
                      {openBlog.tags.map(tag => (
                          <span key={tag} className="text-sm font-medium px-4 py-1 bg-red-600 rounded-full shadow-lg">
                              {tag}
                          </span>
                      ))}
                  </div>

                  {/* Full Content */}
                  <div className="text-base sm:text-lg leading-relaxed space-y-6"> {/* Responsive font size */}
                      <p className="border-l-4 border-red-500 pl-4 italic text-red-200 flex items-start">
                          <FaQuoteRight className="min-w-6 text-red-700 mr-3 mt-1" />
                          <span>{openBlog.excerpt}</span>
                      </p>
                      <p>{openBlog.fullContent}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-10 flex gap-4">
                      <button className="flex items-center px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg text-white font-semibold transition duration-300 shadow-lg">
                          <FaHeart className="mr-2" />
                          Like
                      </button>
                      <button className="flex items-center px-6 py-3 bg-red-800/50 hover:bg-red-800 rounded-lg text-white font-semibold transition duration-300 border border-red-700">
                          <FaShareAlt className="mr-2" />
                          Share
                      </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}