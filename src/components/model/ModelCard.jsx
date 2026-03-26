"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ModelCard = ({ model }) => {
  const isAvailable = model.status === "available";
  const { t, lang } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
        <img
          src={model.image}
          alt={model.name.en}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {model.location && (
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md border border-rose/20 px-3 py-1.5 rounded-full shadow-sm">
            <MapPin size={12} className="text-rose" />
            <span className="text-[10px] uppercase tracking-widest font-sans text-charcoal/90 font-bold">
              {t.model.locations[model.location] || model.location}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-serif text-charcoal tracking-wide italic font-playfair">
                {model.name[lang] || model.name.en}
              </h3>
              {isAvailable && (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-rose-pulse absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose"></span>
                </span>
              )}
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60 font-sans font-medium">
              {model.stats.age}{t.model.ageUnit} • {t.model.nationalities[model.stats.nationality] || model.stats.nationality}
            </p>
          </div>
          
          <div className="text-right shrink-0">
            <p className="text-lg font-serif text-rose font-playfair">{model.stats.cup}</p>
            <p className="text-[8px] uppercase tracking-widest text-rose/60 font-sans font-bold">{t.model.breast}</p>
          </div>
        </div>

        {/* About Text Preview */}
        <p className="text-charcoal/70 text-xs font-sans leading-relaxed line-clamp-2 border-l-2 border-rose/30 pl-3 italic">
          {model.description[lang] || model.description.en}
        </p>
      </div>
      
      {/* Editorial Border Overlay On Hover */}
      <div className="absolute inset-0 border-2 border-rose/0 group-hover:border-rose/10 transition-all duration-700 m-3 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

export default ModelCard;
