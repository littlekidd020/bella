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
    <header className="fixed top-0 left-0 w-full z-[70] flex flex-col transition-all duration-500">
      {/* Opening Hours Top Bar */}
      <div className={`flex justify-center py-1.5 md:py-3 border-b border-white/5 transition-colors duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-[#FFE4EC]/60 backdrop-blur-sm'}`}>
        <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans font-bold text-[#F84A88] text-center px-4">
          {t.nav.hours}
        </span>
      </div>

      <nav className={`w-full px-6 md:px-8 py-4 md:py-8 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-2xl md:py-4" : "bg-transparent md:py-10"
      }`}>
      <Link href="/" className="flex items-center group">
        <div className="relative w-28 h-12 md:w-48 md:h-20">
          <BrandLogo className="w-full h-full" />
        </div>
      </Link>
      
      {/* Desktop Links & Lang Toggle */}
      <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-sans text-[#15030A]/80 font-semibold">
        <Link href="/collection" className="hover:text-[#F84A88] transition-colors tracking-widest">{t.nav.collection}</Link>
        <Link href="/contact-us" className="hover:text-[#F84A88] transition-colors tracking-widest">{t.nav.concierge}</Link>
        
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 bg-[#F84A88]/5 border border-[#F84A88]/20 rounded-full hover:bg-[#F84A88]/10 hover:border-[#F84A88]/40 transition-all text-[#15030A] group"
        >
          <Globe size={16} className="text-[#F84A88]" />
          <span className="font-bold">{lang === "cn" ? "EN" : "中文"}</span>
        </button>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-1.5 bg-[#F84A88]/5 border border-[#F84A88]/20 rounded-full text-xs font-bold text-[#15030A]"
        >
          {lang === "cn" ? "EN" : "中文"}
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#F84A88]/80 hover:text-[#F84A88] transition-colors relative z-[80]"
        >
          <Menu size={24} />
        </button>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/80 backdrop-blur-xl z-[75] transition-all duration-500 flex flex-col items-center justify-center gap-12 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 text-2xl font-serif tracking-widest italic font-playfair">
          <Link href="/collection" onClick={() => setIsOpen(false)} className="text-[#15030A] hover:text-[#F84A88] transition-colors">
            {t.nav.collection}
          </Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="text-[#15030A] hover:text-[#F84A88] transition-colors">
            {t.nav.concierge}
          </Link>
        </div>
        
        <button 
          onClick={() => { toggleLang(); setIsOpen(false); }}
          className="flex items-center gap-3 px-8 py-3 bg-[#F84A88] text-white rounded-full font-bold tracking-widest shadow-lg"
        >
          <Globe size={20} />
          <span>{lang === "cn" ? "SWITCH TO ENGLISH" : "切换至中文"}</span>
        </button>

        <button 
          onClick={() => setIsOpen(false)}
          className="mt-12 text-[#15030A]/50 text-xs uppercase tracking-[0.5em] font-sans font-bold hover:text-[#15030A] transition-colors"
        >
          CLOSE [X]
        </button>
      </div>
    </header>
  );
};

export default Navbar;
