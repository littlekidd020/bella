"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GirlCard = ({ model }) => {
  const isAvailable = model.status === "available";
  const { t, lang } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <img
          src={model.image}
          alt={model.name.en}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a040d]/90 via-[#1a040d]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {model.location && (
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md border border-[#F84A88]/40 px-3 py-1.5 rounded-full">
            <MapPin size={12} className="text-[#F84A88]" />
            <span className="text-[10px] uppercase tracking-widest font-sans text-white/90 font-bold">
              {t.girl.locations[model.location] || model.location}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-serif text-white tracking-wide italic font-playfair">
                {model.name[lang] || model.name.en}
              </h3>
              {isAvailable && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-rose-pulse absolute inline-flex h-full w-full rounded-full bg-[#F84A88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F84A88]"></span>
                </span>
              )}
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-sans">
              {model.stats.age ? `${model.stats.age}${t.girl.ageUnit} • ` : ''}
              {t.girl.nationalities[model.stats.nationality] || model.stats.nationality}
            </p>
          </div>
          
          <div className="text-right shrink-0">
            <p className="text-lg font-serif text-[#F84A88] font-playfair">
              {typeof model.stats.cup === 'string' ? model.stats.cup.replace("(Natural)", t.girl.natural) : model.stats.cup}
            </p>
            <p className="text-[8px] uppercase tracking-widest text-[#F84A88]/60 font-sans">{t.girl.breast}</p>
          </div>
        </div>

        {/* About Text Preview */}
        <p className="text-white/70 text-xs font-sans leading-relaxed line-clamp-2 border-l-2 border-[#F84A88]/40 pl-3">
          {model.description[lang] || model.description.en}
        </p>
      </div>
      
      {/* Editorial Border Overlay On Hover */}
      <div className="absolute inset-0 border border-[#F84A88]/0 group-hover:border-[#F84A88]/20 transition-all duration-700 m-3 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

export default GirlCard;
