"use client";

import React from "react";
import { Phone, MessageSquare, Send, MessageCircle, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import WeChatQRModal from "../common/WeChatQRModal";

const ConciergeBar = () => {
  const { lang, t } = useLanguage();
  const [showQR, setShowQR] = React.useState(false);

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      label: lang === "cn" ? "电话咨询" : t.concierge.sticky.call,
      href: "tel:+64225391339"
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      label: lang === "cn" ? "WHATSAPP" : t.concierge.sticky.whatsapp,
      href: "https://wa.me/64225391339"
    },
    {
      id: 'telegram',
      icon: Send,
      label: lang === "cn" ? "TELEGRAM" : t.concierge.sticky.telegram,
      href: "https://t.me/LOVE0225391339"
    },
    {
      id: 'line',
      icon: MessagesSquare,
      label: lang === "cn" ? "LINE 咨询" : t.concierge.sticky.line,
      href: "https://line.me/ti/p/angle666akl"
    }
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 bottom-4 left-1/2 flex flex-row items-center justify-around bg-white/80 backdrop-blur-xl px-4 sm:px-6 py-3 rounded-[2rem] border border-white/30 shadow-[0_12px_40px_rgba(240,92,136,0.15)] w-[92%] max-w-[480px] sm:max-w-xl"
      >
        {contactItems.map((item) => (
          <a 
            key={item.id}
            href={item.href} 
            className="flex-1 flex flex-col items-center justify-center gap-1 group cursor-pointer text-center"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full text-[#F05C88] group-hover:bg-[#F05C88]/10 group-hover:scale-110 transition-all duration-300">
              <item.icon size={20} className="stroke-[1.75]" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-[#F05C88] font-sans font-medium whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </a>
        ))}

        {/* WeChat (special modal popup) */}
        <a 
          onClick={(e) => {
            e.preventDefault();
            setShowQR(true);
          }}
          href="#" 
          className="flex-1 flex flex-col items-center justify-center gap-1 group cursor-pointer text-center"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full text-[#F05C88] group-hover:bg-[#F05C88]/10 group-hover:scale-110 transition-all duration-300">
            <MessageCircle size={20} className="stroke-[1.75]" />
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-wider text-[#F05C88] font-sans font-medium whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
            {lang === "cn" ? "微信咨询" : t.concierge.sticky.wechat}
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
