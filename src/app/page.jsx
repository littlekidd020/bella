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
        <div className="absolute inset-0 z-0 bg-[#15030A]">
          <img 
            src="/images/home-hero-bg.png" 
            alt="Sensual Boutique Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#260613] via-[#260613]/50 to-transparent" />
        </div>

        <ContactBanner />
      </header>
      
      {/* Model Grid Section */}
      <ModelGrid />

      {/* Trust & Quality Footer Callout */}
      <section className="relative px-8 py-32 mt-32 border-y border-[#F84A88]/20 overflow-hidden">
        {/* Background Erotic Image for Text Block */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/images/sensual_bg.png" 
            alt="Custom Erotic Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Top and Bottom gradient fade so it blends perfectly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3D0A1E] via-transparent to-[#3D0A1E]" />
          {/* Slight darkening over the whole thing for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <h3 className="text-3xl font-serif text-white tracking-wide italic font-playfair drop-shadow-lg">{t.grid.standard}</h3>
          <p className="text-white/80 leading-relaxed font-sans max-w-2xl mx-auto text-sm drop-shadow-md">
            {t.grid.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[#F84A88] uppercase tracking-widest text-[8px] font-bold drop-shadow-md">
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.verification}</span>
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.discreet}</span>
            <span className="border-b border-[#F84A88]/50 pb-2">{t.grid.vip}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
