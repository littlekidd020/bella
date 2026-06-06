"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GirlCard = ({ model, isLarge = false }) => {
  const isAvailable = model.status === "available";
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Background Image Container with Shadow */}
      <div className="relative w-full flex-1 min-h-0 rounded-2xl shadow-[0_12px_30px_rgba(89,58,72,0.12)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(240,92,136,0.25)]">
        {/* Inner Overflow-Hidden Container for Image Zoom */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
            <img
              src={model.image}
              alt={model.name.en}
              className="w-full h-full object-cover object-[center_25%] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          
          {/* Editorial Hover Glow Overlay (inside the crop area) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F05C88]/0 via-transparent to-[#F05C88]/0 group-hover:from-[#F05C88]/5 group-hover:to-[#F05C88]/5 transition-all duration-700 pointer-events-none" />
        </div>
        
        {/* Top Badges (overlayed on top of the card structure) */}
        <div className="absolute top-4 left-4 flex gap-2">
          {model.location && (
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-[#F05C88]/20 px-2.5 py-1 rounded-full shadow-sm">
              <MapPin size={10} className="text-[#F05C88]" />
              <span className="text-[8px] uppercase tracking-[0.2em] font-sans text-[#593A48]/90 font-bold">
                {t.girl.locations[model.location] || model.location}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="pt-3 pb-1 px-1 flex flex-col gap-1.5 shrink-0 bg-transparent">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className={`${isLarge ? 'text-xl md:text-2xl' : 'text-lg'} font-serif text-[#593A48] tracking-wide italic font-bold leading-none`}>
              {model.name[lang] || model.name.en}
            </h3>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-bold font-sans tracking-[0.15em] bg-white/60 border border-[#F05C88]/15 backdrop-blur-sm ${isAvailable ? 'text-[#F05C88]' : 'text-[#593A48]/50'}`}>
              {isAvailable ? t.girl.available : t.girl.unavailable}
            </span>
          </div>
          
          <div className="flex items-baseline gap-0.5 shrink-0">
            <p className={`${isLarge ? 'text-sm md:text-base' : 'text-sm'} font-serif text-[#F05C88] font-bold`}>
              {typeof model.stats.cup === 'string' ? model.stats.cup.replace("(Natural)", t.girl.natural) : model.stats.cup}
            </p>
            <p className="text-[7px] uppercase tracking-[0.1em] text-[#593A48]/50 font-sans">{t.girl.breast}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#593A48]/70 font-sans font-medium">
          <p className="uppercase tracking-[0.15em] leading-none">
            {model.stats.age ? `${model.stats.age}${t.girl.ageUnit} • ` : ''}
            {t.girl.nationalities[model.stats.nationality] || model.stats.nationality}
          </p>
        </div>

        {/* About Text Preview */}
        <div className="mt-1.5 border-l border-[#F05C88]/30 pl-3">
          <p className="text-[#593A48]/70 text-[11px] font-sans leading-relaxed line-clamp-2">
            {model.description[lang] || model.description.en}
          </p>
        </div>
      </div>
    </>
  );
};

export default GirlCard;
