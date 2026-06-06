"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Phone, MessageCircle, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`left-0 right-0 z-[70] transition-all duration-300 ${
      isOpen ? "fixed inset-0 bg-[#FFF5F8]/95" : "sticky top-0"
    } ${
      isScrolled && !isOpen
        ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-soft)] border-b border-[#593A48]/5" 
        : "bg-transparent shadow-none border-b-0 border-transparent"
    }`}>
      {/* Mobile Top Info Bar - Business Hours */}
      <div className={`flex md:hidden w-full items-center justify-center py-2 text-[#F05C88] text-[10px] tracking-widest font-sans font-bold transition-all duration-300 border-b border-[#F05C88]/10 bg-[#FFF0F4]`}>
        <span>{lang === "cn" ? "营业时间：早上10点 - 晚上11点" : "Hours: 10:00 AM - 11:00 PM"}</span>
      </div>

      {/* Top Info Bar - Hidden on mobile */}
      <div className={`hidden md:flex border-b text-[#593A48]/70 text-[11px] tracking-widest font-sans font-medium transition-all duration-300 ${
        isScrolled 
          ? "bg-[#FCEEF2] border-[#593A48]/5" 
          : "bg-transparent border-transparent"
      }`}>
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
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#F05C88]" />
              <span>{lang === "cn" ? "电话: " : "Phone: "}</span>
              <a href="tel:0225391339" className="hover:text-[#F05C88] transition-colors font-bold text-[#593A48]">022-5391339</a>
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={12} className="text-[#F05C88]" />
              <span>{lang === "cn" ? "微信: " : "WeChat: "}</span>
              <span className="font-bold text-[#593A48] select-all">Angelya3312 | Angel91339</span>
            </span>
          </div>
        </div>
      </div>
 
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-3 md:py-4">
        <nav className="relative z-10 flex items-center justify-between w-full">
          <Link href="/" className={`${isScrolled || pathname !== "/" ? "flex" : "hidden md:flex"} items-center group`}>
            <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[65px] transition-transform duration-500 group-hover:scale-105">
              <BrandLogo className="w-full h-full" />
            </div>
          </Link>
        
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.2em] font-sans text-[#593A48]/80 font-semibold">
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

          {/* Desktop Language Selector Pill */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={toggleLang} 
              className="px-3.5 py-1.5 border border-[#593A48]/20 rounded-full hover:text-[#F05C88] hover:border-[#F05C88] hover:bg-[#FFF5F8] transition-all duration-300 text-[10px] font-sans font-bold flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(89,58,72,0.04)]"
            >
              <span>{lang === "cn" ? "EN" : "中"}</span>
            </button>
          </div>

          {/* Mobile Navigation Controls: Pill and Icon */}
          <div className="flex md:hidden items-center gap-3.5 ml-auto md:ml-0">
            {/* Language Selector Pill */}
            <button 
              onClick={toggleLang} 
              className="px-4.5 py-1.5 rounded-full border border-[#F05C88]/30 bg-white/40 text-[#593A48] hover:text-[#F05C88] font-bold text-xs font-sans hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_2px_6px_rgba(240,92,136,0.06)]"
            >
              {lang === "cn" ? "EN" : "中"}
            </button>

            {/* Hamburger / Menu toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-[#F05C88] hover:scale-105 active:scale-95 transition-all duration-300 z-[80]"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
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
      </div>
    </header>
  );
};

export default Navbar;
