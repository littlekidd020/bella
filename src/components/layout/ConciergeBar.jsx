"use client";

import React from "react";
import { Phone, MessageSquare, Send, MessageCircle, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import WeChatQRModal from "../common/WeChatQRModal";

const ConciergeBar = () => {
  const { t } = useLanguage();
  const [showQR, setShowQR] = React.useState(false);

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      label: t.concierge.sticky.call,
      href: "tel:+64225391339"
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      label: t.concierge.sticky.whatsapp,
      href: "https://wa.me/64225391339"
    },
    {
      id: 'telegram',
      icon: Send,
      label: t.concierge.sticky.telegram,
      href: "https://t.me/LOVE0225391339"
    },
    {
      id: 'line',
      icon: MessagesSquare,
      label: t.concierge.sticky.line,
      href: "https://line.me/ti/p/angle666akl"
    }
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col items-center gap-3 md:gap-5 bg-[#FAF5F7]/40 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none px-5 py-3 md:p-0 rounded-full md:rounded-none border border-[#F84A88]/20 md:border-none shadow-[0_4px_20px_rgba(45,24,34,0.08)] md:shadow-none"
      >
        {contactItems.map((item) => (
          <a 
            key={item.id}
            href={item.href} 
            className="flex flex-col items-center gap-1.5 md:block group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FAF5F7]/40 md:bg-[#FAF5F7]/60 backdrop-blur-xl border border-[#F84A88]/30 text-[#F84A88] hover:bg-[#F84A88] hover:text-white hover:border-[#F84A88] md:hover:scale-110 shadow-[0_0_15px_rgba(248,74,136,0.15)] hover:shadow-[0_0_25px_rgba(248,74,136,0.4)] transition-all duration-500">
              <item.icon size={18} className="md:w-[22px] md:h-[22px]" />
              
              {/* Tooltip for desktop */}
              <div className="absolute right-[120%] top-1/2 -translate-y-1/2 px-4 py-2 bg-[#2D1822] text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-[130%] transition-all duration-500 hidden md:block whitespace-nowrap shadow-lg">
                {item.label}
              </div>
            </div>
            
            {/* Mobile Text underneath */}
            <span className="text-[7.5px] uppercase tracking-wider text-[#F84A88] opacity-90 md:hidden whitespace-nowrap font-sans font-medium transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}

        {/* WeChat (has special onClick handler) */}
        <a 
          onClick={(e) => {
            e.preventDefault();
            setShowQR(true);
          }}
          href="#" 
          className="flex flex-col items-center gap-1.5 md:block group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#FAF5F7]/40 md:bg-[#FAF5F7]/60 backdrop-blur-xl border border-[#F84A88]/30 text-[#F84A88] hover:bg-[#F84A88] hover:text-white hover:border-[#F84A88] md:hover:scale-110 shadow-[0_0_15px_rgba(248,74,136,0.15)] hover:shadow-[0_0_25px_rgba(248,74,136,0.4)] transition-all duration-500">
            <MessageCircle size={18} className="md:w-[22px] md:h-[22px]" />
            
            <div className="absolute right-[120%] top-1/2 -translate-y-1/2 px-4 py-2 bg-[#2D1822] text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-[130%] transition-all duration-500 hidden md:block whitespace-nowrap shadow-lg">
              {t.concierge.sticky.wechat}
            </div>
          </div>
          
          <span className="text-[7.5px] uppercase tracking-wider text-[#F84A88] opacity-90 md:hidden whitespace-nowrap font-sans font-medium transition-opacity group-hover:opacity-100">
            {t.concierge.sticky.wechat}
          </span>
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
