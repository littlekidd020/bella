"use client";

import ModelGrid from "@/components/model/ModelGrid";
import { useLanguage } from "@/context/LanguageContext";
import ContactBanner from "@/components/layout/ContactBanner";

export default function CollectionPage() {
  const { t } = useLanguage();

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
          <p className="text-white/90 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-sm mt-6 font-sans drop-shadow-md">
            {t.grid.intro.slice(0, 30)}...
          </p>
        </div>

        <ContactBanner />
      </header>
      <ModelGrid />
    </main>
  );
}
