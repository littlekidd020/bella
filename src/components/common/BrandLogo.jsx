"use client";

import React from "react";
import { motion } from "framer-motion";

const BrandLogo = ({ className = "w-12 h-12" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.5, ease: "circOut" }}
      className={`relative ${className}`}
    >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_0_8px_rgba(248,74,136,0.3)]"
        >
          <defs>
            <linearGradient id="sakuraPink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF5F7" />
              <stop offset="35%" stopColor="#FFD1DC" />
              <stop offset="70%" stopColor="#F84A88" />
              <stop offset="100%" stopColor="#FFD1DC" />
            </linearGradient>
          </defs>

          {/* Halo */}
          <ellipse 
            cx="50" cy="18" rx="16" ry="5" 
            stroke="url(#sakuraPink)" 
            strokeWidth="2.5" 
            className="animate-pulse opacity-80"
          />

          {/* Heart Core */}
          <path 
            d="M50 82C50 82 15 62 15 40C15 28 28 18 40 18C45 18 48 22 50 25C52 22 55 18 60 18C72 18 85 28 85 40C85 62 50 82 50 82Z" 
            fill="url(#sakuraPink)"
            className="transition-all duration-1000"
          />

          {/* Outer Wings */}
          <path 
            d="M35 32C15 15 2 25 2 55C2 72 15 82 35 82" 
            stroke="url(#sakuraPink)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            className="opacity-60"
          />
          <path 
            d="M65 32C85 15 98 25 98 55C98 72 85 82 65 82" 
            stroke="url(#sakuraPink)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            className="opacity-60"
          />

          {/* Sparkles */}
          <circle cx="20" cy="40" r="1.5" fill="white" className="opacity-80" />
          <circle cx="80" cy="40" r="1.5" fill="white" className="opacity-80" />
          
          {/* Central Focus */}
          <circle cx="50" cy="40" r="2.5" fill="white" className="opacity-95 animate-pulse" />
        </svg>
    </motion.div>
  );
};

export default BrandLogo;
