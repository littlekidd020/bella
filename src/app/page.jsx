"use client";

import GirlGrid from "@/components/girl/GirlGrid";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import ContactBanner from "@/components/layout/ContactBanner";
import Link from "next/link";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FFE3EC] overflow-x-hidden transition-all duration-700">
      
      {/* Asymmetrical Editorial Hero */}
      <header className="relative w-full min-h-[auto] lg:min-h-screen flex flex-col overflow-hidden">
        {/* Background Image & Gradient Overlay (Matching other page header dimensions) */}
        <div className="absolute top-0 left-0 right-0 h-[220px] md:h-[360px] z-0 bg-[#FFE3EC] border-b border-[#F84A88]/10 overflow-hidden">
          <img 
            src="/images/header-bg-custom.jpg" 
            alt="Sensual Homepage Background" 
            className="w-full h-full object-cover object-top opacity-50 parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFE3EC] via-[#FFE3EC]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-40 lg:pt-40 flex-1 items-center">
          
          {/* Typography Block */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-0 lg:space-y-8 z-20 order-2 lg:order-1 pb-0 lg:pb-0 text-center lg:text-left items-center lg:items-start">
            <p className="hidden lg:block text-[10px] uppercase tracking-[0.4em] text-[#F84A88] font-sans font-bold mb-6">{t.hero.bespokeCompanions || "BESPOKE COMPANIONS"}</p>
            <h1 className="hidden lg:block text-5xl md:text-7xl lg:text-8xl font-serif text-[#2D1822] leading-[0.95] mb-8">
              {lang === "cn" ? (
                <>
                  <span className="font-bold tracking-widest block whitespace-nowrap">推门而入</span>
                  <span className="font-bold tracking-widest block mt-2 whitespace-nowrap">喧嚣在外</span>
                </>
              ) : (
                <>
                  <span className="italic opacity-80 block">Bespoke</span>
                  <span className="font-bold">Elegance</span>
                </>
              )}
            </h1>
            <p className="hidden lg:block text-[#2D1822]/60 text-sm md:text-base font-sans tracking-[0.1em] leading-relaxed max-w-md border-l border-[#F84A88]/40 pl-6">
              {lang === "cn" ? 
                "这里是身份与品味的无声共鸣，不为喧宾夺主，只为让身处其中的每一个人，都能找到属于自己的——。" : 
                "A curated selection of the most sophisticated and refined talent, dedicated to the art of relaxation."}
            </p>
            <div className="hidden lg:flex pt-0 lg:pt-4 w-full justify-center lg:justify-start">
              <Link 
                href="/collection" 
                className="group relative inline-block text-center border border-[#F84A88]/30 hover:border-[#F84A88] w-full max-w-[280px] md:max-w-[340px] py-3.5 md:py-4 transition-all duration-500 overflow-hidden rounded-full bg-[#FAF5F7]/30 backdrop-blur-sm shadow-[0_4px_20px_rgba(248,74,136,0.08)]"
              >
                <span className="relative z-10 text-base tracking-[0.4em] md:tracking-[0.5em] text-[#F84A88] group-hover:text-white transition-colors duration-500 font-sans font-bold">
                  {lang === "cn" ? "查看所有女生" : "VIEW COLLECTION"}
                </span>
                <div className="absolute inset-0 bg-[#F84A88] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>

          {/* Masked Image Panel */}
          <div className="hidden lg:block lg:col-span-7 relative h-[50vh] lg:h-[80vh] w-full rounded-[60px] overflow-hidden border border-[#F84A88]/20 shadow-[0_20px_50px_rgba(248,74,136,0.10)] order-1 lg:order-2">
            <img 
              src="/images/header-bg-custom.webp" 
              alt="Sensual Boutique Background" 
              className="w-full h-full object-cover object-top opacity-80 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE3EC]/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Full width Contact Banner at the bottom */}
        <div className="w-full mt-auto pt-0 lg:pt-16 relative z-20 flex flex-col items-center">
          <ContactBanner />
          
          {/* Mobile-only CTA button below the banner */}
          <div className="flex lg:hidden pt-4 pb-0 w-full justify-center px-6">
            <Link 
              href="/collection" 
              className="group relative inline-block text-center border border-[#F84A88]/30 hover:border-[#F84A88] w-full max-w-[280px] py-3.5 transition-all duration-500 overflow-hidden rounded-full bg-[#FAF5F7]/30 backdrop-blur-sm shadow-[0_4px_20px_rgba(248,74,136,0.08)]"
            >
              <span className="relative z-10 text-base tracking-[0.4em] text-[#F84A88] group-hover:text-white transition-colors duration-500 font-sans font-bold">
                {lang === "cn" ? "查看所有女生" : "VIEW COLLECTION"}
              </span>
              <div className="absolute inset-0 bg-[#F84A88] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </header>
      
      {/* Model Grid Section */}
      <div className="pt-10 pb-0 md:pt-24 md:pb-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#2D1822]">
            {t.grid.newCollection}
          </h2>
          <div className="w-16 h-[1px] bg-[#F84A88] mx-auto mt-6" />
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
          <h3 className="text-4xl md:text-5xl font-serif text-[#2D1822] italic mb-4">{t.grid.standard}</h3>
          <p className="text-[#2D1822]/60 font-sans tracking-[0.1em]">{t.grid.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 md:col-span-2 group hover:-translate-y-1 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-[#F84A88]/5 flex items-center justify-center text-[#F84A88] mb-4 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="text-2xl font-serif text-[#2D1822]">{t.grid.verification}</h4>
            <p className="text-[#2D1822]/50 text-sm leading-relaxed">{t.grid.verificationDesc}</p>
          </div>

          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 group hover:-translate-y-1 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-[#F84A88]/5 flex items-center justify-center text-[#F84A88] mb-4 group-hover:scale-110 transition-transform">
               <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h4 className="text-2xl font-serif text-[#2D1822]">{t.grid.discreet}</h4>
            <p className="text-[#2D1822]/50 text-sm leading-relaxed">{t.grid.discreetDesc}</p>
          </div>

          <div className="card-elevated rounded-3xl p-10 md:p-12 flex flex-col items-start gap-4 md:col-span-3 lg:col-span-3 border-t-2 border-[#F84A88]/30 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#F84A88]/10 to-transparent opacity-50 rounded-tl-full group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#2D1822] italic mb-2">{t.grid.vip}</h4>
                <p className="text-[#2D1822]/50 text-sm max-w-md">{t.grid.vipDesc}</p>
              </div>
              <a href="/contact-us" className="px-8 py-4 bg-[#2D1822] text-[#FFE3EC] rounded-full font-bold tracking-widest text-xs hover:bg-[#D41E5D] hover:text-white transition-colors duration-300 text-center uppercase">
                {t.grid.discoverMore}
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
