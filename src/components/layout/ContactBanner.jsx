"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

export default function ContactBanner() {
  const { t } = useLanguage();

  return (
    <motion.div 
       initial={{ y: 50, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       className="relative z-20 w-full bg-[#F84A88] text-white overflow-hidden shadow-[0_-20px_50px_rgba(248,74,136,0.2)] border-y border-[#F84A88]/50 mt-auto"
    >
      {/* Inner Content of Pink Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3 md:h-[70px]">
        
        {/* Logo & Identity */}
        <div className="flex justify-center items-center gap-3 shrink-0">
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)] p-1 relative overflow-hidden shrink-0">
             <BrandLogo className="w-full h-full relative z-10" />
           </div>
           <div className="flex flex-col justify-center text-center md:text-left">
             <h2 className="text-lg md:text-2xl font-black tracking-wider drop-shadow-md leading-none mb-1">
               {t.banner?.title || "专业接线 纽澳独家精品资源"}
             </h2>
             <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold opacity-90 drop-shadow-sm font-sans">
               {t.banner?.subtitle || "尊贵 • 隐秘 • 奢界"}
             </p>
           </div>
        </div>

        {/* Middle Contact Block */}
        <div className="relative flex flex-col items-center justify-center px-6 md:px-10 w-full md:w-auto h-auto md:h-full md:mx-auto py-4 md:py-0">
          <div className="absolute inset-y-0 -left-6 -right-6 bg-[#D41E5D] -skew-x-[25deg] shadow-inner hidden md:block" />
          <div className="absolute inset-0 bg-[#D41E5D]/30 md:hidden rounded-2xl mx-2 my-1 border border-white/20" />
          
          <div className="relative z-10 flex flex-col items-center gap-2 w-full">
             <a href="tel:+64225391339" className="flex items-center gap-3 hover:text-white/80 transition-colors text-base md:text-lg font-black tracking-widest drop-shadow-md">
               <span className="opacity-70 text-[10px] md:text-xs font-bold font-sans min-w-[3em] text-right">{t.banner?.phone}</span> 
               <span>022-5391339</span>
             </a>
             <div className="flex items-center gap-3 text-base md:text-lg font-black tracking-widest drop-shadow-md">
               <span className="opacity-70 text-[10px] md:text-xs font-bold font-sans uppercase tracking-[0.2em] min-w-[3em] text-right">{t.banner?.wechat}</span> 
               <span>Angelya3312</span>
             </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="hidden md:flex flex-col text-center md:text-right justify-center shrink-0 md:pl-4 mb-4 md:mb-0">
           <p className="text-[10px] md:text-xl font-black tracking-[0.3em] md:tracking-[0.5em] leading-none mb-1.5 drop-shadow-md text-white/90">
             {t.banner?.slogan1 || "品 味 顶 奢 之 夜"}
           </p>
           <p className="text-[8px] md:text-[13px] font-bold tracking-[0.3em] md:tracking-[0.4em] opacity-90 drop-shadow-sm font-sans">
             {t.banner?.slogan2 || "纵 享 倾 城 绝 色"}
           </p>
        </div>
        
      </div>
    </motion.div>
  );
}
