"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#C4687E] border-t border-white/10 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end">
          
          <div className="md:col-span-5 flex flex-col items-start gap-8">
            <img src="/images/logo-icon.svg" className="w-12 h-12 opacity-90 brightness-0 invert hover:opacity-100 transition-opacity duration-700" alt="Angel Cuties" />
            <div className="space-y-2 text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-white italic opacity-95">{t.footer?.title || t.hero.title}</h2>
              <p className="text-[10px] md:text-xs text-white/80 uppercase tracking-[0.4em] font-medium">
                {t.footer?.bespokeService || "High-End Bespoke Service"}
              </p>
            </div>
          </div>
 
          <div className="md:col-span-7 flex flex-col md:items-end gap-12">
            <div className="text-left md:text-right space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60 font-bold mb-2">
                {t.footer?.hoursLabel || "Service Hours"}
              </p>
              <p className="text-sm md:text-base font-serif italic text-white">
                {t.nav.hours || "早上10点 - 晚上11点"}
              </p>
            </div>
 
            <div className="w-full h-px bg-white/10" />
 
            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-6">
              <p className="text-[10px] text-white/65 tracking-[0.2em] uppercase">
                &copy; 2026 {t.hero.title}. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-white/70">
                <a href="/collection" className="hover:text-white transition-colors">{t.footer?.collection || "Collection"}</a>
                <a href="/contact-us" className="hover:text-white transition-colors">{t.footer?.contact || "Contact"}</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
