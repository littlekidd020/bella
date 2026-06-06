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
      
      {/* Desktop Hero Section - Full Bleed Asymmetrical */}
      <header className="hidden lg:flex relative w-full h-[80vh] lg:h-[90vh] flex-col overflow-hidden bg-[#FDF6F8]">
        {/* Background Image - Girl on the right */}
        <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0 overflow-hidden">
          <img 
            src="/images/header-bg-custom.jpg" 
            alt="Hero Angel" 
            className="w-full h-full object-cover object-[80%_0%] lg:object-[80%_0%] opacity-100"
          />
          {/* Gradient to blend with left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F8] via-[#FDF6F8]/40 to-transparent" />
          {/* Vertical gradients for mobile and bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6F8] via-transparent to-transparent h-32 bottom-0 top-auto" />
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
                href="/collection" 
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-[#F05C88] text-white rounded-full font-sans text-sm tracking-[0.2em] hover:bg-[#E8356E] transition-all duration-300 shadow-[0_8px_20px_rgba(240,92,136,0.3)]"
              >
                <span>{lang === "cn" ? "查看所有女生" : "VIEW COLLECTION"}</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#F05C88] group-hover:scale-110 transition-transform duration-300">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Hero Section - Replicating Mockup */}
      <header className="lg:hidden relative w-full flex flex-col pt-0 pb-6 bg-gradient-to-b from-[#FFF0F4] to-[#FDF6F8] px-5 overflow-hidden z-10">
        {/* Soft Background Petals & Cloud Effect */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-50 z-0">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-[#F05C88]/20 rounded-full blur-[1px]" />
          <div className="absolute top-24 right-[15%] w-2.5 h-4 bg-[#F05C88]/30 rounded-full rotate-45" />
          <div className="absolute bottom-16 left-[20%] w-4 h-2.5 bg-[#F05C88]/20 rounded-full -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-[#FFF0F4]/60 blur-3xl pointer-events-none rounded-full z-0" />
        
        {/* Top branding layout: Flat image of the cartoon banner with blurred bounding box */}
        <div className="relative z-10 w-full mt-0 flex justify-center overflow-hidden">
          <img 
            src="/images/mobile-hero-banner.png" 
            alt="天使小可爱 - Little Angel Cutie" 
            className="w-full h-auto object-contain"
          />
          {/* Inset shadow to blur the bounding box into the pink background */}
          <div className="absolute inset-0 shadow-[inset_0_0_24px_16px_#FFF0F4] pointer-events-none" />
        </div>

        {/* Bento Gradient Card */}
        <div className="relative z-10 w-full -mt-6 bg-gradient-to-br from-[#FF497E] via-[#E51B5C] to-[#C00D41] rounded-[2rem] p-5 shadow-[0_12px_28px_rgba(229,27,92,0.22)] border border-white/20 flex items-center gap-4 overflow-hidden">
          {/* Left Column: White Circle with Fairy Logo */}
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(255,255,255,0.4)] border border-white/30">
            <img 
              src="/images/logo-icon.svg" 
              alt="Angel Icon" 
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Right Column: Text & Contacts */}
          <div className="flex-1 flex flex-col text-left text-white overflow-hidden">
            <h3 className="text-[16px] font-bold tracking-wide leading-tight">
              专业接线 纽澳独家精品资源
            </h3>
            <p className="text-[12px] text-white/90 tracking-widest mt-1 font-sans">
              尊贵 • 隐秘 • 奢界
            </p>

            {/* Dashed Separator Line */}
            <div className="w-full border-t border-dashed border-white/30 my-2" />

            {/* Contact Details */}
            <div className="flex flex-col gap-1.5 font-sans text-xs">
              {/* Phone Row */}
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-white/80 flex-shrink-0" />
                <span>电话: </span>
                <a href="tel:0225391339" className="font-extrabold tracking-wider hover:underline">
                  022-5391339
                </a>
              </div>

              {/* WeChat Row */}
              <div className="flex items-center gap-2 overflow-hidden">
                <MessageCircle size={12} className="text-white/80 flex-shrink-0" />
                <span>微信: </span>
                <span className="font-extrabold tracking-wide select-all truncate">
                  Angelya3312 / Angel91339
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View Collection Action Button */}
        <div className="relative z-10 w-full flex justify-center mt-6">
          <Link 
            href="/collection" 
            className="group relative flex items-center justify-center gap-3 w-full py-3.5 bg-white hover:bg-[#FFF5F8] text-[#F05C88] rounded-full font-sans text-[13px] font-extrabold tracking-[0.2em] transition-all duration-300 shadow-[0_6px_18px_rgba(240,92,136,0.12)] active:scale-95 border border-[#F05C88]/10"
          >
            <span className="text-xs">ʚ</span>
            <span>查看所有女生</span>
            <span className="text-xs">ɞ</span>
          </Link>
        </div>
      </header>

      {/* Area Selection Section */}
      <section className="hidden md:block relative px-6 md:px-10 pt-16 pb-8 max-w-7xl mx-auto z-20">
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
        <div className="text-center mb-8 md:mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#593A48] font-bold tracking-widest">
            {t.grid.newCollection}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#F05C88]">
            <span className="hidden md:block w-16 h-[1px] bg-[#F05C88]/60" />
            <span className="text-xs">♥</span>
            <span className="hidden md:block w-16 h-[1px] bg-[#F05C88]/60" />
          </div>
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
              <a 
                href="/contact-us" 
                className="group relative inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-[#F05C88] text-white rounded-full font-sans text-sm tracking-[0.2em] hover:bg-[#E8356E] transition-all duration-300 shadow-[0_8px_20px_rgba(240,92,136,0.3)] text-center"
              >
                <span>{t.grid.discoverMore}</span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white group-hover:scale-110 transition-transform duration-300">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
