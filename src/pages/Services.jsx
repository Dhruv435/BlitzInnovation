import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Streamline processes, reduce manual effort, and boost productivity with our custom workflow automation tools that help your business run smarter and faster.",
    },
    {
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to match your business goals, enhance efficiency, and overcome operational challenges effortlessly.",
    },
    {
      title: "Web Application Development",
      desc: "Responsive, scalable, and secure web applications crafted with modern technologies to ensure exceptional performance across all devices.",
    },
    {
      title: "UI/UX Designing",
      desc: "Engaging and intuitive digital experiences that blend creativity with functionality, ensuring seamless interaction and a memorable brand presence.",
    },
    {
      title: "Hire Dedicated Developers",
      desc: "Access highly skilled developers who integrate seamlessly with your team—available for full-time or part-time engagement to meet your project goals.",
    },
    {
      title: "IT Consultancy",
      desc: "Expert technology guidance to optimize your architecture, enhance scalability, and unlock new opportunities for digital transformation.",
    },
  ];

  return (
    <div className="bg-[#1B1716] text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[48px] font-bold mb-16 text-white font-inter"
        >
          Our Services
        </motion.h1>

        <div className="flex flex-col gap-14 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative px-6 py-10 md:px-12 md:py-14 rounded-[10rem] overflow-hidden`}
            >
              {/* Bubble border effect */}
              <div
                className={`absolute inset-0 border-[3px] border-dotted border-[#3EA971] rounded-[10rem] ${
                  index % 2 === 0
                    ? "md:border-r-0 md:rounded-l-[16rem]"
                    : "md:border-l-0 md:rounded-r-[16rem]"
                }`}
              ></div>

              <div
                className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[10rem] p-10"
                style={{
                  boxShadow:
                    "inset 0 0 20px rgba(255,255,255,0.05), 0 4px 30px rgba(0,0,0,0.5)",
                }}
              >
                <h2 className="text-[28px] font-semibold text-[#3EA971] mb-4 font-inter text-center md:text-left">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-[18px] leading-relaxed font-inter text-center md:text-left">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
