import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Target,Eye,Award,Users,Briefcase,TrendingUp,CheckCircle,Globe,Lightbulb,Shield,ArrowUp,X,} from "lucide-react";
import Footer from "../components/Footer";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- DATA ---
const TEAM_DATA = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "👨‍💼",
    description: "Visionary leader with 15+ years in tech innovation",
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    image: "👩‍💻",
    description: "Expert in scalable architecture and AI solutions",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "👨‍🎨",
    description: "Award-winning UI/UX designer and creative director",
  },
  {
    name: "Emily Davis",
    role: "Head of Operations",
    image: "👩‍💼",
    description: "Strategic operations expert ensuring excellence",
  },
];

const ACHIEVEMENTS_DATA = [
  { icon: Users, number: "1000+", text: "Satisfied Clients" },
  { icon: Globe, number: "25+", text: "Countries Served" },
  { icon: Award, number: "50+", text: "Industry Awards" },
  { icon: TrendingUp, number: "98%", text: "Client Retention" },
];

const VALUES_DATA = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries with creative solutions",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency and honesty",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve remarkable results",
  },
];

// --- COMPONENTS ---

const HeroSection = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative px-4 sm:px-8 lg:px-20 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Background Text */}
      <motion.h1
        className="absolute right-4 sm:right-10 lg:right-16 top-16 sm:top-20 lg:top-24 text-6xl sm:text-8xl lg:text-[200px] font-extrabold text-white opacity-5 select-none leading-none pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        About
      </motion.h1>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 bg-[#F81A27]/10 border border-[#F81A27]/30 rounded-full mb-6">
            <span className="text-[#F81A27] text-sm font-medium">Who We Are</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            About <span className="text-[#F81A27]">Blitz</span> Innovation
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-[#F81A27] to-transparent mb-8 mx-auto lg:mx-0"></div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
            At Blitz, we believe in the power of <span className="text-white font-semibold">innovation, precision, and excellence</span>. Founded with a vision to redefine industry standards, Blitz combines creativity, technology, and dedication to deliver impactful solutions that drive success.
          </p>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-4xl">
            Our team of passionate professionals works tirelessly to create value for our clients, partners, and community — ensuring every project we undertake reflects our commitment to quality and progress.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {ACHIEVEMENTS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#221E1D] border border-[#2E2A29] rounded-xl p-4 sm:p-6 hover:border-[#F81A27]/40 transition-all text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#F81A27] mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F81A27] mb-2">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{item.text}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const MissionVisionSection = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      id="mission"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Mission */}
        <motion.div
          variants={fadeUp}
          className="bg-[#131313] border border-[#2E2A29] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#F81A27]/5 rounded-full blur-3xl" />
          <Target className="w-12 h-12 sm:w-14 sm:h-14 text-[#F81A27] mb-6 relative z-10" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-[#F81A27] mb-6 relative z-10"></div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
            Our mission is to <span className="text-white font-semibold">empower growth through innovation and reliability</span>. We strive to provide top-quality products and services that enhance experiences, simplify complexities, and inspire trust. By integrating modern technology and customer-centric strategies, Blitz aims to become a trusted name known for delivering excellence in every aspect of our work.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={fadeUp}
          className="bg-[#131313] border border-[#2E2A29] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#F81A27]/5 rounded-full blur-3xl" />
          <Eye className="w-12 h-12 sm:w-14 sm:h-14 text-[#F81A27] mb-6 relative z-10" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
            Our Vision
          </h2>
          <div className="w-16 h-1 bg-[#F81A27] mb-6 relative z-10"></div>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
            Our vision is to be a <span className="text-white font-semibold">global leader in innovation and service excellence</span>, setting new benchmarks in our industry. We envision a future where Blitz becomes synonymous with creativity, sustainability, and customer satisfaction — continuously pushing boundaries to shape a better tomorrow.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ValuesSection = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      id="values"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {VALUES_DATA.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#221E1D] border border-[#2E2A29] rounded-xl p-6 hover:border-[#F81A27]/40 transition-all text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#F81A27] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const AchievementsSection = () => {
  const sectionRef = useRef(null);

  const achievements = [
    "Successfully served 1000+ satisfied clients across various industries",
    "Expanded our presence across 25+ regions, growing into a trusted global brand",
    "Recognized for innovation and excellence through 50+ industry awards",
    "Built long-term partnerships based on trust, transparency, and performance",
    "Developed a strong culture of continuous improvement and professional growth",
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="achievements"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-[#F81A27] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Milestones that define our journey of excellence
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4 bg-[#131313] border border-[#2E2A29] rounded-xl p-4 sm:p-6 hover:border-[#F81A27]/40 transition-all"
            >
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F81A27] flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);

  return ( 
    <motion.section
      ref={sectionRef}
      id="team"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            The visionaries driving Blitz Innovation forward
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-[#221E1D] border border-[#2E2A29] rounded-xl p-6 hover:border-[#F81A27]/40 transition-all text-center group"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-6xl sm:text-7xl mb-4 group-hover:scale-110 transition-transform">
                {member.image}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-[#F81A27] font-medium mb-3 text-sm sm:text-base">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const CTASection = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      id="cta"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#221E1D] to-[#1B1716] border border-[#2E2A29] rounded-2xl p-8 sm:p-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-8"></div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to innovate? Whether you're a startup or an enterprise, Blitz Innovation is here to bring your ideas to life through technology that performs, scales, and inspires.
          </p>

          <motion.button
            className="px-8 sm:px-10 py-3 sm:py-4 bg-[#F81A27] hover:bg-[#C70008] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#F81A27]/20 text-sm sm:text-base"
            onClick={() => (window.location.href = "/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

// Mobile Quick Navigation
const MobileQuickNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { id: "hero", label: "About Us" },
    { id: "mission", label: "Mission & Vision" },
    { id: "values", label: "Core Values" },
    { id: "achievements", label: "Achievements" },
    { id: "team", label: "Our Team" },
    { id: "cta", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:hidden">
      {/* Quick Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-0 left-0 z-50 h-[70px] bg-[#1B1716] text-white font-semibold flex items-center justify-center transition-all"
        style={{
          width: "calc(100vw - 60px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Quick Menu
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-0 right-0 z-50 w-[70px] h-[70px] bg-[#1B1716] text-white flex items-center justify-center border-l border-[#FFFFFF]"
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50  bg-[#1B1716] border-t border-[#2E2A29] rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Quick Navigation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2E2A29] text-white hover:bg-[#F81A27] transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-5 py-4 bg-[#221E1D] border border-[#2E2A29] rounded-xl text-white font-medium hover:border-[#F81A27] hover:bg-[#2E2A29] transition-all"
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Component
export default function About() {
  return ( <>
    <motion.div
      className="relative w-full min-h-screen bg-[#1B1716] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <AchievementsSection />
      <TeamSection />
      <CTASection />
      <MobileQuickNav />
    </motion.div>
    <Footer />
    </>
  );
}