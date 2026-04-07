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
    <section className="px-8 pb-24 max-w-7xl mx-auto mt-12 md:mt-16">
      {/* Intro Text */}
      {showIntro && (
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-2xl font-serif italic text-[#15030A]/80 leading-relaxed font-playfair transition-all duration-700">
            {lang === "cn" ? (
              "推门而入，喧嚣在外，这里是身份与品味的无声共鸣，不为喧宾夺主，只为让身处其中的每一个人，都能找到属于自己的——。"
            ) : (
              "A curated selection of the most sophisticated and refined talent, dedicated to the art of relaxation."
            )}
          </p>
          <div className="mt-10 mb-2">
            <Link 
              href="/collection" 
              className="inline-block border border-[#F84A88]/60 text-[#F84A88] px-10 py-3.5 text-sm md:text-base tracking-[0.4em] font-sans font-bold hover:bg-[#F84A88]/5 transition-colors duration-300"
            >
              {lang === "cn" ? "选 择 心 动 女 生" : "VIEW COLLECTION"}
            </Link>
          </div>
          <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-[#F84A88] mt-12 md:mt-16 font-sans font-bold drop-shadow-sm">
            {t.grid.newCollection}
          </h2>
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
