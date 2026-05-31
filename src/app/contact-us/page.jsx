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

import { useLanguage } from "@/context/LanguageContext";
import ContactBanner from "@/components/layout/ContactBanner";

const ConciergePage = () => {
  const { t } = useLanguage();

  const Feature = ({ icon: Icon, title, desc }) => (
    <div className="card rounded-2xl p-8 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-500">
      <div className="w-12 h-12 rounded-full bg-[#FFE3EC] flex items-center justify-center text-[#F84A88]">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif text-[#2D1822] font-playfair">{title}</h3>
      <p className="text-sm text-[#2D1822]/55 leading-relaxed font-sans">{desc}</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FFE3EC] transition-colors duration-700">
      
      {/* Editorial Header Banner */}
      <header className="relative w-full h-[220px] md:h-[360px] flex items-center justify-center overflow-hidden border-b border-[#F84A88]/10 bg-[#FFE3EC] mb-0 md:mb-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#FFE3EC]">
          <img 
            src="/images/header-bg-custom.webp" 
            alt="Sensual Concierge Background" 
            className="w-full h-full object-cover object-top opacity-50 parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFE3EC] via-[#FFE3EC]/60 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-20 md:pt-24 px-4 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D1822] italic opacity-90 drop-shadow-md">
            {t.concierge.title}
          </h1>
          <div className="w-20 h-[1px] bg-[#F84A88] mx-auto mt-6" />
          <p className="hidden md:block text-[#F84A88] uppercase tracking-[0.4em] font-medium text-xs mt-6 max-w-2xl mx-auto px-6">
            {t.concierge.subtitle}
          </p>
        </div>
      </header>

      <ContactBanner />

      <section className="max-w-7xl mx-auto py-8 md:py-16 px-8">

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
          <div className="relative card-elevated rounded-3xl p-12 text-center flex flex-col items-center">
            <h2 className="text-3xl font-serif text-[#2D1822] mb-8 font-playfair tracking-wide italic">{t.concierge.ctaTitle}</h2>
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
                className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105"
              >
                <Send size={18} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">Telegram</span>
              </a>
              <div className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信在线客服</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">Angelya3312</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信防走失</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">nice325888</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信备用号</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">hjmgrdss</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信客服2</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">Angel51339</span>
              </div>
              <a 
                href="https://line.me/ti/p/angle666akl"
                className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">LINE 咨询</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">angle666akl</span>
              </a>
              <a 
                href="tel:0225391339"
                className="flex items-center justify-center gap-3 py-4 bg-[#FFFFFF]/60 border border-[#F84A88]/15 text-[#2D1822] rounded-xl hover:bg-[#FFFFFF]/80 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold font-sans">022 539 1339</span>
              </a>
            </div>
            <p className="mt-8 text-[10px] text-[#2D1822]/40 uppercase tracking-[0.3em] font-sans italic">
              {t.concierge.ctaEncrypted}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConciergePage;
