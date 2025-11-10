import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Blitzlogo.png"; // <-- FIXED: Changed 'BlitzLogo.png' to 'Blitzlogo.png'
import {
  MessageSquare,
  Send,
  X,
  Home,
  Info,
  Briefcase,
  FileText,
  FolderOpen,
  Phone,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const buttons = [
    { color: "#F81A27", icon: <MessageSquare size={36} />, label: "Contact" },
    { color: "#C70008", label: "Menu" },
    { color: "#EF1C22", icon: <Send size={36} />, label: "Share" },
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
    { icon: <FaInstagram size={20} />, label: "Instagram" },
    { icon: <FaLinkedinIn size={20} />, label: "LinkedIn" },
    { icon: <FaFacebookF size={20} />, label: "Facebook" },
    { icon: <FaTwitter size={20} />, label: "Twitter" },
    { icon: <FaWhatsapp size={20} />, label: "WhatsApp" },
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
    navigate(page);
  };

  const handleLogoClick = () => {
    if (currentPath !== "/") {
      if (menuOpen) setMenuOpen(false);
      if (shareOpen) setShareOpen(false);
      navigate("/");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full h-[70px] z-40 flex justify-between items-center px-[40px] backdrop-blur-xl bg-[rgba(27,23,22,0.6)] border-b border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
      }}
    >
      <img
        src={logo}
        alt="Blitz Logo"
        className="h-17 cursor-pointer transition-transform duration-500 hover:scale-105"
        onClick={handleLogoClick}
      />

      <div className="flex fixed top-0 right-0">
        {buttons.map((btn, i) => (
          <div
            key={i}
            className="group relative w-[70px] h-[70px] flex justify-center items-center transition-all duration-500 cursor-pointer"
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
                <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transition-all duration-300 bg-[rgba(255,255,255,0.15)] backdrop-blur-lg border border-[rgba(255,255,255,0.25)] shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]">
                  {!menuOpen ? (
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
                      <div className="bg-white h-[2px] w-1/2 rounded transition-all duration-300 origin-right delay-75"></div>
                      <div className="bg-white h-[1px] rounded"></div>
                      <div className="bg-white h-[2px] w-1/2 rounded self-end transition-all duration-300 origin-left delay-75"></div>
                    </div>
                  ) : (
                    <X className="text-white" size={28} />
                  )}
                </div>
              </button>
            ) : btn.label === "Share" ? (
              <button
                onClick={handleShareClick}
                className="text-white transition-transform duration-500 focus:outline-none"
              >
                {shareOpen ? <X size={32} /> : btn.icon}
              </button>
            ) : (
              <>
                <div
                  className="text-white transition-transform duration-500 group-hover:-translate-y-2"
                  onClick={() => navigate("/contact")}
                >
                  {btn.icon}
                </div>
                <span className="absolute bottom-3 opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-500">
                  {btn.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>

      {/* MENU LIST */}
      <div className="fixed top-[70px] right-0 z-30 flex flex-col items-end">
        {menuItems
          .filter((item) => item.page !== currentPath)
          .map((item, index) => (
            <div
              key={index}
              onClick={() => handleMenuItemClick(item.page)}
              className="flex items-center overflow-hidden cursor-pointer"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(200px)",
                transition: `all 0.6s ${
                  menuOpen
                    ? "cubic-bezier(0.22, 1, 0.36, 1)"
                    : "cubic-bezier(0.77, 0, 0.175, 1)"
                } ${menuOpen ? index * 0.1 : (menuItems.length - index - 1) * 0.1}s`,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(248,26,39,0.8)",
                  color: "white",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {item.icon}
              </div>

              <div
                className="flex items-center pl-4"
                style={{
                  width: "150px",
                  height: "60px",
                  background: "rgba(27,23,22,0.7)",
                  color: "white",
                  fontFamily: "Proxima Nova, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
      </div>

      {/* SHARE BOX */}
      <div className="fixed top-[70px] right-0 z-30 flex flex-col items-end">
        {shareItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setShareOpen(false)}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: "50px",
              height: "50px",
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
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </header>
  );
}