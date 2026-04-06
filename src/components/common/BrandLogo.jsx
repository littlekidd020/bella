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
        className="w-full h-full filter drop-shadow-[0_0_12px_rgba(240,180,157,0.4)]"
      >
        {/* Rose Gold Gradient Definition */}
        <defs>
          <linearGradient id="roseGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9E80" />
            <stop offset="40%" stopColor="#F84A88" />
            <stop offset="100%" stopColor="#B8004D" />
          </linearGradient>
          <filter id="aura">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Halo */}
        <ellipse 
          cx="50" cy="18" rx="14" ry="4" 
          stroke="url(#roseGold)" 
          strokeWidth="2" 
          className="animate-pulse opacity-80"
        />

        {/* Heart Core - Sophisticated Tall Profile */}
        <path 
          d="M50 85C50 85 18 64 18 42C18 30 28 22 38 22C43 22 47 25 50 28C53 25 57 22 62 22C72 22 82 30 82 42C82 64 50 85 50 85Z" 
          fill="url(#roseGold)"
          className="transition-all duration-1000"
        />

        {/* Outer Celestial Wings - Layer 1 (Ethereal Lines) */}
        <path 
          d="M38 35C20 15 2 25 2 55C2 72 15 84 35 84" 
          stroke="url(#roseGold)" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="opacity-80"
        />
        <path 
          d="M62 35C80 15 98 25 98 55C98 72 85 84 65 84" 
          stroke="url(#roseGold)" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="opacity-80"
        />

        {/* Inner Feather Details - Layer 2 (Jewelry Filigree Effect) */}
        <path d="M15 45L25 48" stroke="white" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
        <path d="M85 45L75 48" stroke="white" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
        <path d="M12 55L22 57" stroke="white" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
        <path d="M88 55L78 57" stroke="white" strokeWidth="0.8" strokeLinecap="round" className="opacity-30" />
        
        {/* Central Spine/Focus Spark */}
        <circle cx="50" cy="42" r="1.5" fill="white" className="opacity-80 animate-pulse" />
      </svg>
    </motion.div>
  );
};

export default BrandLogo;
