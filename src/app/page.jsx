"use client";

import ModelGrid from "@/components/model/ModelGrid";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import ContactBanner from "@/components/layout/ContactBanner";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#3D0A1E] overflow-x-hidden pt-32 transition-all duration-700">
      {/* Cinematic Erotic Hero Banner */}
      <header className="relative w-full h-[350px] md:h-[400px] flex flex-col justify-end -mt-32 mb-12 overflow-hidden">
        {/* Background Sensual Image */}
        <div className="absolute inset-0 z-0 bg-white">
          <img 
            src="/images/home-hero-bg.png" 
            alt="Sensual Boutique Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        <ContactBanner />
      </header>
      
      {/* Model Grid Section */}
      <ModelGrid limit={6} showCTA={true} showIntro={true} />

      {/* Trust & Quality Footer Callout */}
      <section className="relative px-8 py-32 mt-32 border-y border-rose/10 overflow-hidden">
        {/* Background Erotic Image for Text Block */}
        <div className="absolute inset-0 z-0 bg-white">
          <img 
            src="/images/sensual_bg.png" 
            alt="Custom Erotic Background" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Top and Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <h3 className="text-3xl font-serif text-charcoal tracking-wide italic font-playfair drop-shadow-sm">{t.grid.standard}</h3>
          <p className="text-charcoal/70 leading-relaxed font-sans max-w-2xl mx-auto text-sm drop-shadow-sm">
            {t.grid.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-rose uppercase tracking-widest text-[11px] font-bold drop-shadow-sm">
            <span className="border-b border-rose/30 pb-2">{t.grid.verification}</span>
            <span className="border-b border-rose/30 pb-2">{t.grid.discreet}</span>
            <span className="border-b border-rose/30 pb-2">{t.grid.vip}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
