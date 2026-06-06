"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { girls } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Calendar,
  Globe,
  Ruler,
  Weight,
  Heart,
  Play,
  Banknote,
  Sparkles,
  MessageCircle,
  MessageSquare,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import TrustVideo from "@/components/girl/TrustVideo";
import WeChatQRModal from "@/components/common/WeChatQRModal";
import ImageModal from "@/components/common/ImageModal";

const StatItem = ({ icon: Icon, label, value, t }) => {
  const displayValue =
    typeof value === "string"
      ? value.replace("(Natural)", t.girl.natural)
      : value;
  return (
    <div className="flex flex-col gap-2.5 p-5 md:p-6 rounded-2xl bg-white/35 backdrop-blur-md border border-[#F05C88]/15 shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all duration-500">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-[#F05C88]" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#F05C88] font-bold">
          {label}
        </span>
      </div>
      <p className="text-3xl font-serif text-[#593A48]">
        {displayValue}
      </p>
    </div>
  );
};

const getGalleryDesc = (idx, lang) => {
  const descs = {
    en: [
      "Artistic Portrait",
      "Sweet & Candid",
      "Sultry Figure",
      "Alluring Close-up",
      "Elegant Silhouette",
      "Authentic Snapshot",
      "Bespoke Showcase",
      "Exclusive Capture"
    ],
    cn: [
      "私享艺术大片",
      "清甜生活自拍",
      "魅惑身段特写",
      "绝美细节瞬间",
      "极致优雅定格",
      "官方真实认证",
      "高端奢华呈现",
      "独家专属映像"
    ]
  };
  const list = descs[lang] || descs.en;
  return list[idx % list.length];
};

export default function GirlDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t, lang } = useLanguage();
  const [model, setModel] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const foundModel = girls.find((m) => m.id === parseInt(id));
    if (
      foundModel &&
      foundModel.status !== "hidden" &&
      foundModel.status !== "deleted"
    ) {
      setModel(foundModel);
    } else {
      router.push("/collection"); // redirect if not found or hidden
    }
  }, [id, router]);

  if (!model) return <div className="min-h-screen bg-[#FFE3EC]" />;

  const isAvailable = model.status === "available";
  const uniqueGallery = model ? (model.gallery || []).filter((img) => img !== model.image) : [];
  const allImages = model ? [model.image, ...uniqueGallery] : [];
  const displayGallery = model.video ? allImages : uniqueGallery;

  const openImageModal = (idx) => {
    setImageIdx(idx);
    setSelectedImage(true);
  };

  const nextImage = () => setImageIdx((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setImageIdx((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <main className="min-h-screen bg-[#FFE3EC] pb-20 md:pb-32 relative">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 hidden lg:block">
        <img 
          src={model.image} 
          alt={model.name.en} 
          className="w-full h-full object-cover object-top opacity-[0.12] blur-[3px] transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFE3EC] via-[#FFE3EC]/90 to-[#FFE3EC]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFE3EC] via-transparent to-[#FFE3EC]" />
      </div>

      {/* Main Content Grid */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pt-8 lg:pt-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column: Sticky Title & Main Portrait */}
        <div className="lg:col-span-5 relative h-full">
          <div className="sticky top-32 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back + Location */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => router.back()}
                  className="p-2.5 text-[#593A48]/50 hover:text-[#F05C88] transition-colors duration-300 group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                {model.location && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#593A48]/8 rounded-full">
                    <MapPin size={12} className="text-[#F05C88]" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-[#593A48]/70 font-bold">
                      {t.girl.locations[model.location] || model.location}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-serif text-[#593A48] font-bold italic leading-[0.95]">
                {model.name[lang] || model.name.en}
              </h1>
              
              <div className="flex items-center gap-4 mt-6">
                <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold font-sans tracking-[0.15em] bg-white border ${isAvailable ? "border-[#F05C88]/20 text-[#F05C88]" : "border-[#593A48]/10 text-[#593A48]/40"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-[#F05C88]" : "bg-[#593A48]/30"}`} />
                  {isAvailable ? t.girl.available : t.girl.unavailable}
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#F05C88] font-bold font-sans">
                  {t.girl.nationalities[model.stats.nationality] || model.stats.nationality}
                  {model.stats.age && ` · ${model.stats.age}${t.girl.ageUnit}`}
                </p>
              </div>
            </motion.div>

            {/* Main Media Placeholder (Desktop) */}
            {model.video ? (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block w-full rounded-3xl overflow-hidden border-2 border-white shadow-[var(--shadow-lifted)] mt-12"
              >
                <TrustVideo src={model.video} poster={model.image} />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => openImageModal(0)}
                className="hidden lg:block relative aspect-[3/4] w-full rounded-3xl overflow-hidden border-2 border-white shadow-[var(--shadow-lifted)] cursor-zoom-in group mt-12"
              >
                <img 
                  src={model.image} 
                  alt={`${model.name.en} Portrait`} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Column: Details & Gallery */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 mt-0 pb-20 lg:pb-32">
          
          <div className="space-y-6 lg:space-y-10">
            
            {/* About Section */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#F05C88] font-bold font-sans flex items-center gap-2">
                <MessageCircle size={12} className="text-[#F05C88]" /> {t.girl.about}
              </h4>
              <p className="border-l-2 border-[#F05C88]/30 pl-5 text-[#593A48]/70 leading-[1.8] font-sans text-sm md:text-base tracking-wide">
                {model.description && typeof model.description === "object"
                  ? model.description[lang] || model.description.en
                  : model.description || "A dedicated professional offering a personalized and refined experience. Expertly trained in various techniques to ensure your absolute relaxation and satisfaction."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {model.stats.age && (
                <StatItem icon={Calendar} label={t.girl.age} value={model.stats.age} t={t} />
              )}
              <StatItem icon={Ruler} label={t.girl.height} value={model.stats.height} t={t} />
              <StatItem icon={Weight} label={t.girl.weight} value={model.stats.weight} t={t} />
              <StatItem icon={Heart} label={t.girl.breast} value={model.stats.cup} t={t} />
            </div>

            {/* Price & Services Block */}
            <div className="pt-8 border-t border-[#593A48]/5 relative">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#F05C88] font-bold font-sans flex items-center gap-2 mb-4">
                    <Banknote size={12} className="text-[#F05C88]" /> {t.girl.price || "Price"}
                  </h4>
                  <div className="flex flex-col gap-3 bg-white/35 backdrop-blur-md border border-[#F05C88]/15 shadow-[var(--shadow-soft)] rounded-2xl p-5 md:p-6">
                    {model.price.split("·").map((rate, i) => {
                      const parts = rate.split("/");
                      const amount = parts[0];
                      const unit = parts[1];
                      const trimmedUnit = unit?.trim();
                      const translatedUnit = t.girl.units[trimmedUnit] || trimmedUnit;
                      return (
                        <p key={i} className="text-4xl font-serif text-[#593A48] font-bold leading-tight flex items-baseline">
                          {amount.trim()}
                          <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#593A48]/35 ml-3 font-normal">
                            / {unit ? translatedUnit : t.girl.perHour.replace("/", "").trim()}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#F05C88] font-bold font-sans flex items-center gap-2 mb-4">
                    <Sparkles size={12} className="text-[#F05C88]" /> {t.girl.services || "Featured Services"}
                  </h4>
                  <div className="flex flex-wrap gap-x-2 gap-y-2 text-[#593A48]/70 leading-relaxed font-sans text-sm">
                    {(() => {
                      if (!model.services) return null;
                      const main = [];
                      const extra = [];
                      const vip = [];

                      const services = model.services
                        ? Array.isArray(model.services)
                          ? model.services
                          : model.services[lang] || model.services.en || []
                        : [];

                      services.forEach((group) => {
                        if (group.startsWith("VIP:") || group.startsWith("VIP："))
                          vip.push(group);
                        else if (
                          group.includes("额外") ||
                          group.startsWith("Extra:") ||
                          group.startsWith("Extra：") ||
                          group.startsWith("Extra ") ||
                          group.startsWith("Note:") ||
                          group.startsWith("Note：")
                        )
                          extra.push(group);
                        else if (group.startsWith("免费赠送:")) extra.push(group);
                        else main.push(group);
                      });

                      const sortedGroups = [...main, ...extra, ...vip];

                      return sortedGroups.map((group, groupIdx, groups) => {
                        const isVipGroup = group.startsWith("VIP:") || group.startsWith("VIP：");
                        const isExtraGroup =
                          group.includes("额外") ||
                          group.startsWith("免费赠送:") ||
                          group.startsWith("Extra:") ||
                          group.startsWith("Extra：") ||
                          group.startsWith("Extra ") ||
                          group.startsWith("Note:") ||
                          group.startsWith("Note：");

                        const isNextGroupOnSameLine =
                          groupIdx < groups.length - 1 &&
                          !groups[groupIdx + 1].startsWith("VIP:") &&
                          !groups[groupIdx + 1].includes("额外") &&
                          !groups[groupIdx + 1].startsWith("免费赠送:") &&
                          !groups[groupIdx + 1].startsWith("Note:") &&
                          !groups[groupIdx + 1].startsWith("Note：");

                        const showDot = !isVipGroup && !isExtraGroup && isNextGroupOnSameLine;

                        return (
                          <React.Fragment key={groupIdx}>
                            {(isVipGroup || isExtraGroup) && (
                              <div className="w-full h-2" />
                            )}
                            <span className="inline max-w-full">
                              <span className="whitespace-normal break-words px-3.5 py-1.5 bg-white/35 border border-[#F05C88]/15 text-[#593A48]/65 rounded-full inline-block text-[13px] shadow-sm">
                                {group.includes("(") ? group.split(",").join(", ") : group}
                              </span>
                            </span>
                          </React.Fragment>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Video (Desktop-hidden, only visible on mobile under details) */}
          {model.video && (
            <div className="space-y-6 mt-8 lg:hidden">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#F05C88] font-bold font-sans flex items-center gap-2">
                <Play size={12} className="text-[#F05C88]" /> {t.grid.verification}
              </h4>
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lifted)] border border-[#593A48]/5">
                <TrustVideo src={model.video} poster={model.image} />
              </div>
            </div>
          )}

          {/* Gallery */}
          <div className="space-y-4 lg:space-y-8 mt-6 lg:mt-12">
            <h3 className="text-2xl md:text-3xl font-serif text-[#593A48] italic">
              {t.girl.portfolio}
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {displayGallery.map((img, idx) => {
                const modalIdx = model.video ? idx : idx + 1;
                return (
                  <div
                    key={idx}
                    onClick={() => openImageModal(modalIdx)}
                    className="relative w-full rounded-xl overflow-hidden shadow-[var(--shadow-soft)] cursor-zoom-in group aspect-[4/5]"
                  >
                    <img
                      src={img}
                      alt={`${model.name.en} Gallery ${idx + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Premium Image Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 pt-5 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex items-end opacity-90 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="border-l border-[#F05C88]/70 pl-2 overflow-hidden">
                        <span className="block text-[8px] sm:text-[10px] md:text-xs text-[#FFE3EC] font-sans font-semibold tracking-[0.1em] uppercase truncate max-w-full">
                          {getGalleryDesc(idx, lang)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Sticky CTA Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-t border-[#593A48]/5 p-4 md:px-8 py-4 shadow-[0_-4px_20px_rgba(89,58,72,0.04)]"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex flex-col gap-1">
            <p className="font-serif italic text-[#593A48] text-2xl">
              {model.name[lang] || model.name.en}
            </p>
            <p className="text-[9px] text-[#F05C88] uppercase tracking-widest font-bold font-sans">
              {t.girl.availableToBook}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full md:w-auto items-center gap-3">
            <a
              href={`https://wa.me/64225391339?text=${t.girl.contactMsg.replace("[name]", model.name.en)}`}
              target="_blank"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-[#F05C88] text-white rounded-xl hover:bg-[#A98442] transition-all duration-300 hover:shadow-[0_0_15px_rgba(240,92,136,0.3)]"
            >
              <MessageCircle size={16} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold font-sans">
                {t.girl.whatsapp}
              </span>
            </a>

            <button
              onClick={() => setShowQR(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-[#F05C88] text-white rounded-xl hover:bg-[#A98442] transition-all duration-300"
            >
              <MessageSquare size={16} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold font-sans">
                {t.girl.wechat}
              </span>
            </button>

            <a
              href={`https://t.me/boutiquecollection?text=Inquiry for ${model.name.en}`}
              target="_blank"
              className="flex items-center justify-center p-3 bg-white border border-[#593A48]/8 text-[#593A48]/60 rounded-xl hover:border-[#F05C88]/30 hover:text-[#F05C88] transition-all duration-300"
            >
              <Send size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      <WeChatQRModal isOpen={showQR} onClose={() => setShowQR(false)} />
      <ImageModal
        isOpen={selectedImage}
        onClose={() => setSelectedImage(false)}
        images={allImages}
        currentIndex={imageIdx}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}
