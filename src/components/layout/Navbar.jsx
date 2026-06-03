"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Phone, MessageCircle, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Navbar = () => {
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
          <Link href="/" className="flex items-center group">
            <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[65px] transition-transform duration-500 group-hover:scale-105">
              <BrandLogo className="w-full h-full" />
            </div>
          </Link>
        
          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-8 text-[11px] md:text-[13px] uppercase tracking-[0.1em] md:tracking-[0.2em] font-sans text-[#593A48]/80 font-semibold">
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

          {/* Right Controls - Language Selector Pill */}
          <div className="flex items-center">
            <button 
              onClick={toggleLang} 
              className="px-4 py-1.5 border border-[#593A48]/20 rounded-full hover:text-[#F05C88] hover:border-[#F05C88] hover:bg-[#FFF5F8] transition-all duration-300 text-[11px] font-sans font-extrabold flex items-center gap-2 bg-white shadow-[0_2px_6px_rgba(89,58,72,0.04)]"
            >
              <Globe size={12} className="text-[#F05C88]" />
              <span className="tracking-wider leading-none mt-[0.5px]">{lang === "cn" ? "EN" : "中"}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
