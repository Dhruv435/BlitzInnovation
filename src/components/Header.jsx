import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Blitzlogo.png";
import {
  Send,
  X,
  Home,
  Info,
  Briefcase,
  FileText,
  FolderOpen,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header({ currentSlide, onSlideChange, totalSlides, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const buttons = [
    { color: "#C70008", label: "Menu" },
    { color: "#EF1C22", icon: <Send size={28} />, label: "Share" },
  ];

  const menuItems = [
    { icon: <Home size={22} color="white" />, label: "Home", page: "/" },
    { icon: <Info size={22} color="white" />, label: "About", page: "/about" },
    { icon: <Briefcase size={22} color="white" />, label: "Services", page: "/services" },
    { icon: <FileText size={22} color="white" />, label: "Blogs", page: "/blogs" },
    { icon: <FolderOpen size={22} color="white" />, label: "Projects", page: "/projects" },
    { icon: <Phone size={22} color="white" />, label: "Contact Us", page: "/contact" },
  ];

  const shareItems = [
    { icon: <FaInstagram size={20} />, label: "Instagram", url: "https://www.instagram.com" },
    { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", url: "https://www.linkedin.com" },
    { icon: <FaFacebookF size={20} />, label: "Facebook", url: "https://www.facebook.com" },
    { icon: <FaTwitter size={20} />, label: "Twitter", url: "https://www.twitter.com" },
    { icon: <FaWhatsapp size={20} />, label: "WhatsApp", url: "https://www.whatsapp.com" },
  ];

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (shareOpen) setShareOpen(false);
  };

  const handleShareClick = () => {
    setShareOpen(!shareOpen);
    if (menuOpen) setMenuOpen(false);
  };

  const handleMenuItemClick = (page) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    } else {
      navigate(page);
    }
  };

  const handleLogoClick = () => {
    if (currentPath !== "/") {
      if (menuOpen) setMenuOpen(false);
      if (shareOpen) setShareOpen(false);
      if (onNavigate) {
        onNavigate("/");
      } else {
        navigate("/");
      }
    }
  };

  const handlePrevSlide = () => {
    if (onSlideChange && totalSlides && !isChanging) {
      setIsChanging(true);
      const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      onSlideChange(newSlide);
      setTimeout(() => setIsChanging(false), 600);
    }
  };

  const handleNextSlide = () => {
    if (onSlideChange && totalSlides && !isChanging) {
      setIsChanging(true);
      const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      onSlideChange(newSlide);
      setTimeout(() => setIsChanging(false), 600);
    }
  };

  const handleExploreClick = () => {
    if (onNavigate) {
      onNavigate("/about");
    } else {
      navigate("/about");
    }
  };

  const handleShareItemClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-[70px] sm:h-[65px] z-40 flex items-center justify-between backdrop-blur-xl bg-[rgba(27,23,22,0.6)] border-b border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(9px)",
        }}
      >
        {/* ✅ Left: Logo */}
        <div className="flex items-center ml-[-13px] sm:ml-[65px]">
          <img
            src={logo}
            alt="Blitz Logo"
            className="h-16 sm:h-[70px] cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={handleLogoClick}
          />
        </div>

        {/* ✅ Right: Menu + Share Buttons */}
        <div className="flex fixed top-0 right-0">
          {buttons.map((btn, i) => (
            <div
              key={i}
              className="group relative w-[70px] h-[70px] sm:w-[65px] sm:h-[65px] flex justify-center items-center transition-all duration-500 cursor-pointer"
              style={{
                backgroundColor: btn.color,
                boxShadow: "0 4px 20px rgba(248,26,39,0.3)",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              {btn.label === "Menu" ? (
                <button
  onClick={handleMenuClick}
  className="relative group focus:outline-none"
>
  <div className="relative flex items-center justify-center rounded-full w-[45px] h-[45px] sm:w-[40px] sm:h-[40px] transition-all duration-300 backdrop-blur-lg">
    {!menuOpen ? (
      <div className="flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center">
        <div className="bg-[#1B1716] h-[3px] w-1/2 rounded transition-all duration-300 origin-right delay-75"></div>
        <div className="bg-[#1B1716] h-[2px] rounded"></div>
        <div className="bg-[#1B1716] h-[3px] w-1/2 rounded self-end transition-all duration-300 origin-left delay-75"></div>
      </div>
    ) : (
      <X className="text-[#1B1716]" size={26} />
    )}
  </div>
</button>

              ) : (
              <button
  onClick={handleShareClick}
  className="transition-transform duration-500 focus:outline-none"
>
  {shareOpen ? (
    <X size={26} className="text-[#1B1716]" />
  ) : (
    <span style={{ color: "#1B1716", fontWeight: "600", fontSize: "13px" }}>SHARE</span>
  )}
</button>


              )}
            </div>
          ))}
        </div>

        {/* ✅ MENU LIST */}
        <div className="fixed top-[70px] sm:top-[65px] right-0 z-30 flex flex-col items-end pointer-events-none">
          {menuItems
            .filter((item) => item.page !== currentPath)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleMenuItemClick(item.page)}
                className="flex items-center overflow-hidden cursor-pointer transition-all duration-300 hover:brightness-110"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(200px)",
                  transition: `all 0.6s ${
                    menuOpen
                      ? "cubic-bezier(0.22, 1, 0.36, 1)"
                      : "cubic-bezier(0.77, 0, 0.175, 1)"
                  } ${menuOpen ? index * 0.1 : (menuItems.filter((item) => item.page !== currentPath).length - index - 1) * 0.1}s`,
                  pointerEvents: menuOpen ? "auto" : "none",
                }}
              >
                <div
                  className="flex items-center justify-center md:w-[60px] md:h-[60px]"
                  style={{
                    width: "50px",
                    height: "55px",
                    background: "rgba(248,26,39,0.85)",
                    color: "white",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="flex items-center pl-4 md:w-[150px] md:h-[60px]"
                  style={{
                    width: "140px",
                    height: "55px",
                    background: "rgba(27,23,22,0.9)",
                    color: "white",               
                    fontWeight: 500,
                    fontSize: "14px",
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
        </div>

        {/* ✅ SHARE BOX */}
        <div className="fixed top-[70px] sm:top-[65px] right-0 z-30 flex flex-col items-end pointer-events-none">
          {shareItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleShareItemClick(item.url)}
              className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:brightness-125 hover:scale-110"
              style={{
                width: "60px",
                height: "60px",
                background: "rgba(199,0,8,0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                opacity: shareOpen ? 1 : 0,
                transform: shareOpen ? "translateX(0)" : "translateX(200px)",
                transition: `all 0.6s ${
                  shareOpen
                    ? "cubic-bezier(0.22, 1, 0.36, 1)"
                    : "cubic-bezier(0.77, 0, 0.175, 1)"
                } ${shareOpen ? index * 0.1 : (shareItems.length - index - 1) * 0.1}s`,
                backdropFilter: "blur(12px)",
                pointerEvents: shareOpen ? "auto" : "none",
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        {/* ✅ Animations and Mobile styles */}
        <style jsx>{`
          @keyframes slide-up {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }

          @media (max-width: 640px) {
            header img {
              margin-left: 20px !important;
            }
            .menu-item {
              width: 140px !important;
              height: 55px !important;
            }
          }
        `}</style>
      </header>

      {/* ✅ BOTTOM SLIDER CONTROLS - Left side at bottom 0px */}
      {currentPath === "/" && (
        <div className="fixed bottom-0 left-0 z-30 flex">
          {/* Left Arrow Button */}
          <div
            onClick={handlePrevSlide}
            className={`w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isChanging ? "opacity-80 pointer-events-none" : "hover:opacity-100 hover:bg-opacity-100"
            }`}
            style={{
              backgroundColor: "#C70008",
            }}
          >
            <ChevronLeft 
              size={28} 
              color="white" 
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Right Arrow Button */}
          <div
            onClick={handleNextSlide}
            className={`w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isChanging ? "opacity-80 pointer-events-none" : "hover:opacity-100 hover:bg-opacity-100"
            }`}
            style={{
              backgroundColor: "#F81A27",
            }}
          >
            <ChevronRight 
              size={28} 
              color="white" 
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Explore Now Button - MOBILE ONLY (Full Width) */}
          <div
            onClick={handleExploreClick}
            className="sm:hidden flex items-center justify-center h-[70px] cursor-pointer transition-all duration-300 hover:opacity-80 hover:bg-opacity-90"
            style={{
              backgroundColor: "#1B1716",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              width: "calc(100vw - 120px)",
            }}
          >
            Explore Now
          </div>
        </div>
      )}
    </>
  );
}