"use client";

import React from "react";
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ContactBanner from "@/components/layout/ContactBanner";

const ConciergePage = () => {
  const { t } = useLanguage();

  const Feature = ({ icon: Icon, title, desc }) => (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-full bg-[#F84A88]/10 border border-[#F84A88]/20 flex items-center justify-center text-[#F84A88]">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif text-white font-playfair">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed font-sans">{desc}</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#3D0A1E] pt-44 transition-colors duration-700">
      
      {/* Erotic Header Banner */}
      <header className="relative w-full h-[480px] md:h-[450px] flex flex-col justify-end -mt-32 mb-12 overflow-hidden border-b border-[#F84A88]/20 bg-[#15030A]">
        {/* Background Erotic Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/images/home-hero-bg.png" 
            alt="Sensual Concierge Background" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Top and Bottom gradient fade so it blends perfectly into the site */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3D0A1E] via-[#3D0A1E]/30 to-[#3D0A1E]" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 mt-24 mb-12 max-w-4xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-6xl font-serif drop-shadow-[0_0_15px_rgba(248,74,136,0.3)] italic font-playfair tracking-wider">
            {t.concierge.title.includes(' ') ? (
              <>
                <span className="text-white">{t.concierge.title.split(' ')[0]}</span>{' '}
                <span className="text-[#F84A88]">{t.concierge.title.split(' ')[1]}</span>
              </>
            ) : (
              <span className="text-[#F84A88]">{t.concierge.title}</span>
            )}
          </h1>
          <p className="text-white/70 leading-relaxed font-sans text-xs md:text-sm mt-8 max-w-2xl mx-auto px-6">
            {t.concierge.subtitle}
          </p>
        </div>

        <ContactBanner />
      </header>

      <section className="max-w-7xl mx-auto py-16 px-8">

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <Feature 
            icon={Clock} 
            title={t.concierge.feat1Title} 
            desc={t.concierge.feat1Desc}
          />
          <Feature 
            icon={ShieldCheck} 
            title={t.concierge.feat2Title} 
            desc={t.concierge.feat2Desc}
          />
          <Feature 
            icon={MapPin} 
            title={t.concierge.feat3Title} 
            desc={t.concierge.feat3Desc}
          />
        </div>

        {/* Contact Funnel Section */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#F84A88]/10 blur-3xl rounded-full" />
          <div className="relative p-12 bg-white/5 border border-white/10 backdrop-blur-3xl text-center flex flex-col items-center">
            <h2 className="text-3xl font-serif text-white mb-8 font-playfair tracking-wide italic">{t.concierge.ctaTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <a 
                href="https://wa.me/64225391339"
                className="flex items-center justify-center gap-3 py-4 bg-[#F84A88] text-white rounded-xl hover:bg-[#D41E5D] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(248,74,136,0.3)]"
              >
                <MessageCircle size={20} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">WhatsApp</span>
              </a>
              <a 
                href="https://t.me/Angel_3312"
                className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
              >
                <Send size={18} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">Telegram</span>
              </a>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信在线客服</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">Angelya3312</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信防走失</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">nice325888</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信备用号</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">hjmgrdss</span>
              </div>
              <a 
                href="https://line.me/ti/p/angle666akl"
                className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">LINE 咨询</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">angle666akl</span>
              </a>
              <a 
                href="tel:0225391339"
                className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold font-sans">022 539 1339</span>
              </a>
            </div>
            <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.3em] font-sans italic">
              {t.concierge.ctaEncrypted}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConciergePage;
