"use client";

import React from "react";
import Link from "next/link";
import { models } from "@/lib/data";
import ModelCard from "./ModelCard";
import { useLanguage } from "@/context/LanguageContext";

const ModelGrid = () => {
  const { t } = useLanguage();

  return (
    <section className="px-8 pb-24 max-w-7xl mx-auto mt-24">
      {/* Intro Text */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#F84A88] mb-4 font-sans font-bold">
          {t.grid.newCollection}
        </h2>
        <p className="text-3xl font-serif italic text-white/90 leading-relaxed font-playfair transition-all duration-700">
          {t.grid.intro}
        </p>
      </div>

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">
        {models.map((model, index) => (
          <div 
            key={model.id}
            className={`${
              index % 3 === 1 ? "md:translate-y-12" : ""
            } ${
              index % 3 === 2 ? "lg:translate-y-24" : ""
            }`}
          >
            <Link href={`/model/${model.id}`}>
              <ModelCard model={model} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelGrid;
