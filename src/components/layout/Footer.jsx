"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import BrandLogo from "@/components/common/BrandLogo";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#593A48] border-t border-[#F05C88]/20 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-end">
          
          <div className="md:col-span-5 flex flex-col items-start gap-8">
            <img src="/images/logo-icon.svg" className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity duration-700" alt="Angel Cuties" />
            <div className="space-y-2 text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-white italic opacity-90">{t.footer?.title || t.hero.title}</h2>
              <p className="text-[10px] md:text-xs text-[#F05C88] uppercase tracking-[0.4em] font-medium">
                {t.footer?.bespokeService || "High-End Bespoke Service"}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:items-end gap-12">
            <div className="text-left md:text-right space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-bold mb-2">
                {t.footer?.hoursLabel || "Service Hours"}
              </p>
              <p className="text-sm md:text-base font-serif italic text-[#F05C88]">
                {t.nav.hours || "早上10点 - 晚上11点"}
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F05C88]/30 to-transparent md:via-white/10 md:to-white/10" />

            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-6">
              <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase">
                &copy; 2026 {t.hero.title}. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-white/40">
                <a href="/collection" className="hover:text-[#F05C88] transition-colors">{t.footer?.collection || "Collection"}</a>
                <a href="/contact-us" className="hover:text-[#F05C88] transition-colors">{t.footer?.contact || "Contact"}</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
