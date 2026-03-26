"use client";

import React from "react";
import { motion } from "framer-motion";

const BrandLogo = ({ className = "w-12 h-12", color = "#F84A88" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative ${className}`}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(240,68,136,0.5)]"
      >
        {/* Heart + Wings Solid Silhouette */}
        <path 
          d="M50 85L45.5 80.5C29.5 66.5 19 57.5 19 46C19 36.5 26.5 29 36 29C41.5 29 46.5 31.5 50 35.5C53.5 31.5 58.5 29 64 29C73.5 29 81 36.5 81 46C81 57.5 70.5 66.5 54.5 80.5L50 85Z" 
          fill={color}
        />
        <path 
          d="M30 40C15 30 5 45 5 60C5 75 25 85 45 82" 
          stroke={color} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M70 40C85 30 95 45 95 60C95 75 75 85 55 82" 
          stroke={color} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Feather Accents */}
        <path d="M12 55L22 52" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
        <path d="M88 55L78 52" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

export default BrandLogo;
