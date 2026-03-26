"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

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
      <div className={`flex justify-center py-2.5 border-b border-rose/10 transition-colors duration-500 ${scrolled ? 'bg-[#FFD1DC]/40 backdrop-blur-md' : 'bg-sakura/60 backdrop-blur-sm'}`}>
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-sans font-bold text-rose/90">
          {t.nav.hours}
        </span>
      </div>

      <nav className={`w-full px-8 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-rose/10 shadow-lg" : "bg-transparent md:py-6"
      }`}>
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <BrandLogo className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif text-rose tracking-[0.15em] uppercase italic font-playfair leading-none">
            {lang === "cn" ? "天使" : "Angel"} 
          </span>
          <span className="text-xl md:text-2xl font-serif text-charcoal/80 tracking-[0.15em] uppercase italic font-playfair leading-none mt-1 group-hover:text-rose transition-colors duration-500">
            {lang === "cn" ? "小可爱" : "Cuties"}
          </span>
        </div>
      </Link>
      
      {/* Desktop Links & Lang Toggle */}
      <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-sans text-charcoal/70">
        <Link href="/collection" className="hover:text-rose transition-colors tracking-widest">{t.nav.collection}</Link>
        <Link href="/concierge" className="hover:text-rose transition-colors tracking-widest">{t.nav.concierge}</Link>
        <Link href="/account" className="hover:text-rose transition-colors tracking-widest">{t.nav.account}</Link>
        
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 bg-charcoal/5 border border-charcoal/10 rounded-full hover:bg-rose/10 hover:border-rose/40 transition-all text-charcoal/90 group"
        >
          <Globe size={16} className="text-rose" />
          <span className="font-bold">{lang === "cn" ? "EN" : "中文"}</span>
        </button>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-1.5 bg-charcoal/5 border border-charcoal/10 rounded-full text-xs font-bold text-charcoal/90"
        >
          {lang === "cn" ? "EN" : "中文"}
        </button>
        <button className="p-2 text-rose/80 hover:text-rose transition-colors">
          <Menu size={24} />
        </button>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
