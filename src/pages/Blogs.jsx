import React from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of Workflow Automation",
      date: "Oct 15, 2025",
      excerpt:
        "Discover how AI-powered automation tools are transforming how businesses operate by reducing manual errors and saving time.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800",
    },
    {
      title: "Building Scalable Web Applications",
      date: "Nov 02, 2025",
      excerpt:
        "Learn the key principles and technologies behind building secure, high-performance web apps that grow with your users.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800",
    },
    {
      title: "Design Thinking in UI/UX",
      date: "Oct 25, 2025",
      excerpt:
        "Understand how design thinking fosters creativity and usability, leading to interfaces that truly connect with users.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1B1716] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Insights & Innovation
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Explore industry insights, latest trends, and expert opinions from the Blitz Innovation team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg"
          >
            <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
              <p className="text-gray-300 mb-4">{blog.excerpt}</p>
              <a
                href="#"
                className="text-[#3EA971] font-semibold hover:underline transition"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
