import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const totalSlides = 4;
  const navigate = useNavigate();
  const location = useLocation();

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const tileColors = ["#E50922", "#F81A27", "#C70008", "#F81A27", "#E50922"];

  // Custom navigation with page transition
  const handleNavigation = (route) => {
    if (route !== location.pathname) {
      setIsLoading(true);
      
      // Faster animation
      setTimeout(() => {
        navigate(route);
        setTimeout(() => {
          setIsLoading(false);
        }, 200); // hide tiles faster
      }, 400); // show tiles faster
    }
  };

  return (
    <div className="bg-[#1B1716] min-h-screen text-white font-inter relative">
      {/* Page Transition Tiles */}
      <div 
        className={`fixed right-0 z-[35] transition-all ${
          isLoading ? 'w-full delay-0' : 'w-0 delay-[400ms]'
        }`}
        style={{ 
          top: '60px',
          height: 'calc(100vh - 60px)',
          transitionProperty: 'width', 
          transitionDuration: '0s', 
          transitionTimingFunction: 'ease' 
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`absolute right-0 h-[20%] transition-all duration-200 ease-in-out ${
              isLoading ? 'w-full' : 'w-0'
            }`}
            style={{
              top: `${index * 20}%`,
              backgroundColor: tileColors[index],
              transitionDelay: isLoading ? `${index * 0.05}s` : `${(4 - index) * 0.05}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <Header 
        currentSlide={currentSlide} 
        onSlideChange={handleSlideChange} 
        totalSlides={totalSlides}
        onNavigate={handleNavigation} // <-- pass page transition handler
      />

      {/* Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              currentSlide={currentSlide} 
              onSlideChange={handleSlideChange}
              onNavigate={handleNavigation} // <-- pass page transition handler
            />
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
