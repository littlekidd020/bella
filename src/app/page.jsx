"use client";

import GirlGrid from "@/components/girl/GirlGrid";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import ContactBanner from "@/components/layout/ContactBanner";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FFE4EC] overflow-x-hidden pt-44 transition-all duration-700">
      {/* Cinematic Erotic Hero Banner */}
      <header className="relative w-full h-[270px] md:h-[400px] flex flex-col justify-end -mt-32 mb-12 overflow-hidden">
        {/* Background Sensual Image */}
        <div className="absolute inset-0 z-0 bg-[#FFE4EC]">
          <img 
            src="/images/header-bg-custom.jpg" 
            alt="Sensual Boutique Background" 
            className="w-full h-full object-cover opacity-85 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#F84A88]/5 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC] via-[#FFE4EC]/20 to-[#FFE4EC]" />
        </div>
        <ContactBanner />
      </header>
      
      {/* Model Grid Section */}
      <GirlGrid 
        limit={6} 
        showCTA={true} 
        showIntro={true} 
        girls={require("@/lib/data").girls.filter(m => m.isOnHomepage !== false)} 
      />

      {/* Trust & Quality Footer Callout */}
      <section className="relative px-8 py-32 mt-32 border-y border-[#F84A88]/20 overflow-hidden">
        {/* Background Erotic Image for Text Block */}
        <div className="absolute inset-0 z-0 bg-[#FFE4EC]">
          <img 
            src="/images/footer-bg-custom.jpg" 
            alt="Custom Erotic Background" 
            className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#F84A88]/5 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC]/80 via-[#FFE4EC]/40 to-[#FFE4EC]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12 bg-white/60 backdrop-blur-lg p-10 md:p-14 rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-3xl font-serif text-[#15030A] tracking-wide italic font-playfair drop-shadow-sm">{t.grid.standard}</h3>
          <p className="text-[#15030A]/70 leading-relaxed font-sans max-w-2xl mx-auto text-sm">
            {t.grid.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[#F84A88] uppercase tracking-widest text-[11px] font-bold drop-shadow-md">
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.verification}</span>
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.discreet}</span>
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.vip}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
