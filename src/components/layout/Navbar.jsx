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
    <header className={`fixed top-4 md:top-6 left-4 right-4 z-[70] mx-auto max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled 
        ? "bg-white shadow-[var(--shadow-soft)] border-b border-[#2D1822]/5 rounded-full py-2 px-6 md:px-10" 
        : "bg-transparent py-4 px-6 md:px-10 rounded-full"
    }`}>
      <nav className="flex items-center justify-between w-full h-14 md:h-20">
        <Link href="/" className="flex items-center group">
          <div className="relative w-28 h-10 md:w-44 md:h-16 transition-transform duration-500 group-hover:scale-105">
            <BrandLogo className="w-full h-full" />
          </div>
        </Link>
        
        {/* Desktop Links & Lang Toggle */}
        <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-sans text-[#2D1822]/80 font-medium">
          <Link href="/collection" className="hover:text-[#F84A88] transition-colors duration-300 tracking-[0.2em]">{t.nav.collection}</Link>
          <Link href="/contact-us" className="hover:text-[#F84A88] transition-colors duration-300 tracking-[0.2em]">{t.nav.concierge}</Link>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 text-[#2D1822]/60 hover:text-[#F84A88] transition-colors duration-300 font-sans text-sm font-medium tracking-widest"
          >
            <Globe size={16} />
            <span>{lang === "cn" ? "EN" : "中文"}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLang}
            className="flex items-center justify-center w-10 h-10 text-xs font-bold text-[#2D1822]/60 hover:text-[#F84A88] transition-colors border border-[#2D1822]/10 rounded-full bg-[#FAF5F7]/40 backdrop-blur-sm shadow-sm"
          >
            {lang === "cn" ? "EN" : "中"}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 border border-[#2D1822]/10 rounded-full text-[#2D1822] hover:text-[#F84A88] hover:border-[#F84A88]/30 transition-colors relative z-[80] bg-[#FAF5F7]/40 backdrop-blur-sm shadow-sm"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FFE3EC]/95 backdrop-blur-3xl z-[75] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center gap-12 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}>
        <div className="flex flex-col items-center gap-10 text-3xl font-serif italic tracking-[0.2em]">
          <Link href="/collection" onClick={() => setIsOpen(false)} className="text-[#2D1822] hover:text-[#F84A88] transition-colors hover:scale-105 duration-300 transform">
            {t.nav.collection}
          </Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[#2D1822] hover:text-[#F84A88] transition-colors hover:scale-105 duration-300 transform">
            {t.nav.concierge}
          </Link>
        </div>
        
        <div className="w-12 h-[1px] bg-[#F84A88]/30" />

        <button 
          onClick={() => { toggleLang(); setIsOpen(false); }}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F84A88] to-[#D41E5D] text-white rounded-full font-bold tracking-widest shadow-[0_0_20px_rgba(248,74,136,0.3)] hover:shadow-[0_0_30px_rgba(248,74,136,0.5)] transition-shadow duration-300"
        >
          <Globe size={20} />
          <span>{lang === "cn" ? "SWITCH TO ENGLISH" : "切换至中文"}</span>
        </button>

        <button 
          onClick={() => setIsOpen(false)}
          className="absolute bottom-12 text-[#2D1822]/40 text-xs uppercase tracking-[0.5em] font-sans font-bold hover:text-[#2D1822] transition-colors"
        >
          CLOSE [X]
        </button>
      </div>
    </header>
  );
};

export default Navbar;
