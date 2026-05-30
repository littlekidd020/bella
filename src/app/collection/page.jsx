"use client";

import { useState } from "react";
import GirlGrid from "@/components/girl/GirlGrid";
import { useLanguage } from "@/context/LanguageContext";

import { girls } from "@/lib/data";

const locations = ["All", "CBD", "Central", "North", "East"];

export default function CollectionPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGirls = activeFilter === "All" 
    ? girls 
    : girls.filter(m => m.location === activeFilter);

  return (
    <main className="min-h-screen bg-[#FAF5F7] transition-colors duration-700">
      {/* Editorial Header Banner */}
      <header className="relative w-full h-[220px] md:h-[360px] flex items-center justify-center overflow-hidden border-b border-[#F84A88]/10 bg-[#FAF5F7] mb-0 md:mb-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#FAF5F7]">
          <img 
            src="/images/header-bg-custom.webp" 
            alt="Sensual Collection Background" 
            className="w-full h-full object-cover object-top opacity-50 parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5F7] via-[#FAF5F7]/60 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-20 md:pt-24 px-4 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D1822] italic opacity-90 drop-shadow-md">
            {t.nav.collection}
          </h1>
          <div className="w-20 h-[1px] bg-[#C5A059] mx-auto mt-6" />
          <p className="hidden md:block text-[#C5A059] uppercase tracking-[0.4em] font-medium text-xs mt-6 max-w-2xl mx-auto px-6">
            {activeFilter === "All" 
              ? "A Curated Selection of Sophisticated Companions"
              : `${activeFilter === "All" ? (lang === "cn" ? "全部" : "All") : (t.girl.locations[activeFilter] || activeFilter)} Collection`}
          </p>
        </div>
      </header>
      
      {/* Search/Filter Bar */}
      <section className="w-full mb-8 md:mb-16 max-w-7xl mx-auto px-8">
        <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 md:gap-8 overflow-x-auto pb-2 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          {locations.map((loc) => {
            const label = loc === "All" 
              ? (lang === "cn" ? "全部" : "All")
              : (t.girl.locations[loc] || loc);
            
            return (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`whitespace-nowrap shrink-0 snap-start px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 font-bold border ${
                  activeFilter === loc 
                    ? "bg-[#2D1822] text-white border-[#2D1822] shadow-[0_4px_12px_rgba(45,24,34,0.15)]" 
                    : "bg-transparent text-[#2D1822]/50 border border-[#2D1822]/10 hover:border-[#2D1822]/30 hover:text-[#2D1822]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <GirlGrid girls={filteredGirls} />
    </main>
  );
}
