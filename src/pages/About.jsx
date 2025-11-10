import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Code2,
  Globe,
  Palette,
  Users,
  Lightbulb,
  Rocket,
  Target,
  Brain,
  Zap,
  Shield,
  Layers, 
  Gem, 
} from "lucide-react";

// --- 1. DATA & CONSTANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EXPERTISE_DATA = [
  // ... (Expertise Data remains unchanged)
  {
    title: "Workflow Automation",
    text: "Streamline your business operations and eliminate repetitive manual tasks. Our custom workflow automation solutions reduce errors, boost productivity, and help your team focus on what truly matters—growth and innovation.",
    icon: Wrench,
  },
  {
    title: "Custom Software Development",
    text: "Every business is unique—and your software should be too. We design and develop tailor-made software solutions that align perfectly with your company's goals, processes, and challenges. From concept to deployment, we ensure quality and scalability at every stage.",
    icon: Code2,
  },
  {
    title: "Web Application Development",
    text: "Our team builds responsive, secure, and scalable web applications using cutting-edge technologies. Whether it's a SaaS platform, e-commerce system, or business management app, we ensure your product delivers performance and precision.",
    icon: Globe,
  },
  {
    title: "UI/UX Designing",
    text: "We blend creativity and usability to design intuitive digital experiences that connect with users. Our UI/UX design approach focuses on clarity, accessibility, and engagement—helping your brand stand out with every interaction.",
    icon: Palette,
  },
  {
    title: "Hire Dedicated Developers",
    text: "Scale your development capacity with dedicated experts who work as part of your team. Whether you need full-time or part-time developers, we ensure you get professionals skilled in the latest frameworks and technologies.",
    icon: Users,
  },
  {
    title: "IT Consultancy",
    text: "Leverage our IT consulting services to modernize your technology stack, improve system performance, and enhance architecture. Our experts guide you toward future-ready, efficient, and secure digital solutions.",
    icon: Lightbulb,
  },
];

// TECHNOLOGIES_DATA: No change needed here, changes are in the component
const TECHNOLOGIES_DATA = [
  {
    category: "Frontend",
    icon: "💻",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    color: "bg-[#221E1D]",
  },
  {
    category: "Backend",
    icon: "⚙️",
    techs: ["Node.js", "Python", "Django", "Express.js", "FastAPI", "GraphQL"],
    color: "bg-[#221E1D]",
  },
  {
    category: "Mobile",
    icon: "📱",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    color: "bg-[#221E1D]",
  },
  {
    category: "Data & Cloud",
    icon: "☁️",
    techs: ["MongoDB", "PostgreSQL", "AWS", "Firebase", "Docker", "Redis"],
    color: "bg-[#221E1D]",
  },
  {
    category: "Design",
    icon: "🎨",
    techs: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow"],
    color: "bg-[#221E1D]",
  },
  {
    category: "DevOps",
    icon: "🛠️",
    techs: ["Git", "GitHub", "Jenkins", "Kubernetes", "Terraform"],
    color: "bg-[#221E1D]",
  }
];

const VALUES_DATA = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We embrace new technologies to keep your business ahead and leverage cutting-edge tools for future-proof solutions.",
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "Every solution is meticulously designed around your unique needs, goals, and operational challenges for maximum impact.",
  },
  {
    icon: Brain,
    title: "Experienced Team",
    description: "Our skilled professionals offer deep technical expertise across multiple stacks, ensuring reliable and robust development.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Our Agile methodology and streamlined processes ensure timely, high-quality results and rapid iteration cycles.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "We prioritize data protection and system integrity, building secure, reliable, and highly available digital solutions.",
  }
];


// --- 2. UTILITY COMPONENTS (Header, CTA, Accordion Item) ---

