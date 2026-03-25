"use client";

import React from "react";
import { Phone, MessageSquare, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import WeChatQRModal from "../common/WeChatQRModal";

const ConciergeBar = () => {
  const { t } = useLanguage();
  const [showQR, setShowQR] = React.useState(false);

  return (
    <>
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 bg-[#2b0817]/60 backdrop-blur-xl border border-[#F84A88]/20 rounded-full shadow-[0_0_30px_rgba(225,29,72,0.1)] flex items-center gap-6 md:gap-10"
    >
      <a href="tel:+64225391339" className="flex flex-col items-center gap-1 group">
        <div className="p-2 rounded-full group-hover:bg-[#F84A88]/10 transition-colors">
          <Phone size={20} className="text-[#F84A88]" />
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#F84A88]/60 group-hover:text-[#F84A88] transition-colors font-sans whitespace-nowrap">{t.concierge.sticky.call}</span>
      </a>
      
      <a href="https://wa.me/64225391339" className="flex flex-col items-center gap-1 group">
        <div className="p-2 rounded-full group-hover:bg-[#F84A88]/10 transition-colors">
          <MessageSquare size={20} className="text-[#F84A88]" />
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#F84A88]/60 group-hover:text-[#F84A88] transition-colors font-sans whitespace-nowrap">{t.concierge.sticky.whatsapp}</span>
      </a>
      
      <a href="https://t.me/LOVE0225391339" className="flex flex-col items-center gap-1 group">
        <div className="p-2 rounded-full group-hover:bg-[#F84A88]/10 transition-colors">
          <Send size={20} className="text-[#F84A88]" />
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#F84A88]/60 group-hover:text-[#F84A88] transition-colors font-sans whitespace-nowrap">{t.concierge.sticky.telegram}</span>
      </a>

      <a 
        onClick={(e) => {
          e.preventDefault();
          setShowQR(true);
        }}
        href="#" 
        className="flex flex-col items-center gap-1 group"
      >
        <div className="p-2 rounded-full group-hover:bg-[#F84A88]/10 transition-colors">
          <MessageCircle size={20} className="text-[#F84A88]" />
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#F84A88]/60 group-hover:text-[#F84A88] transition-colors font-sans whitespace-nowrap">{t.concierge.sticky.wechat}</span>
      </a>
    </motion.div>

    <WeChatQRModal 
      isOpen={showQR} 
      onClose={() => setShowQR(false)} 
    />
    </>
  );
};

export default ConciergeBar;
