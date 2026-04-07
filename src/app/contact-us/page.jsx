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
    <div className="p-8 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-sm flex flex-col gap-4">
      <div className="w-12 h-12 rounded-full bg-[#F84A88]/10 border border-[#F84A88]/20 flex items-center justify-center text-[#F84A88]">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif text-[#15030A] font-playfair">{title}</h3>
      <p className="text-sm text-[#15030A]/60 leading-relaxed font-sans">{desc}</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FFE4EC] pt-44 transition-colors duration-700">
      
      {/* Erotic Header Banner */}
      <header className="relative w-full h-[340px] md:h-[450px] flex flex-col justify-end -mt-32 mb-6 md:mb-12 overflow-hidden border-b border-[#F84A88]/20 bg-[#FFE4EC]">
        {/* Background Erotic Image */}
        <div className="absolute inset-0 z-0 bg-[#FFE4EC]">
          <img 
            src="/images/header-bg-custom.jpg" 
            alt="Sensual Concierge Background" 
            className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#F84A88]/5 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC] via-[#FFE4EC]/20 to-[#FFE4EC]" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 mt-12 mb-6 max-w-4xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-6xl font-serif drop-shadow-[0_0_15px_rgba(248,74,136,0.3)] italic font-playfair tracking-wider">
            {t.concierge.title.includes(' ') ? (
              <>
                <span className="text-[#15030A]">{t.concierge.title.split(' ')[0]}</span>{' '}
                <span className="text-[#F84A88]">{t.concierge.title.split(' ')[1]}</span>
              </>
            ) : (
              <span className="text-[#F84A88]">{t.concierge.title}</span>
            )}
          </h1>
          <p className="hidden md:block text-[#15030A]/70 leading-relaxed font-sans text-xs md:text-sm mt-8 max-w-2xl mx-auto px-6">
            {t.concierge.subtitle}
          </p>
        </div>

        <ContactBanner />
      </header>

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
          <div className="relative p-12 bg-white/40 border border-white/60 backdrop-blur-3xl text-center flex flex-col items-center">
            <h2 className="text-3xl font-serif text-[#15030A] mb-8 font-playfair tracking-wide italic">{t.concierge.ctaTitle}</h2>
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
                className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105"
              >
                <Send size={18} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">Telegram</span>
              </a>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信在线客服</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">Angelya3312</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信防走失</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">nice325888</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105 cursor-pointer">
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">微信备用号</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">hjmgrdss</span>
              </div>
              <a 
                href="https://line.me/ti/p/angle666akl"
                className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans">LINE 咨询</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-sans">angle666akl</span>
              </a>
              <a 
                href="tel:0225391339"
                className="flex items-center justify-center gap-3 py-4 bg-white/60 border border-white/80 text-[#15030A] rounded-xl hover:bg-white/80 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold font-sans">022 539 1339</span>
              </a>
            </div>
            <p className="mt-8 text-[10px] text-[#15030A]/50 uppercase tracking-[0.3em] font-sans italic">
              {t.concierge.ctaEncrypted}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConciergePage;
