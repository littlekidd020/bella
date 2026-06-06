"use client";

import React from "react";
import { Headphones, ChevronUp } from "lucide-react";
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
        className="fixed z-50 bottom-24 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col items-center w-16 md:w-[72px] bg-white rounded-[20px] shadow-[0_8px_24px_rgba(240,92,136,0.12)] px-2 py-5 md:py-6 gap-5"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            setShowQR(true);
          }}
          className="group relative flex flex-col items-center justify-center w-full transition-all duration-300"
        >
          <Headphones size={20} className="text-[#593A48]/70 group-hover:text-[#F05C88] group-hover:scale-110 transition-all duration-300" />
          <span className="text-[10px] md:text-[11px] text-[#593A48]/70 group-hover:text-[#F05C88] font-medium mt-1.5 transition-colors font-sans whitespace-nowrap">在线客服</span>
        </button>


        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative flex flex-col items-center justify-center w-full transition-all duration-300"
        >
          <ChevronUp size={20} className="text-[#593A48]/70 group-hover:text-[#F05C88] group-hover:-translate-y-0.5 transition-all duration-300" />
          <span className="text-[10px] md:text-[11px] text-[#593A48]/70 group-hover:text-[#F05C88] font-medium mt-1.5 transition-colors font-sans whitespace-nowrap">回到顶部</span>
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
