"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GirlGrid from "@/components/girl/GirlGrid";
import { useLanguage } from "@/context/LanguageContext";

import { girls } from "@/lib/data";

const locations = ["All", "CBD", "Central", "North", "East"];

function CollectionContent() {
  const { t, lang } = useLanguage();
  const searchParams = useSearchParams();
  const areaParam = searchParams.get("area");
  const [activeFilter, setActiveFilter] = useState(
    areaParam && locations.includes(areaParam) ? areaParam : "All"
  );

  useEffect(() => {
    if (areaParam && locations.includes(areaParam)) {
      setActiveFilter(areaParam);
    }
  }, [areaParam]);

  const filteredGirls = activeFilter === "All" 
    ? girls 
    : girls.filter(m => m.location === activeFilter);

  return (
    <main className="min-h-screen bg-[#FFF5F8] transition-colors duration-700">
      {/* Editorial Header Banner */}
      <header className="relative w-full flex items-center justify-center overflow-hidden border-b border-[#F05C88]/10 bg-[#FFF5F8] mb-0 md:mb-10">
        <div className="relative w-full md:w-[23.33%] mx-auto flex justify-center px-8 md:px-0">
          <div 
            className="relative w-full overflow-hidden rounded-2xl md:rounded-none"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent), linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent), linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              WebkitMaskComposite: 'source-in'
            }}
          >
            <img 
              src="/images/collection-hero-banner.png" 
              alt="心动女生" 
              className="w-full h-auto object-contain"
            />
            {/* Inset shadow to blur the bounding box into the page background */}
            <div className="absolute inset-0 shadow-[inset_0_0_24px_16px_#FFF5F8] pointer-events-none" />
          </div>
        </div>
      </header>
      
      {/* Search/Filter Bar */}
      <section className="w-full mt-8 md:mt-0 mb-8 md:mb-16 max-w-7xl mx-auto px-8">
        <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 md:gap-8 overflow-x-auto pb-2 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
          {locations.map((loc) => {
            const label = loc === "All" 
              ? (lang === "cn" ? "全部" : "All")
              : (t.girl.locations[loc] || loc);
            
            return (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`whitespace-nowrap shrink-0 snap-start px-6 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 font-bold border ${
                  activeFilter === loc 
                    ? "bg-[#F05C88] text-white border-[#F05C88] shadow-[0_4px_12px_rgba(240,92,136,0.3)]" 
                    : "bg-[#FFF5F8]/30 backdrop-blur-sm text-[#593A48]/70 border-[#F05C88]/20 hover:border-[#F05C88]/40 hover:text-[#593A48] hover:bg-[#FFF5F8]/60 shadow-[0_2px_8px_rgba(89,58,72,0.04)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <GirlGrid girls={filteredGirls} sortRestingLast={true} />
    </main>
  );
}

export default function CollectionPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#FFF5F8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#F05C88]/30 border-t-[#F05C88] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#593A48]/60 text-sm tracking-wider uppercase font-bold">Loading Collection...</p>
        </div>
      </main>
    }>
      <CollectionContent />
    </Suspense>
  );
}
