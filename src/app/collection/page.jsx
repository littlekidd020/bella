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
    <main className="min-h-screen bg-[#FFE3EC] transition-colors duration-700">
      {/* Editorial Header Banner */}
      <header className="relative w-full flex items-center justify-center overflow-hidden border-b border-[#F05C88]/10 bg-[#FFE3EC] -mt-6 md:-mt-10 mb-0 md:mb-10">
        <div className="relative w-full md:w-[23.33%] mx-auto flex justify-center px-8 md:px-0">
          <div 
            className="relative w-full overflow-hidden rounded-2xl md:rounded-none"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 8px, black calc(100% - 8px), transparent), linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8px, black calc(100% - 8px), transparent), linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)',
              WebkitMaskComposite: 'source-in'
            }}
          >
            <img 
              src="/images/collection-hero-banner.webp" 
              alt="心动女生" 
              className="w-full h-auto object-contain"
            />
            {/* Inset shadow to blur the bounding box into the page background */}
            <div className="absolute inset-0 shadow-[inset_0_0_12px_8px_#FFE3EC] pointer-events-none" />
          </div>
        </div>
      </header>
      
      {/* Search/Filter Bar */}
      <section className="w-full mt-8 md:mt-0 mb-8 md:mb-16 max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 pb-2 md:pb-0">
          {locations.map((loc) => {
            const label = loc === "All" 
              ? (lang === "cn" ? "全部" : "All")
              : (t.girl.locations[loc] || loc);
            
            return (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`whitespace-nowrap shrink-0 px-6 py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 font-bold border ${
                  activeFilter === loc 
                    ? "bg-[#F05C88] text-white border-[#F05C88] shadow-[0_4px_12px_rgba(240,92,136,0.3)]" 
                    : "bg-[#FFE3EC]/30 backdrop-blur-sm text-[#593A48]/70 border-[#F05C88]/20 hover:border-[#F05C88]/40 hover:text-[#593A48] hover:bg-[#FFE3EC]/60 shadow-[0_2px_8px_rgba(89,58,72,0.04)]"
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
      <main className="min-h-screen bg-[#FFE3EC] flex items-center justify-center">
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
