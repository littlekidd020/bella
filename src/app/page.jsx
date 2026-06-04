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
            src="/images/header-bg-custom.jpg" 
            alt="Hero Angel" 
            className="w-full h-full object-cover object-[80%_0%] lg:object-[80%_0%] opacity-100"
          />
          {/* Gradient to blend with left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F8] via-[#FDF6F8]/40 to-transparent hidden lg:block" />
          {/* Vertical gradients for mobile and bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6F8] via-[#FDF6F8]/20 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6F8] via-transparent to-transparent hidden lg:block h-32 bottom-0 top-auto" />
        </div>
        
        

        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-16 lg:pt-0 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl text-left flex flex-col items-start pt-10">
            
            <h1 className="font-serif leading-tight mb-6">
              <span className="font-bold tracking-[0.15em] block whitespace-nowrap text-5xl md:text-6xl lg:text-7xl mb-3 text-[#C4687E]">心动女生</span>
              <span className="font-bold tracking-[0.15em] block whitespace-nowrap text-4xl md:text-5xl lg:text-6xl text-[#C4687E]">遇见你的专属天使</span>
            </h1>
            
            <div className="flex flex-col items-center mt-2 space-y-3">
              <p className="text-[#9E6B7B] text-sm md:text-base font-sans tracking-[0.3em]">
                高品质 · 高颜值 · 高素养
              </p>
              
              <div className="flex items-center gap-4 my-1 w-full">
                <div className="flex-1 h-[1px] bg-[#E8779A]/40" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#E8779A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <div className="flex-1 h-[1px] bg-[#E8779A]/40" />
              </div>

              <p className="text-[#9E6B7B]/80 text-xs md:text-sm font-sans tracking-[0.2em] mb-4">
                用心服务 · 只为给你最好的体验
              </p>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/contact-us" 
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-[#F05C88] text-white rounded-full font-sans text-sm tracking-[0.2em] hover:bg-[#E8356E] transition-all duration-300 shadow-[0_8px_20px_rgba(240,92,136,0.3)]"
              >
                <span>立即预约</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/30 text-white group-hover:scale-110 transition-transform duration-300">
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
            { label: "全部", en: "ALL AREAS", img: "/images/area-all.png", filter: "All" },
            { label: "市区", en: "DOWNTOWN", img: "/images/area-downtown.png", filter: "CBD" },
            { label: "中区", en: "CENTRAL", img: "/images/area-central.png", filter: "Central" },
            { label: "北岸", en: "NORTH SHORE", img: "/images/area-north-shore.png", filter: "North" },
            { label: "东区", en: "EAST AREA", img: "/images/area-east.png", filter: "East" }
          ].map((area, idx) => (
            <Link key={idx} href={`/collection${area.filter !== "All" ? `?area=${area.filter}` : ""}`} className="relative rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-1 transition-all duration-500 shadow-[0_8px_20px_rgba(240,92,136,0.15)]">
              <img src={area.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={area.label} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D6547B]/90 via-[#E46B8F]/70 to-[#EE82A0]/50" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xl md:text-2xl font-bold tracking-widest text-white drop-shadow-md mb-2">{lang === "cn" ? area.label : area.en}</span>
                <div className="mt-4 w-6 h-[1px] bg-white/60" />
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
            </Link>
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
