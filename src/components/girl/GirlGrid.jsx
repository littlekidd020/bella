"use client";

import React from "react";
import Link from "next/link";
import { girls as defaultGirls } from "@/lib/data";
import GirlCard from "./GirlCard";
import { useLanguage } from "@/context/LanguageContext";

const GirlGrid = ({ limit, showCTA = false, girls = defaultGirls, showIntro = false }) => {
  const { t, lang } = useLanguage();

  const displayedGirls = limit ? girls.slice(0, limit) : girls;

  return (
    <section className="px-8 pb-24 max-w-7xl mx-auto mt-24">
      {/* Intro Text */}
      {showIntro && (
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-[#F84A88] mb-4 font-sans font-bold">
            {t.grid.newCollection}
          </h2>
          <p className="text-3xl font-serif italic text-[#15030A]/80 leading-relaxed font-playfair transition-all duration-700">
            {lang === "cn" ? (
              <>
                我们精选了一系列优雅精致的高端模特，致力于为您提供艺术级的放松体验。
                <Link href="/collection" className="text-[#F84A88] hover:text-[#15030A] transition-all duration-300 ml-1 underline decoration-[#F84A88]/30 underline-offset-4">选择心动女生</Link>
              </>
            ) : (
              <>
                A curated selection of the most sophisticated and refined talent, dedicated to the art of relaxation.
                <Link href="/collection" className="text-[#F84A88] hover:text-[#15030A] transition-all duration-300 ml-1 underline decoration-[#F84A88]/30 underline-offset-4">View all girls</Link>
              </>
            )}
          </p>
        </div>
      )}  {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">
        {displayedGirls.map((model, index) => (
          <div 
            key={model.id}
            className={`${
              index % 3 === 1 ? "md:translate-y-12" : ""
            } ${
              index % 3 === 2 ? "lg:translate-y-24" : ""
            }`}
          >
            <Link href={`/girl/${model.id}`}>
              <GirlCard model={model} />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {showCTA && (
        <div className="mt-32 flex justify-center">
          <Link 
            href="/collection"
            className="group relative px-12 py-4 bg-transparent border border-[#F84A88]/30 hover:border-[#F84A88] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-xs uppercase tracking-[0.4em] text-[#F84A88] group-hover:text-white transition-colors duration-500 font-bold">
              {t.grid.viewAll}
            </span>
            <div className="absolute inset-0 bg-[#F84A88] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default GirlGrid;
