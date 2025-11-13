import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "../components/Footer";

// --- Framer Motion Variants for Staggered Animations ---

// Container variant for the whole section (triggers children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of elements
      delayChildren: 0.3,
    },
  },
};

// Item variant for individual text blocks, contact items, and form fields
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Custom Components for Reusability ---

const ContactDetail = ({ icon: Icon, label, value }) => (
  <motion.div 
    variants={itemVariants} 
    // Updated accent color to the requested #ED1B24 (Crimson Red)
    className="flex items-start gap-4 p-4 rounded-xl border border-[#ED1B24]/20 backdrop-blur-sm transition duration-300 hover:bg-white/5 hover:border-[#ED1B24]/50"
  >
    {/* Updated icon color */}
    <Icon className="text-[#ED1B24] min-w-[24px] min-h-[24px]" />
    <div>
      <p className="text-sm font-semibold text-gray-400">{label}</p>
      <p className="text-base text-white">{value}</p>
    </div>
  </motion.div>
);

const FormInput = ({ label, type = "text", placeholder, isTextArea = false }) => (
  <motion.div variants={itemVariants} className="w-full">
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    {isTextArea ? (
      <textarea
        rows="4"
        className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ED1B24] transition duration-300 resize-none"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        // Updated focus border color
        className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ED1B24] transition duration-300"
        placeholder={placeholder}
      />
    )}
  </motion.div>
);

// --- Main Component ---

export default function ContactUs() {
  const [isSending, setIsSending] = useState(false);

  // 💡 FIX: Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once on mount

  // Mock form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      // In a real app, you would handle API submission here
      console.log("Form submitted successfully!");
    }, 2000);
  };
  
  // Coordinates for the mock location (Surat, Gujarat, India)
  const mapCenter = "21.1702,72.8311";
  const mapZoom = "13";
  
  // Using Google Maps Embed API pattern for an interactive map iframe.
  const mapUrl = `https://maps.google.com/maps?q=${mapCenter}&z=${mapZoom}&output=embed`;

  return (<>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 sm:p-10 font-inter relative overflow-hidden">
      
      {/* Background radial gradient for visual depth - Updated color to #ED1B24 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ED1B24] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <motion.div
        className="max-w-7xl w-full grid lg:grid-cols-3 gap-12 z-10 p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* === LEFT INFO SECTION (1/3 width on desktop) === */}
        <motion.div className="lg:col-span-1 space-y-10">
          <motion.div variants={itemVariants}>
            {/* Updated text color */}
            <p className="text-xl text-[#ED1B24] font-medium mb-3">CONTACT US</p>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Let’s Build Something <span className="text-[#ED1B24]">Great</span> Together
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Whether you have a project in mind, a question, or just want to explore how **Blitz Innovation** can transform your business digitally — we’re here to help. Reach out and start your innovation journey today.
          </motion.p>

          {/* Contact Details Grid (Staggered Animation) */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            <ContactDetail 
              icon={Mail} 
              label="Email Address" 
              value="blitzinnovation@gmail.com" 
            />
            <ContactDetail 
              icon={Phone} 
              label="Phone Number" 
              value="+91 98765 43210" 
            />
            {/* Re-added MapPin detail */}
            <ContactDetail 
              icon={MapPin} 
              label="Office Location" 
              value="Rajkot, Gujarat, India" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
             <h2 className="text-2xl font-bold mt-8 text-white">View Our Office on Map</h2>
          </motion.div>
        </motion.div>

        {/* === RIGHT FORM SECTION (2/3 width on desktop) === */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6"
          variants={containerVariants}
        >
          <FormInput 
            label="Your Name" 
            placeholder="blitz Innovation" 
          />
          
          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput 
              label="Work Email" 
              type="email" 
              placeholder="you@company.com" 
            />
            <FormInput 
              label="Phone" 
              type="tel" 
              placeholder="+91" 
            />
          </div>
          
          <FormInput 
            label="Project Description" 
            placeholder="Tell us about your innovative idea..." 
            isTextArea={true}
          />

          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: isSending ? 1 : 1.02 }}
            whileTap={{ scale: isSending ? 1 : 0.98 }}
            // Updated button colors: background is bright red, text is white, hover is a darker red
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition duration-300 shadow-lg ${
              isSending
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-[#ED1B24] text-white hover:bg-[#C4141A]'
            }`}
          >
            {isSending ? (
              <>
<div className="flex flex-col items-center space-y-3">
  {/* Dark mode spinner */}
  <svg
    className="animate-spin h-5 w-5 text-[#1B1716]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>

  {/* Rajkot location text */}
  <p className="text-sm font-medium text-[#1B1716]">Rajkot, India</p>
</div>

                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </motion.button>
        </motion.form>
        
        {/* === MAP SECTION (Full width below on mobile, 2/3 on large screens) === */}
        <motion.div 
            className="lg:col-span-3 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
            variants={itemVariants}
        >
          {/* Note: Map is visually in "dark mode" due to the surrounding professional dark theme */}
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Blitz Innovation Office Location"
            className="border-0"
          ></iframe>
        </motion.div>

      </motion.div>
      
      {/* Required style for background animation (animate-blob, animation-delay-4000) */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

    </div>
    <Footer />
    </>
  );
}