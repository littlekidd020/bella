"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled 
        ? "bg-white shadow-[var(--shadow-soft)] border-b border-[#593A48]/5" 
        : "bg-transparent"
    }`}>
      {/* Top Info Bar - Hidden on mobile */}
      <div className={`hidden md:flex justify-between items-center px-10 py-2 border-b border-[#593A48]/5 text-[#593A48]/60 text-[10px] tracking-widest uppercase transition-colors duration-500 ${scrolled ? 'bg-[#FCEEF2]' : 'bg-transparent'}`}>
        <div className="flex gap-6">
          <span>营业时间：早上10点 - 晚上11点</span>
          <span>服务覆盖全城 (AUCKLAND WIDE)</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="hover:text-[#F05C88] transition-colors flex items-center gap-1">
            <Globe size={12} />
            <span>{lang === "cn" ? "EN" : "中"}</span>
          </button>
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
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-sans text-[#593A48]/80 font-medium">
          <Link href="/" className="hover:text-[#F05C88] transition-colors duration-300">首页</Link>
          <Link href="/collection" className="hover:text-[#F05C88] transition-colors duration-300">{t.nav.collection}</Link>
          <Link href="/contact-us" className="hover:text-[#F05C88] transition-colors duration-300">{t.nav.concierge}</Link>
          
          <Link href="/contact-us" className="ml-4 px-6 py-2.5 bg-[#F05C88] text-white rounded-full font-bold tracking-widest hover:bg-[#E8356E] hover:shadow-[0_4px_15px_rgba(240,92,136,0.2)] transition-all duration-300">
            预约服务
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center justify-end gap-3 md:hidden">
          <button 
            onClick={toggleLang}
            className="flex items-center justify-center w-9 h-9 text-[10px] font-bold text-[#593A48]/60 hover:text-[#F05C88] transition-colors border border-[#593A48]/10 rounded-full bg-[#FFF5F8]/40 backdrop-blur-sm"
          >
            {lang === "cn" ? "EN" : "中"}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 border border-[#593A48]/10 rounded-full text-[#593A48] hover:text-[#F05C88] hover:border-[#F05C88]/30 transition-colors relative z-[80] bg-[#FFF5F8]/40 backdrop-blur-sm"
          >
            <Menu size={18} />
          </button>
        </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FFF5F8]/95 backdrop-blur-3xl z-[75] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center gap-12 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="flex flex-col items-center gap-10 text-3xl font-serif italic tracking-[0.2em]">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#593A48] hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform">
            首页
          </Link>
          <Link href="/collection" onClick={() => setIsOpen(false)} className="text-[#593A48] hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform">
            {t.nav.collection}
          </Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[#593A48] hover:text-[#F05C88] transition-colors hover:scale-105 duration-300 transform">
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
