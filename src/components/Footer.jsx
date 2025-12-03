import React, { useEffect, useRef } from "react";
import { BiMailSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiBookmark, FiLink, FiMail } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/",
      color: "#1877F2",
    },
    {
      icon: FaTwitter,
      url: "https://www.twitter.com/",
      color: "#1DA1F2",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/",
      color: "#E4405F",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/",
      color: "#FF0000",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-[#016B61] via-[#016B61] to-[#70B2B2] text-white pt-12 pb-8 relative overflow-hidden border-t-4 border-[#9ECFD4]"
    >
      {/* Animated Top Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9ECFD4] via-[#70B2B2] to-[#9ECFD4] z-20 origin-left"
      />

      {/* Animated Background Decorations */}
      <motion.div 
        variants={floatVariants}
        animate="pulse"
        className="hidden lg:block absolute rounded-full bg-[#9ECFD4]/10 -top-24 -right-24 w-80 h-80"
      />
      <motion.div 
        variants={floatVariants}
        animate="pulse"
        transition={{ delay: 2 }}
        className="hidden lg:block absolute rounded-full bg-[#70B2B2]/10 -left-24 -bottom-40 w-96 h-96"
      />
      <motion.div 
        variants={floatVariants}
        animate="float"
        className="hidden lg:block absolute rounded-full bg-[#E5E9C5]/5 top-1/4 left-1/3 w-64 h-64"
      />
      
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#E5E9C5]/30 rounded-full"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold tracking-wider mb-4 flex items-center"
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white to-[#E5E9C5] bg-clip-text text-transparent"
              >
                Zest
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-[#E5E9C5] ml-1"
              >
                Grocery
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#E5E9C5]/80 mb-6 text-sm sm:text-base leading-relaxed"
            >
              Fresh groceries delivered to your doorstep. Quality products, competitive prices, and exceptional service.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="space-x-3 flex"
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Our ${social.icon.name.replace("Fa", "")} Page`}
                  className="bg-gradient-to-br from-[#016B61] to-[#70B2B2] w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    rotate: [0, 10, -10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Hover effect background */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: social.color }}
                    initial={false}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="text-[#E5E9C5] group-hover:text-white text-sm sm:text-base relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-[#9ECFD4] inline-flex items-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FiLink className="mr-2 text-[#E5E9C5]" />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-[#E5E9C5] bg-clip-text text-transparent">
                Quick Links
              </span>
            </motion.h3>
            <ul className="space-y-3">
              {["Home", "Products", "Contact", "Cart"].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="flex items-center group hover:text-white transition-all duration-300"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-[#9ECFD4] to-[#E5E9C5] rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <span className="text-[#E5E9C5]/90 group-hover:text-white text-sm sm:text-base">
                      {item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-[#9ECFD4] inline-flex items-center"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsTelephone className="mr-2 text-[#E5E9C5]" />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-[#E5E9C5] bg-clip-text text-transparent">
                Contact Us
              </span>
            </motion.h3>
            <ul className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: "169/2/A Shamim Shoronmi, Mirpur, Dhaka 1213" },
                { icon: FaPhone, text: "+0123456789" },
                { icon: FaEnvelope, text: "zestgrocery@gmail.com" },
              ].map((contact, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1 bg-gradient-to-br from-[#016B61] to-[#70B2B2] p-2 rounded-lg mr-3 shadow-md"
                  >
                    <contact.icon className="text-[#E5E9C5] text-sm" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-[#E5E9C5]/90 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {contact.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-[#9ECFD4] inline-flex items-center"
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FiMail className="text-[#E5E9C5]" />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-[#E5E9C5] bg-clip-text text-transparent ml-2">
                Newsletter
              </span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#E5E9C5]/80 mb-4 text-sm sm:text-base leading-relaxed"
            >
              Subscribe to our newsletter for fresh updates, exclusive offers, and seasonal recipes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row mb-4 gap-2"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gradient-to-r from-[#016B61]/30 to-[#70B2B2]/30 border-2 border-[#9ECFD4]/50 rounded-xl sm:rounded-l-xl sm:rounded-tr-none px-4 py-3 text-white placeholder-[#E5E9C5]/50 focus:outline-none focus:border-[#E5E9C5] focus:ring-2 focus:ring-[#E5E9C5]/30 backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 5, -5, 0],
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#016B61] to-[#70B2B2] hover:from-[#70B2B2] hover:to-[#9ECFD4] px-4 py-3 rounded-xl sm:rounded-r-xl sm:rounded-bl-none flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BiMailSend className="mr-2 text-lg" />
                </motion.div>
                <span>Subscribe</span>
              </motion.button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[#E5E9C5]/60 text-xs sm:text-sm"
            >
              We respect your privacy. Unsubscribe at anytime.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="border-t-2 border-[#9ECFD4]/30 pt-8 mb-8"
        >
          <motion.h4 
            whileHover={{ scale: 1.05 }}
            className="text-[#E5E9C5] mb-4 font-medium flex items-center justify-center text-sm sm:text-base"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FiBookmark className="mr-2 text-[#E5E9C5] text-lg" />
            </motion.div>
            We accept all major payment methods
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay].map(
              (Icon, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + idx * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.3,
                    y: -10,
                    rotate: [0, 10, -10, 0],
                  }}
                  className="group relative"
                >
                  <Icon className="text-3xl sm:text-4xl text-[#E5E9C5]/70 hover:text-white transition-all duration-300" />
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#E5E9C5] to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Copyright & Built By */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-gradient-to-r from-[#016B61]/30 to-[#70B2B2]/30 px-6 py-3 rounded-full border border-[#9ECFD4]/30 shadow-lg backdrop-blur-sm"
          >
            <motion.div 
              className="relative mr-3"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-6 h-6 bg-gradient-to-br from-[#9ECFD4] to-[#E5E9C5] rounded-sm transform rotate-45 shadow-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#016B61] transform -rotate-45 rounded-sm"></div>
              </div>
            </motion.div>
            <motion.span 
              className="text-[#E5E9C5] text-sm sm:text-base"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © {new Date().getFullYear()} ZestGrocery. All rights reserved. 
              <span className="mx-2">•</span>
              Built by{" "}
              <motion.a 
                href="https://jakariaahmed.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-[#E5E9C5] underline hover:no-underline transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                JM Solution
              </motion.a>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Emojis */}
      <motion.div 
        className="absolute bottom-20 right-10 text-2xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🛒
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-10 text-2xl"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -360],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🥦
      </motion.div>
      <motion.div 
        className="absolute top-20 right-20 text-xl"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🍎
      </motion.div>
    </footer>
  );
};

export default Footer;