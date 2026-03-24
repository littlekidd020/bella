"use client";

import { useState } from "react";
import ModelGrid from "@/components/model/ModelGrid";
import { useLanguage } from "@/context/LanguageContext";
import ContactBanner from "@/components/layout/ContactBanner";
import { models } from "@/lib/data";

const locations = ["All", "CBD", "Central", "North", "West", "East"];

export default function CollectionPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredModels = activeFilter === "All" 
    ? models 
    : models.filter(m => m.location === activeFilter);

  return (
    <main className="min-h-screen bg-[#3D0A1E] pt-32 transition-colors duration-700">
      {/* Erotic Header Banner */}
      <header className="relative w-full h-[350px] md:h-[450px] flex flex-col justify-end -mt-32 mb-16 overflow-hidden border-b border-[#F84A88]/20 bg-[#15030A]">
        {/* Background Erotic Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/images/home-hero-bg.png" 
            alt="Sensual Collection Background" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Top and Bottom gradient fade so it blends perfectly into the site */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3D0A1E] via-[#3D0A1E]/30 to-[#3D0A1E]" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 mt-32 max-w-4xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#F84A88] drop-shadow-[0_0_15px_rgba(248,74,136,0.5)] italic font-playfair tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-500">
            {t.nav.collection}
          </h1>
          <p className="text-white/90 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[11px] md:text-sm mt-6 font-sans drop-shadow-md">
            {activeFilter === "All" 
              ? `${t.grid.intro.slice(0, 30)}...` 
              : `${activeFilter === "All" ? (lang === "cn" ? "全部" : "All") : (t.model.locations[activeFilter] || activeFilter)} ${t.nav.collection}`}
          </p>
        </div>

        <ContactBanner />
      </header>
      
      {/* Search/Filter Bar */}
      <section className="px-8 mb-16 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {locations.map((loc) => {
            const label = loc === "All" 
              ? (lang === "cn" ? "全部" : "All")
              : (t.model.locations[loc] || loc);
            
            return (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 font-bold border ${
                  activeFilter === loc 
                    ? "bg-[#F84A88] text-white border-[#F84A88] shadow-[0_0_15px_rgba(248,74,136,0.4)]" 
                    : "bg-white/5 text-white/40 border-white/10 hover:border-[#F84A88]/40 hover:text-white/80"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <ModelGrid models={filteredModels} />
    </main>
  );
}
