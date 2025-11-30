import React, { useEffect, useRef, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();
  const navLinks = [
    { name: "Home", path: "/", logo: "/icon/home.svg" },
    { name: "Products", path: "/products", logo: "/icon/products.svg" },
    { name: "Contact", path: "/contact", logo: "/icon/contact.svg" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartBounce, setCartBounce] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("authToken"))
  );
  
  const prevCartCountRef = useRef(cartCount);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    window.dispatchEvent(new Event("authStateChanged"));
    navigate("/");
    setIsMenuOpen(false);
  };

  // Window scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart bounce animation
  useEffect(() => {
    if (cartCount > prevCartCountRef.current) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(timer);
    }
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  // Auth state changes
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(Boolean(localStorage.getItem('authToken')));
    };

    window.addEventListener('authStateChanged', handleAuthChange);
    return () => window.removeEventListener('authStateChanged', handleAuthChange);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${
          isScrolled 
            ? "bg-white/95 shadow-lg backdrop-blur-md py-3" 
            : "bg-gradient-to-r from-[#016B61] to-[#70B2B2] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/image/logo.png" 
                alt="Zest Grocery" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation - FIXED */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group font-medium ${
                    isScrolled 
                      ? isActiveRoute(link.path)
                        ? "bg-[#016B61] text-white shadow-md" // Active state when scrolled
                        : "text-[#016B61] hover:bg-[#016B61]/10 hover:text-[#016B61]" // Normal state when scrolled
                      : isActiveRoute(link.path)
                        ? "bg-white/20 text-white shadow-md" // Active state when not scrolled
                        : "text-white/90 hover:bg-white/10 hover:text-white" // Normal state when not scrolled
                  }`}
                >
                  <img src={link.logo} alt={link.name} className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center space-x-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    isScrolled
                      ? "bg-[#016B61] text-white hover:bg-[#015951] shadow-md"
                      : "bg-white text-[#016B61] hover:bg-[#E5E9C5] hover:text-[#016B61]"
                  }`}
                >
                  <FiUser className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    isScrolled
                      ? "bg-[#016B61] text-white hover:bg-[#015951] shadow-md"
                      : "bg-white text-[#016B61] hover:bg-[#E5E9C5] hover:text-[#016B61]"
                  }`}
                >
                  <FiUser className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}

              <Link
                to="/cart"
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  isScrolled
                    ? "hover:bg-[#016B61]/10 text-[#016B61]"
                    : "hover:bg-white/20 text-white"
                }`}
              >
                <FaOpencart
                  className={`w-5 h-5 transition-transform duration-300 ${
                    cartBounce ? "animate-bounce" : "group-hover:scale-110"
                  }`}
                />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-bold rounded-full transition-all duration-300 ${
                      isScrolled
                        ? "bg-[#016B61] text-white"
                        : "bg-[#E5E9C5] text-[#016B61]"
                    } ${cartBounce ? "scale-125" : "scale-100"}`}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link
                to="/cart"
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  isScrolled ? "text-[#016B61]" : "text-white"
                }`}
              >
                <FaOpencart
                  className={`w-5 h-5 ${cartBounce ? "animate-bounce" : ""}`}
                />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[18px] h-4.5 px-1 text-[10px] font-bold rounded-full ${
                      isScrolled
                        ? "bg-[#016B61] text-white"
                        : "bg-[#E5E9C5] text-[#016B61]"
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? "text-[#016B61] hover:bg-[#016B61]/10"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-[#016B61] to-[#70B2B2] transform transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 text-lg font-medium px-6 py-3 rounded-full transition-all duration-300 w-48 justify-center ${
                  isActiveRoute(link.path)
                    ? "bg-white text-[#016B61] shadow-lg transform scale-105"
                    : "text-white hover:bg-white/20 hover:shadow-md"
                }`}
              >
                <img src={link.logo} alt={link.name} className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Auth Section */}
            <div className="pt-8 border-t border-white/20 w-48 text-center">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full justify-center px-6 py-3 bg-white text-[#016B61] rounded-full font-medium hover:bg-[#E5E9C5] hover:shadow-lg transition-all duration-300"
                >
                  <FiUser className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 w-full justify-center px-6 py-3 bg-white text-[#016B61] rounded-full font-medium hover:bg-[#E5E9C5] hover:shadow-lg transition-all duration-300"
                >
                  <FiUser className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navbar;