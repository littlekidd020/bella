"use client";

import React from "react";
import Link from "next/link";
import { models as defaultModels } from "@/lib/data";
import ModelCard from "./ModelCard";
import { useLanguage } from "@/context/LanguageContext";

const ModelGrid = ({ limit, showCTA = false, models = defaultModels }) => {
  const { t } = useLanguage();

  const displayedModels = limit ? models.slice(0, limit) : models;

  return (
    <section className="px-8 pb-24 max-w-7xl mx-auto mt-24">


      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">
        {displayedModels.map((model, index) => (
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

export default ModelGrid;
