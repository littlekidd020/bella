"use client";

import GirlGrid from "@/components/girl/GirlGrid";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import ContactBanner from "@/components/layout/ContactBanner";
import Link from "next/link";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FDF6F8] overflow-x-hidden transition-all duration-700">
      
      {/* Full Bleed Asymmetrical Hero */}
      <header className="relative w-full h-[80vh] lg:h-[90vh] flex flex-col overflow-hidden bg-[#FDF6F8]">
        {/* Background Image - Girl on the right */}
        <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0 overflow-hidden">
          <img 
            src="/images/header-bg-custom.png" 
            alt="Hero Angel" 
            className="w-full h-full object-cover object-[center_top] lg:object-[center_top] opacity-90"
          />
          {/* Gradient to blend with left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F8] via-[#FDF6F8]/80 to-transparent hidden lg:block" />
          {/* Vertical gradients for mobile and bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6F8] via-[#FDF6F8]/30 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6F8] via-transparent to-transparent hidden lg:block h-32 bottom-0 top-auto" />
        </div>
        
        {/* Left Faint Wing Watermark */}
        <div className="absolute top-[10%] left-[5%] md:left-[2%] w-[200px] md:w-[350px] lg:w-[450px] aspect-square pointer-events-none select-none opacity-[0.12] md:opacity-20 z-0">
          <svg viewBox="0 0 200 200" fill="none" stroke="#F05C88" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            {/* Detailed Left Wing path */}
            <path d="M180,160 C150,140 100,70 60,70 C45,70 30,85 20,100" strokeWidth="2.5" />
            <path d="M60,70 C40,55 20,65 10,85 C15,80 25,80 30,85" />
            <path d="M75,80 C55,60 30,70 20,95 C25,90 35,90 40,95" />
            <path d="M90,90 C70,70 45,80 35,105 C40,100 50,100 55,105" />
            <path d="M105,100 C85,80 60,90 50,115 C55,110 65,110 70,115" />
            <path d="M120,110 C100,95 80,105 70,130 C75,125 85,125 90,130" />
            <path d="M135,120 C115,105 95,115 85,140 C90,135 100,135 105,140" />
            <path d="M150,130 C130,115 110,125 100,150 C105,145 115,145 120,150" />
            <path d="M160,140 C145,130 130,138 122,160 C126,155 134,155 138,160" />
            <path d="M170,150 C158,140 145,148 138,170 C142,165 148,165 152,170" />
            <path d="M90,85 C75,75 60,90 55,100" strokeWidth="0.8" opacity="0.6" />
            <path d="M105,95 C90,85 75,100 70,110" strokeWidth="0.8" opacity="0.6" />
            <path d="M120,105 C105,95 90,110 85,120" strokeWidth="0.8" opacity="0.6" />
          </svg>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 lg:pt-0 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start pt-10">
            
            <h1 className="font-serif leading-tight mb-8">
              <span className="font-bold tracking-[0.15em] block whitespace-nowrap text-5xl md:text-6xl lg:text-7xl mb-4 text-[#B07C91]">心动女生</span>
              <span className="font-bold tracking-[0.15em] block whitespace-nowrap text-4xl md:text-5xl lg:text-6xl text-[#593A48]">遇见你的专属天使</span>
            </h1>
            
            <div className="flex flex-col items-center lg:items-start mt-4 space-y-4">
              <p className="text-[#593A48] text-sm md:text-base font-sans tracking-[0.3em]">
                高品质 · 高颜值 · 高素养
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 w-full lg:w-auto py-2 opacity-60">
                <div className="w-8 md:w-12 h-[1px] bg-[#F05C88]/40" />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#F05C88"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <div className="w-8 md:w-12 h-[1px] bg-[#F05C88]/40" />
              </div>

              <p className="text-[#593A48]/70 text-xs md:text-sm font-sans tracking-[0.2em] mb-4">
                用心服务 · 只为你给最好的体验
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact-us" 
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-[#F05C88] text-white rounded-full font-sans text-sm tracking-[0.2em] hover:bg-[#E8356E] transition-all duration-300 shadow-[0_8px_20px_rgba(240,92,136,0.3)]"
              >
                <span>立即预约</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#F05C88] group-hover:scale-110 transition-transform duration-300">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* Area Selection Section */}
      <section className="relative px-6 md:px-10 pt-16 pb-8 max-w-7xl mx-auto z-20">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-[#EAC9D4]" />
          <div className="w-2 h-2 rounded-full bg-[#EAC9D4]" />
          <h2 className="text-xl md:text-2xl font-serif text-[#785461] tracking-widest px-2">
            选择你所在的区域
          </h2>
          <div className="w-2 h-2 rounded-full bg-[#EAC9D4]" />
          <div className="w-12 h-[1px] bg-[#EAC9D4]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { label: "全部", en: "ALL AREAS", img: "/images/header-bg-custom.jpg" },
            { label: "市区", en: "DOWNTOWN", img: "/images/header-bg-custom.jpg" },
            { label: "中区", en: "CENTRAL", img: "/images/header-bg-custom.jpg" },
            { label: "北岸", en: "NORTH SHORE", img: "/images/header-bg-custom.jpg" },
            { label: "东区", en: "EAST AREA", img: "/images/header-bg-custom.jpg" }
          ].map((area, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-1 transition-all duration-500 shadow-[0_8px_20px_rgba(240,92,136,0.15)]">
              <img src={area.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={area.label} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D6547B]/90 via-[#E46B8F]/70 to-[#EE82A0]/50" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold tracking-widest text-white drop-shadow-md mb-2">{area.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/90 drop-shadow-sm">{area.en}</span>
                <div className="mt-4 w-6 h-[1px] bg-white/60" />
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Model Grid Section */}
      <div className="pt-10 pb-0 md:pt-24 md:pb-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#593A48]">
            {t.grid.newCollection}
          </h2>
          <div className="w-16 h-[1px] bg-[#F05C88] mx-auto mt-6" />
        </div>
        <GirlGrid 
          limit={3} 
          showCTA={true} 
          showIntro={false} 
        />
      </div>

      {/* Bento Grid Trust Section */}
      <section className="relative px-6 md:px-10 pt-12 md:pt-12 pb-32 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-serif text-[#593A48] italic mb-4">{t.grid.standard}</h3>
          <p className="text-[#593A48]/60 font-sans tracking-[0.1em]">{t.grid.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 md:col-span-2 group hover:-translate-y-1 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-[#F05C88]/10 flex items-center justify-center text-[#F05C88] mb-4 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="text-2xl font-serif text-[#593A48]">{t.grid.verification}</h4>
            <p className="text-[#593A48]/50 text-sm leading-relaxed">{t.grid.verificationDesc}</p>
          </div>

          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 group hover:-translate-y-1 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-[#F05C88]/10 flex items-center justify-center text-[#F05C88] mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h4 className="text-2xl font-serif text-[#593A48]">{t.grid.discreet}</h4>
            <p className="text-[#593A48]/50 text-sm leading-relaxed">{t.grid.discreetDesc}</p>
          </div>

          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 md:col-span-3 lg:col-span-3 border-t-2 border-[#F05C88]/30 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#F05C88]/10 to-transparent opacity-50 rounded-tl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#593A48] italic mb-2">{t.grid.vip}</h4>
                <p className="text-[#593A48]/50 text-sm max-w-md">{t.grid.vipDesc}</p>
              </div>
              <a href="/contact-us" className="px-8 py-4 bg-[#593A48] text-[#F05C88] rounded-full font-bold tracking-widest text-xs hover:bg-[#1A0E13] hover:text-white transition-colors duration-300 text-center uppercase">
                {t.grid.discoverMore}
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
