"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Globe, Clock, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-[70] bg-white shadow-[var(--shadow-soft)] border-b border-[#593A48]/5">
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden md:flex border-b border-[#593A48]/5 bg-[#FCEEF2] text-[#593A48]/70 text-[11px] tracking-widest font-sans font-medium">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-10 py-2 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#593A48]/60" />
              <span>{lang === "cn" ? "营业时间：早上10点 - 晚上11点" : "Hours: 10:00 AM - 11:00 PM"}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#593A48]/60" />
              <span>{lang === "cn" ? "服务覆盖全城" : "Citywide Service"}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Pill Selector */}
            <button 
              onClick={toggleLang} 
              className="px-3 py-1 border border-[#593A48]/20 rounded-full hover:text-[#F05C88] hover:border-[#F05C88] transition-all duration-300 text-[10px] font-sans font-bold flex items-center justify-center bg-white"
            >
              <span>{lang === "cn" ? "EN" : "中"}</span>
            </button>
            
            <Link 
              href="/contact-us" 
              className="px-4 py-1.5 bg-[#F05C88] text-white rounded-full text-[10px] font-bold tracking-wider hover:bg-[#E8356E] hover:shadow-[0_4px_12px_rgba(240,92,136,0.25)] transition-all duration-300 flex items-center justify-center"
            >
              {lang === "cn" ? "预约服务" : "BOOK NOW"}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-10 py-3 md:py-4">
        <nav className="relative z-10 flex items-center justify-between w-full">
          <Link href="/" className="flex items-center group">
            <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[65px] transition-transform duration-500 group-hover:scale-105">
              <BrandLogo className="w-full h-full" />
            </div>
          </Link>
        
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.2em] font-sans text-[#593A48]/80 font-semibold mr-4">
            <Link 
              href="/" 
              className={`relative py-1 transition-colors duration-300 ${
                isActive("/") 
                  ? "text-[#F05C88] border-b-2 border-[#F05C88]" 
                  : "hover:text-[#F05C88]"
              }`}
            >
              {lang === "cn" ? "首页" : "Home"}
            </Link>
            <Link 
              href="/collection" 
              className={`relative py-1 transition-colors duration-300 ${
                isActive("/collection") 
                  ? "text-[#F05C88] border-b-2 border-[#F05C88]" 
                  : "hover:text-[#F05C88]"
              }`}
            >
              {t.nav.collection}
            </Link>
            <Link 
              href="/contact-us" 
              className={`relative py-1 transition-colors duration-300 ${
                isActive("/contact-us") 
                  ? "text-[#F05C88] border-b-2 border-[#F05C88]" 
                  : "hover:text-[#F05C88]"
              }`}
            >
              {t.nav.concierge}
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Mobile Lang selector (hidden on desktop) */}
            <button 
              onClick={toggleLang}
              className="flex items-center justify-center w-9 h-9 text-[10px] font-bold text-[#593A48]/60 hover:text-[#F05C88] transition-colors border border-[#593A48]/10 rounded-full bg-[#FFF5F8]/40 backdrop-blur-sm md:hidden"
            >
              {lang === "cn" ? "EN" : "中"}
            </button>
            
            {/* Hamburger Menu Icon (Always visible) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 border border-[#593A48]/10 rounded-full text-[#593A48] hover:text-[#F05C88] hover:border-[#F05C88]/30 transition-colors relative z-[80] bg-[#FFF5F8]/40 backdrop-blur-sm"
            >
              <Menu size={20} className="text-[#F05C88]" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FFF5F8]/95 backdrop-blur-3xl z-[75] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center gap-8 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="flex flex-col items-center gap-6 text-2xl font-serif italic tracking-[0.2em]">
          <Link href="/" onClick={() => setIsOpen(false)} className={`hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform ${isActive("/") ? "text-[#F05C88]" : "text-[#593A48]"}`}>
            {lang === "cn" ? "首页" : "Home"}
          </Link>
          <Link href="/collection" onClick={() => setIsOpen(false)} className={`hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform ${isActive("/collection") ? "text-[#F05C88]" : "text-[#593A48]"}`}>
            {t.nav.collection}
          </Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className={`hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform ${isActive("/contact-us") ? "text-[#F05C88]" : "text-[#593A48]"}`}>
            {t.nav.concierge}
          </Link>
        </div>
        
        <div className="w-12 h-[1px] bg-[#F05C88]/40" />

        <button 
          onClick={() => { toggleLang(); setIsOpen(false); }}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F05C88] to-[#D41E5D] text-white rounded-full font-bold tracking-widest shadow-[0_0_20px_rgba(240,92,136,0.3)] hover:shadow-[0_0_30px_rgba(240,92,136,0.5)] transition-shadow duration-300"
        >
          <Globe size={20} />
          <span>{lang === "cn" ? "SWITCH TO ENGLISH" : "切换至中文"}</span>
        </button>

        <button 
          onClick={() => setIsOpen(false)}
          className="absolute bottom-12 text-[#593A48]/40 text-xs uppercase tracking-[0.5em] font-sans font-bold hover:text-[#593A48] transition-colors"
        >
          CLOSE [X]
        </button>
      </div>
    </header>
  );
};

export default Navbar;
