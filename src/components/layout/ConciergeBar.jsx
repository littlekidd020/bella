"use client";

import React from "react";
import { Headphones, Calendar, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import WeChatQRModal from "../common/WeChatQRModal";

const ConciergeBar = () => {
  const { t } = useLanguage();
  const [showQR, setShowQR] = React.useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 bottom-24 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col items-center w-12 md:w-14 bg-white/95 backdrop-blur-md rounded-[28px] border border-[#F05C88]/10 shadow-[0_12px_40px_rgba(240,92,136,0.12)] p-2 py-4 md:py-5 gap-3"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            setShowQR(true);
          }}
          className="group relative flex flex-col items-center justify-center w-full transition-all duration-300"
        >
          <Headphones size={18} className="text-[#593A48]/80 group-hover:text-[#F05C88] group-hover:scale-110 transition-all duration-300" />
          <span className="text-[9px] md:text-[10px] text-[#593A48]/80 group-hover:text-[#F05C88] font-medium leading-[1.3] flex flex-col items-center mt-1.5 transition-colors font-sans">
            <span>在</span>
            <span>线</span>
            <span>客</span>
            <span>服</span>
          </span>
        </button>

        <div className="w-[60%] h-[1px] bg-[#593A48]/10" />

        <a 
          href="tel:+64225391339"
          className="group relative flex flex-col items-center justify-center w-full transition-all duration-300"
        >
          <Calendar size={18} className="text-[#593A48]/80 group-hover:text-[#F05C88] group-hover:scale-110 transition-all duration-300" />
          <span className="text-[9px] md:text-[10px] text-[#593A48]/80 group-hover:text-[#F05C88] font-medium leading-[1.3] flex flex-col items-center mt-1.5 transition-colors font-sans">
            <span>预</span>
            <span>约</span>
            <span>下</span>
            <span>单</span>
          </span>
        </a>

        <div className="w-[60%] h-[1px] bg-[#593A48]/10" />

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative flex flex-col items-center justify-center w-full transition-all duration-300"
        >
          <ChevronUp size={18} className="text-[#593A48]/80 group-hover:text-[#F05C88] group-hover:-translate-y-0.5 transition-all duration-300" />
          <span className="text-[9px] md:text-[10px] text-[#593A48]/80 group-hover:text-[#F05C88] font-medium leading-[1.3] flex flex-col items-center mt-1.5 transition-colors font-sans">
            <span>回</span>
            <span>到</span>
            <span>顶</span>
            <span>部</span>
          </span>
        </button>
      </motion.div>

      <WeChatQRModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)} 
      />
    </>
  );
};

export default ConciergeBar;
