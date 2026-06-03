"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WeChatQRModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-sm w-full bg-[#FFFFFF] border border-[#F05C88]/25 rounded-3xl overflow-hidden shadow-[0_4px_16px_rgba(89,58,72,0.06),0_12px_40px_rgba(89,58,72,0.04)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#593A48]/40 hover:text-[#593A48] hover:bg-[#FFE3EC] transition-colors z-10">✕</button>
            {/* Header */}
            <div className="p-6 pb-2 flex justify-between items-start">
              <div>
                <h3 className="font-serif italic text-2xl text-[#593A48] mb-1">
                  {t.nav.brand}: WeChat
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F05C88] font-bold">
                  {t.concierge.ctaEncrypted}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-[#F05C88]/20 rounded-full transition-colors text-[#593A48]/30 hover:text-[#593A48]"
              >
                <X size={20} />
              </button>
            </div>

            {/* QR Card */}
            <div className="p-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm relative bg-[#FFFFFF]/65 border border-[#F05C88]/15">
                <img 
                  src="/images/wechat-qr.webp" 
                  alt="WeChat QR Code" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 text-center">
               <p className="text-[#593A48]/60 text-xs font-sans leading-relaxed">
                 Scan this QR code with your WeChat app <br/> to connect with our concierge directly.
               </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WeChatQRModal;
