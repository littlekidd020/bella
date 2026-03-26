"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[70] flex flex-col transition-all duration-500">
      {/* Opening Hours Top Bar */}
      <div className={`flex justify-center py-2.5 border-b border-white/5 transition-colors duration-500 ${scrolled ? 'bg-[#260613]/90 backdrop-blur-md' : 'bg-[#15030A]/60 backdrop-blur-sm'}`}>
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold text-[#F84A88]/90">
          {t.nav.hours}
        </span>
      </div>

      <nav className={`w-full px-8 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-[#3D0A1E]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent md:py-6"
      }`}>
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
          <img 
            src="/images/logo.png" 
            alt="Angel Cuties Logo" 
            className="w-full h-full object-contain brightness-110 group-hover:scale-110 transition-transform duration-500" 
            style={{ mixBlendMode: 'screen' }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif text-[#F84A88] tracking-[0.15em] uppercase italic font-playfair leading-none">
            {lang === "cn" ? "天使" : "Angel"} 
          </span>
          <span className="text-xl md:text-2xl font-serif text-white/90 tracking-[0.15em] uppercase italic font-playfair leading-none mt-1 group-hover:text-[#F84A88] transition-colors duration-500">
            {lang === "cn" ? "小可爱" : "Cuties"}
          </span>
        </div>
      </Link>
      
      {/* Desktop Links & Lang Toggle */}
      <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-sans text-white/70">
        <Link href="/collection" className="hover:text-[#F84A88] transition-colors tracking-widest">{t.nav.collection}</Link>
        <Link href="/concierge" className="hover:text-[#F84A88] transition-colors tracking-widest">{t.nav.concierge}</Link>
        <Link href="/account" className="hover:text-[#F84A88] transition-colors tracking-widest">{t.nav.account}</Link>
        
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#F84A88]/10 hover:border-[#F84A88]/40 transition-all text-white/90 group"
        >
          <Globe size={16} className="text-[#F84A88]" />
          <span className="font-bold">{lang === "cn" ? "EN" : "中文"}</span>
        </button>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/90"
        >
          {lang === "cn" ? "EN" : "中文"}
        </button>
        <button className="p-2 text-[#F84A88]/80 hover:text-[#F84A88] transition-colors">
          <Menu size={24} />
        </button>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
