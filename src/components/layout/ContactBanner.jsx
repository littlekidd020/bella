"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function ContactBanner() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // Hide on mobile for collection and contact pages to avoid overlap with sticky bar
  const shouldHideOnMobile = pathname?.includes('/collection') || pathname?.includes('/contact-us');

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`relative z-20 w-[calc(100%-4rem)] md:w-[96%] max-w-7xl mx-auto mb-6 md:mb-8 rounded-[2rem] md:rounded-full bg-gradient-to-r from-[#F84A88] via-[#e23773] to-[#D41E5D] backdrop-blur-md border border-white/20 overflow-hidden shadow-[0_10px_40px_rgba(248,74,136,0.3)] ${shouldHideOnMobile ? 'hidden md:block' : ''}`}
    >
      {/* Decorative Shine Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />


      {/* Inner Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-auto md:h-24 px-6 md:px-12 py-4 md:py-0">
        
        {/* Left: Brand section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner shrink-0 overflow-hidden border-2 border-white/50">
            <img src="/images/header-bg-custom.jpg" alt="Logo Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-white">
            <h3 className="font-bold tracking-widest text-sm md:text-base drop-shadow-md">专业接线 纽澳独家精品资源</h3>
            <div className="flex items-center gap-2 text-[10px] md:text-xs mt-1 opacity-90 tracking-[0.2em]">
              <span>尊贵</span>
              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
              <span>隐秘</span>
              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
              <span>奢界</span>
            </div>
          </div>
        </div>

        {/* Separator (Desktop) */}
        <div className="hidden md:block w-px h-12 bg-white/25 mx-4 shrink-0"></div>

        {/* Center: Contact section */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto mb-4 md:mb-0">
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-xs tracking-wider">电话:</span>
            <span className="text-white text-xl md:text-2xl font-bold tracking-wider drop-shadow-md">022-5391339</span>
          </div>
          <div className="flex items-center gap-3 text-white text-xs md:text-sm tracking-wider mt-1.5 md:mt-1">
            <span className="text-white/80">微信:</span>
            <span className="font-medium">Angelya3312</span>
            <span className="text-white/50">|</span>
            <span className="font-medium">Angel91339</span>
          </div>
        </div>

        {/* Separator (Desktop) */}
        <div className="hidden md:block w-px h-12 bg-white/25 mx-4 shrink-0"></div>

        {/* Right: Slogan */}
        <div className="hidden md:flex flex-col items-center md:items-end justify-center w-full md:w-auto pt-4 md:pt-0 border-t border-white/20 md:border-none">
          <div className="flex items-center gap-3 text-white font-bold text-sm md:text-base tracking-[0.3em] drop-shadow-md">
            <span>品</span><span>味</span><span>顶</span><span>奢</span><span>之</span><span>夜</span>
          </div>
          <div className="flex items-center gap-3 text-white text-[10px] md:text-xs tracking-[0.4em] mt-2 opacity-90">
            <span>纵</span><span>享</span><span>倾</span><span>城</span><span>绝</span><span>色</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
