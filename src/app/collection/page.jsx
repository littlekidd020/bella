"use client";

import { useState } from "react";
import GirlGrid from "@/components/girl/GirlGrid";
import { useLanguage } from "@/context/LanguageContext";
import ContactBanner from "@/components/layout/ContactBanner";
import { girls } from "@/lib/data";

const locations = ["All", "CBD", "Central", "North", "East"];

export default function CollectionPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGirls = activeFilter === "All" 
    ? girls 
    : girls.filter(m => m.location === activeFilter);

  return (
    <main className="min-h-screen bg-[#FFE4EC] pt-44 transition-colors duration-700">
      {/* Erotic Header Banner */}
      <header className="relative w-full h-[480px] md:h-[450px] flex flex-col justify-end -mt-32 mb-16 overflow-hidden border-b border-[#F84A88]/20 bg-[#FFE4EC]">
        {/* Background Erotic Image */}
        <div className="absolute inset-0 z-0 bg-[#FFE4EC]">
          <img 
            src="/images/header-bg-custom.jpg" 
            alt="Sensual Collection Background" 
            className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#F84A88]/5 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC] via-[#FFE4EC]/20 to-[#FFE4EC]" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 mt-24 mb-12 max-w-4xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#F84A88] drop-shadow-[0_0_15px_rgba(248,74,136,0.3)] italic font-playfair tracking-wider">
            {t.nav.collection}
          </h1>
          <p className="text-[#15030A]/70 leading-relaxed font-sans text-xs md:text-sm mt-8 max-w-2xl mx-auto px-6">
            {activeFilter === "All" 
              ? t.grid.intro 
              : `${activeFilter === "All" ? (lang === "cn" ? "全部" : "All") : (t.girl.locations[activeFilter] || activeFilter)} ${t.nav.collection}`}
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
              : (t.girl.locations[loc] || loc);
            
            return (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 font-bold border ${
                  activeFilter === loc 
                    ? "bg-[#F84A88] text-white border-[#F84A88] shadow-[0_0_15px_rgba(248,74,136,0.4)]" 
                    : "bg-white/40 text-[#15030A]/50 border-[#F84A88]/20 hover:border-[#F84A88]/40 hover:text-[#15030A] shadow-sm backdrop-blur-sm"
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
