"use client";

import React from "react";
import { motion } from "framer-motion";

const BrandIcon = ({ className = "w-12 h-12" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "circOut" }}
      className={`relative ${className} flex items-center justify-center`}
    >
      <img 
        src="/images/logo-icon.svg" 
        alt="Angel Cuties" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default BrandIcon;
