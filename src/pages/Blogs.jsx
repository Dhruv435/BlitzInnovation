import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FaShareAlt, FaHeart, FaTimes } from "react-icons/fa";

const initialBlogs = [
  {
    title: "Quantum Computing: A Red Shift",
    author: "Jane Doe",
    date: "Oct 15, 2025",
    excerpt: "Quantum entanglement promises a red-hot revolution.",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
    fullContent: "The convergence of quantum physics and computer science is creating a new paradigm for computation...",
  },
  {
    title: "The Scarlet Web: Next Gen Security",
    author: "John Smith",
    date: "Nov 02, 2025",
    excerpt: "Cutting-edge cybersecurity protocols designed for APTs.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800",
    fullContent: "The 'Scarlet Web' refers to hidden layers of network defense required to operate securely...",
  },
];

const use3DTilt = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]);

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

export default function Blogs() {
  const [blogs] = useState(initialBlogs);
  const [openBlog, setOpenBlog] = useState(null);

  return (
    <div className="layout-wrapper red-theme min-h-screen relative bg-[#1a0000]">
      <div className="max-w-7xl mx-auto text-center py-20 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-white drop-shadow-lg">
          Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => {
            const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();
            const isSelected = openBlog && openBlog.title === blog.title;

            return (
              <AnimatePresence key={blog.title}>
                <motion.div
                  ref={ref}
                  className={`blog-card relative rounded-xl overflow-hidden cursor-pointer shadow-2xl ${
                    openBlog && !isSelected ? "opacity-20 scale-90 pointer-events-none" : ""
                  }`}
                  onClick={() => setOpenBlog(blog)}
                  style={{
                    rotateX: isSelected ? 0 : rotateX,
                    rotateY: isSelected ? 0 : rotateY,
                    backgroundImage: `linear-gradient(rgba(77,0,0,0.6), rgba(0,0,0,0.6)), url(${blog.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onMouseMove={isSelected ? undefined : handleMouseMove}
                  onMouseLeave={isSelected ? undefined : handleMouseLeave}
                  layoutId={blog.title}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="p-6 flex flex-col justify-end h-full text-left text-white">
                    <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-sm opacity-80">{blog.excerpt}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {openBlog && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#330000] rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
              layoutId={openBlog.title}
            >
              <button
                onClick={() => setOpenBlog(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
              >
                <FaTimes />
              </button>
              <motion.img
                src={openBlog.img}
                alt={openBlog.title}
                className="w-full h-64 object-cover"
                layoutId={`image-${openBlog.title}`}
              />
              <div className="p-6 text-white">
                <h2 className="text-3xl font-bold mb-4">{openBlog.title}</h2>
                <p className="text-sm opacity-70 mb-4">
                  By {openBlog.author} on {openBlog.date}
                </p>
                <p>{openBlog.fullContent}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