const SectionHeader = ({ title, subtitle, color = '#F81A27' }) => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
    >
        <h2 className="text-4xl font-semibold text-white mb-4">
            {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent mx-auto mb-6" 
             style={{ 
                 backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)` 
             }}
        ></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
        </p>
    </motion.div>
);

const HeroSection = ({ isTransitioning }) => (
    <motion.div
        className="relative px-[80px] pt-[140px] pb-24"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9, delay: 0.4 }}
    >
        {/* Background Text (kept as is) */}
        <motion.h1
            className="absolute right-[60px] top-[100px] text-[200px] font-extrabold text-white opacity-5 select-none leading-none pointer-events-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isTransitioning ? 0 : 0.05, y: isTransitioning ? 50 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
        >
            About
        </motion.h1>

        {/* Content Grid (kept as is) */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="inline-block px-4 py-1 bg-[#F81A27]/10 border border-[#F81A27]/30 rounded-full mb-6">
                    <span className="text-[#F81A27] text-sm font-medium">Who We Are</span>
                </div>
                
                <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                    About <span className="text-[#F81A27]">Blitz</span> Innovation
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#F81A27] to-transparent mb-8"></div>
                
                <h2 className="text-2xl text-gray-200 font-light mb-6 leading-relaxed">
                    Empowering Businesses Through Intelligent Software Solutions
                </h2>
            </motion.div>

            {/* Right Column */}
            <motion.div
                className="space-y-6"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <p className="text-lg text-gray-300 leading-relaxed">
                    At Blitz Innovation, we believe technology should <span className="text-white font-semibold">simplify, not complicate</span>. As a forward-thinking software company, we craft intelligent digital solutions that help businesses automate workflows, scale efficiently, and create meaningful digital experiences.
                </p>
                
                <div className="border-l-4 border-[#F81A27] pl-6 py-2">
                    <p className="text-lg text-gray-200 italic leading-relaxed">
                        Our mission is to turn your ideas into impactful, reliable, and performance-driven software—designed for the future.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                    <motion.div 
                        className="bg-[#221E1D] border border-[#2E2A29] rounded-lg p-6 hover:border-[#F81A27]/40 transition-all"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-4xl font-bold text-[#F81A27] mb-2">50+</div>
                        <div className="text-sm text-gray-400">Projects Delivered</div>
                    </motion.div>
                    <motion.div 
                        className="bg-[#221E1D] border border-[#2E2A29] rounded-lg p-6 hover:border-[#F81A27]/40 transition-all"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-4xl font-bold text-[#F81A27] mb-2">98%</div>
                        <div className="text-sm text-gray-400">Client Satisfaction</div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </motion.div>
);

const ExpertiseItem = ({ item, index, activeIndex, handleToggle }) => {
  const Icon = item.icon;
  const isOpen = activeIndex === index;
  const isBeforeOpen = activeIndex !== null && index < activeIndex;
  const isAfterOpen = activeIndex !== null && index > activeIndex;
  const isDimmed = activeIndex !== null && index !== activeIndex;

  return (
    <motion.div
      className={`
        bg-[#0a0a0a] border border-[#333] relative overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${index === 0 ? 'rounded-t-2xl' : ''}
        ${index === EXPERTISE_DATA.length - 1 ? 'rounded-b-2xl' : ''}
        ${index !== 0 ? '-mt-[1px]' : ''}
        ${isOpen ? 'bg-[#131313] rounded-2xl z-10 my-0' : ''}
        ${isBeforeOpen ? '-translate-y-6' : ''}
        ${isAfterOpen ? 'translate-y-6' : ''}
        ${isDimmed ? 'opacity-50' : 'opacity-100'}
        ${isBeforeOpen && index === EXPERTISE_DATA.length - 1 ? 'rounded-b-2xl' : ''}
        ${isAfterOpen && index === 0 ? 'rounded-t-2xl' : ''}
      `}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={() => handleToggle(index)}
        className="w-full flex items-center gap-4 p-4 cursor-pointer select-none relative group"
      >
        <div className="absolute inset-0 bg-[#111] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-inherit" />
        <Icon className="w-5 h-5 flex-shrink-0 opacity-70 relative z-10" />
        <span className="flex-1 text-left text-base relative z-10">
          {item.title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-5 h-5 flex-shrink-0 relative z-10"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" />
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 10,
          }}
          transition={{
            opacity: { duration: 0.4, delay: isOpen ? 0.1 : 0 },
            y: { duration: 0.4, delay: isOpen ? 0.1 : 0, ease: [0.34, 1.56, 0.64, 1] }
          }}
          className="px-4 pb-4 text-[#999] leading-relaxed"
        >
          {item.text}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


// --- 3. NEW CONCEPT COMPONENTS ---

/**
 * TechnologyStackGrid: **Removed all special animation (rotateX, spring) - uses only fadeUp.**
 */
const TechnologyStackGrid = () => (
    <div className="max-w-7xl mx-auto">
        <SectionHeader 
            title="Technologies We Master" 
            subtitle="Cutting-edge tools and frameworks that power innovative solutions" 
        />

        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 perspective-1000"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {TECHNOLOGIES_DATA.map((category, catIndex) => (
                <motion.div
                    key={catIndex}
                    className={`
                        relative p-6 rounded-2xl border border-white/10
                        shadow-2xl overflow-hidden
                        ${category.color}
                        transition-all duration-300
                    `}
                    // MODIFIED: Using only standard fadeUp for simple fade-in effect
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp} // Apply fadeUp here
                    transition={{ 
                        duration: 0.5, 
                        delay: catIndex * 0.1,
                        ease: "easeOut"
                    }}
                >
                    <div className="absolute inset-0 bg-white/5 opacity-50 blur-xl pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                            {category.category} Stack
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.techs.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);


/**
 * CoreValuesFeature: **Ensured fadeUp and smooth transitions on all elements.**
 */
const CoreValuesFeature = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    // Filter the primary, currently displayed value
    const primaryValue = VALUES_DATA[hoveredIndex];

    return (
        <div className="max-w-6xl mx-auto">
            <SectionHeader 
                title="Why Businesses Trust Blitz Innovation" 
                subtitle="We combine technical excellence with business understanding to deliver solutions that drive real results" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Interactive Value Selectors - Kept fadeUp */}
                <motion.div 
                    className="lg:col-span-1 space-y-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {VALUES_DATA.map((value, index) => {
                        const Icon = value.icon;
                        const isSelected = index === hoveredIndex;

                        return (
                            <motion.div
                                key={index}
                                className={`
                                    flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 
                                    ${isSelected 
                                        ? 'bg-[#131313] border-l-4 border-[#F81A27] text-white' 
                                        : 'bg-[#0a0a0a] border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-[#131313]'
                                    }
                                `}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onTap={() => setHoveredIndex(index)}
                                // Removed individual item fadeUp to avoid fragmentation and let the parent handle the initial animation
                            >
                                <Icon className={`w-6 h-6 flex-shrink-0 transition-colors ${isSelected ? 'text-[#F81A27]' : 'text-gray-500'}`} />
                                <span className="font-semibold text-lg">{value.title}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Right: Featured Value Display - Changed to fadeUp */}
                <motion.div 
                    key={hoveredIndex} // Key change forces re-render/re-animation
                    className="lg:col-span-2 relative bg-[#131313] border border-[#2E2A29] rounded-2xl p-10 overflow-hidden"
                    // MODIFIED: Use fadeUp variants
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-10" />
                    
                    <div className="relative z-10">
                        <primaryValue.icon className="w-12 h-12 text-[#F81A27] mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">
                            {primaryValue.title}
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {primaryValue.description}
                        </p>
                    </div>

                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-[#F81A27]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ originX: 0 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};


const CallToActionSection = () => (
    <section className="px-[80px] py-24">
        <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#221E1D] to-[#1B1716] border border-[#2E2A29] rounded-2xl p-12 relative overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F81A27]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Let's Build the Future Together
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#F81A27] to-transparent mx-auto mb-8"></div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                    Ready to innovate? Whether you're a startup or an enterprise, Blitz Innovation is here to bring your ideas to life through technology that performs, scales, and inspires.
                </p>
                
                <motion.button
                    className="px-10 py-4 bg-[#F81A27] hover:bg-[#C70008] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#F81A27]/20"
                    onClick={() => (window.location.href = '/contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in Touch →
                </motion.button>
            </div>
        </motion.div>
    </section>
);

// --- 4. MAIN COMPONENT (Cleaner Structure) ---
export default function About({ isTransitioning }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      className="relative w-full min-h-screen bg-[#1B1716] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ===== 1. HERO SECTION (Kept as is) ===== */}
      <HeroSection isTransitioning={isTransitioning} />

      {/* --- */}
      
      {/* ===== 2. CORE EXPERTISE (WHAT WE DO) - Increased Width (Kept Logic) ===== */}
      <section className="px-[0px] pb-24"> {/* Increased width here (from 80px to 120px padding) */}
        <SectionHeader 
            title="What We Do" 
            subtitle="Innovating Every Step of Your Digital Journey" 
        />

        <div className="max-w-3xl mx-auto relative"> {/* Increased max-width here (from 2xl to 3xl) */}
          {EXPERTISE_DATA.map((item, index) => (
            <ExpertiseItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </section>

      {/* --- */}

      {/* ===== 3. TECHNOLOGIES - SIMPLE FADE-UP ANIMATION ONLY ===== */}
      <section className="px-[80px] py-24 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30">
        <TechnologyStackGrid />
      </section>

      {/* --- */}
      
      {/* ===== 4. WHY CHOOSE US - SIMPLE FADE-UP ANIMATION ONLY ===== */}
      <section className="px-[80px] py-24">
        <CoreValuesFeature />
      </section>

      {/* --- */}

      {/* ===== 5. CTA SECTION (Kept as is) ===== */}
      <CallToActionSection />
    </motion.section>
  );
}