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
            className="relative max-w-sm w-full bg-[#260613] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(248,74,136,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-2 flex justify-between items-start">
              <div>
                <h3 className="font-serif italic text-2xl text-white mb-1">
                  {t.nav.brand}: WeChat
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F84A88] font-bold">
                  {t.concierge.ctaEncrypted}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* QR Card */}
            <div className="p-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative bg-white/5">
                <img 
                  src="/images/wechat-qr.jpg" 
                  alt="WeChat QR Code" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 text-center">
               <p className="text-white/60 text-xs font-sans leading-relaxed">
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
