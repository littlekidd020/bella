"use client";

import React from "react";
import Link from "next/link";
import { girls as defaultGirls } from "@/lib/data";
import GirlCard from "./GirlCard";
import { useLanguage } from "@/context/LanguageContext";

const GirlGrid = ({ limit, showCTA = false, girls = defaultGirls, showIntro = false }) => {
  const { t, lang } = useLanguage();

  const filteredGirls = girls.filter(model => model.status !== "hidden" && model.status !== "deleted");
  const displayedGirls = limit ? filteredGirls.slice(0, limit) : filteredGirls;

  return (
    <section className="px-8 pb-0 md:pb-12 max-w-7xl mx-auto mt-4 md:mt-16">
      {/* Intro Text */}
      {showIntro && (
        <div className="mb-6 md:mb-16 text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="hidden md:block text-2xl font-serif italic text-[#2D1822]/80 leading-relaxed font-playfair transition-all duration-700">
            {lang === "cn" ? (
              "推门而入，喧嚣在外，这里是身份与品味的无声共鸣，不为喧宾夺主，只为让身处其中的每一个人，都能找到属于自己的——。"
            ) : (
              "A curated selection of the most sophisticated and refined talent, dedicated to the art of relaxation."
            )}
          </p>
          <div className="mt-0 md:mt-10 mb-2 w-full flex justify-center px-4">
            <Link 
              href="/collection" 
              className="text-[#F84A88] font-serif italic text-lg hover:text-[#F84A88] transition-colors duration-500"
            >
              {lang === "cn" ? "查看所有女生" : "View Collection"} →
            </Link>
          </div>
          <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] text-[#F84A88] mt-4 md:mt-8 font-sans font-bold">
            {t.grid.newCollection}
          </h2>
          <div className="w-16 h-[1px] bg-[#F84A88] mx-auto mt-4 mb-2" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 transition-all duration-700 auto-rows-[380px]">
        {displayedGirls.map((model, index) => {
          let spanClasses = "col-span-1 row-span-1";
          
          if (index === 0) {
            // First item: large feature (left half on desktop, full top on tablet)
            spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2";
          } else if (index === 1 || index === 2) {
            // Second and third items: stacked on the right half on desktop
            spanClasses = "col-span-1 md:col-span-1 lg:col-span-2 row-span-1";
          } else if (index === 3 || index === 6) {
            spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 row-span-1";
          } else if (index === 4) {
            spanClasses = "col-span-1 md:row-span-2";
          }

          return (
            <div 
              key={model.id}
              className={`${spanClasses} h-full group w-full`}
            >
              <Link href={`/girl/${model.id}`} className="flex flex-col w-full h-full relative group">
                <GirlCard model={model} isLarge={index === 0} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      {showCTA && (
        <div className="mt-12 md:mt-16 flex justify-center w-full px-6">
          <Link 
            href="/collection"
            className="group relative inline-block text-center border border-[#F84A88]/30 hover:border-[#F84A88] w-full max-w-[300px] md:max-w-[340px] py-3.5 md:py-4 transition-all duration-500 overflow-hidden rounded-full bg-[#FAF5F7]/30 backdrop-blur-sm shadow-[0_4px_20px_rgba(248,74,136,0.08)]"
          >
            <span className="relative z-10 text-base tracking-[0.4em] md:tracking-[0.5em] text-[#F84A88] group-hover:text-white transition-colors duration-500 font-sans font-bold">
              {lang === "cn" ? "查看所有女生" : "VIEW COLLECTION"}
            </span>
            <div className="absolute inset-0 bg-[#F84A88] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default GirlGrid;
