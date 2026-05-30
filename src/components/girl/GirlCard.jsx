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
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
        <img
          src={model.image}
          alt={model.name.en}
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-white/90 via-white/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Top Badges */}
      <div className="absolute top-6 left-6 flex gap-2">
        {model.location && (
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-[#F84A88]/20 px-3 py-1.5 rounded-full shadow-sm">
            <MapPin size={12} className="text-[#F84A88]" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-[#2D1822]/90 font-bold">
              {t.girl.locations[model.location] || model.location}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex flex-col gap-2">
          
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3">
              <h3 className={`${isLarge ? 'text-2xl md:text-4xl' : 'text-2xl'} font-serif text-[#2D1822] tracking-wide italic font-bold`}>
                {model.name[lang] || model.name.en}
              </h3>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold font-sans tracking-[0.2em] bg-[#FFFFFF]/60 border border-[#F84A88]/20 backdrop-blur-md ${isAvailable ? 'text-[#F84A88]' : 'text-[#2D1822]/50'}`}>
                {isAvailable ? t.girl.available : t.girl.unavailable}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D1822]/70 font-sans font-medium">
              {model.stats.age ? `${model.stats.age}${t.girl.ageUnit} • ` : ''}
              {t.girl.nationalities[model.stats.nationality] || model.stats.nationality}
            </p>
            
            <div className="flex items-baseline gap-1">
              <p className={`${isLarge ? 'text-base md:text-xl' : 'text-base'} font-serif text-[#C5A059] font-bold`}>
                {typeof model.stats.cup === 'string' ? model.stats.cup.replace("(Natural)", t.girl.natural) : model.stats.cup}
              </p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#2D1822]/50 font-sans">{t.girl.breast}</p>
            </div>
          </div>

        </div>

        {/* About Text Preview */}
        <div className={`${isLarge ? 'block' : 'hidden max-md:block'} mt-4 border-l border-[#F84A88]/30 pl-4`}>
          <p className="text-[#2D1822]/70 text-xs font-sans leading-relaxed line-clamp-2">
            {model.description[lang] || model.description.en}
          </p>
        </div>
      </div>
      
      {/* Editorial Hover Glow */}
      <div className="absolute inset-0 border-2 border-[#F84A88]/0 group-hover:border-[#F84A88]/20 transition-all duration-700 pointer-events-none rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F84A88]/0 via-transparent to-[#C5A059]/0 group-hover:from-[#F84A88]/5 group-hover:to-[#C5A059]/5 transition-all duration-700 pointer-events-none" />
    </>
  );
};

export default GirlCard;
