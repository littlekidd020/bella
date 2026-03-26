"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { models } from "@/lib/data";
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
  Phone
} from "lucide-react";
import { motion } from "framer-motion";
import TrustVideo from "@/components/model/TrustVideo";
import WeChatQRModal from "@/components/common/WeChatQRModal";

const StatItem = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F84A88]/30 transition-colors">
    <div className="flex items-center gap-2 text-[#C5A059]">
      <Icon size={18} className="text-[#F84A88]" />
      <span className="text-xs uppercase tracking-widest font-sans text-white/40">{label}</span>
    </div>
    <p className="text-2xl font-serif text-white font-playfair">{value}</p>
  </div>
);

export default function ModelDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { t, lang } = useLanguage();
  const [model, setModel] = useState(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const foundModel = models.find((m) => m.id === parseInt(id));
    if (foundModel) {
      setModel(foundModel);
    } else {
      router.push('/collection'); // redirect if not found
    }
  }, [id, router]);

  if (!model) return <div className="min-h-screen bg-[#3D0A1E]" />;

  const isAvailable = model.status === "available";

  return (
    <main className="min-h-screen bg-[#3D0A1E] pb-32">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="fixed top-24 left-8 z-50 p-3 bg-[#2b0817]/60 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-[#F84A88] transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Main Content Grid */}
      <section className="px-8 max-w-7xl mx-auto pt-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Info & Stats */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Header Info */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {model.location && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#F84A88]/40 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_20px_rgba(248,74,136,0.2)]">
                <MapPin size={14} className="text-[#F84A88]" />
                <span className="text-[10px] uppercase tracking-widest font-sans text-white/90 font-bold">
                  {t.model.locations[model.location] || model.location}
                </span>
              </div>
            )}
            <h1 className="text-6xl md:text-8xl font-serif text-white italic font-playfair tracking-wide mb-4 relative inline-block">
              {model.name[lang] || model.name.en}
              {isAvailable && (
                <span className="absolute -top-2 -right-6 flex h-4 w-4">
                  <span className="animate-rose-pulse absolute inline-flex h-full w-full rounded-full bg-[#F84A88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F84A88]"></span>
                </span>
              )}
            </h1>
            <p className="text-sm uppercase tracking-[0.4em] text-[#F84A88] font-bold font-sans mt-2">
              {t.model.nationalities[model.stats.nationality] || model.stats.nationality} • {model.stats.age}{t.model.ageUnit}
            </p>

            {/* About Section */}
            <div className="mt-8 space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans flex items-center gap-2">
                <MessageCircle size={10} fill="#F84A88" className="text-[#F84A88]"/> {t.model.about}
              </h4>
              <p className="text-white/70 leading-relaxed font-sans text-base tracking-wide border-l-2 border-[#F84A88]/40 pl-4 py-1">
                {model.description && typeof model.description === 'object' ? (model.description[lang] || model.description.en) : (model.description || "A dedicated professional offering a personalized and refined experience. Expertly trained in various techniques to ensure your absolute relaxation and satisfaction.")}
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatItem icon={Calendar} label={t.model.age} value={model.stats.age} />
            <StatItem icon={Ruler} label={t.model.height} value={model.stats.height} />
            <StatItem icon={Weight} label={t.model.weight} value={model.stats.weight} />
            <StatItem icon={Heart} label={t.model.breast} value={model.stats.cup} />
          </div>

          {/* Price & Services Block */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F84A88]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans flex items-center gap-2 mb-2">
                  <Banknote size={12} className="text-[#F84A88]" /> {t.model.price || "Price"}
                </h4>
                <p className="text-4xl font-serif text-white font-playfair">
                  {model.price} <span className="text-sm uppercase tracking-widest font-sans text-white/40">{t.model.perHour || "/ hour"}</span>
                </p>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans flex items-center gap-2 mb-4">
                  <Sparkles size={12} className="text-[#F84A88]" /> {t.model.services || "Featured Services"}
                </h4>
                <ul className="space-y-3">
                  {model.services?.map((service, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80 font-sans tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F84A88]"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Trust Video */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#F84A88] font-bold font-sans flex items-center gap-2">
              <Play size={10} fill="#F84A88" className="text-[#F84A88]"/> {t.grid.verification}
            </h4>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <TrustVideo 
                src="https://joy1.videvo.net/videvo_files/video/premium/getty_14/1080p/201211_076_Woman_In_Silk_Robe_1_1080p.mp4" 
                poster={model.image} 
              />
            </div>
          </div>

        </div>

        {/* Right Column: Photo Gallery */}
        <div className="lg:col-span-8 space-y-8 mt-16 lg:mt-0">
          <h3 className="text-2xl font-serif text-white italic font-playfair tracking-wide border-b border-white/10 pb-4">
            {t.model.portfolio}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] md:col-span-2 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={model.image} 
                alt={`${model.name.en} Portfolio Main`} 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-[#F84A88]/0 group-hover:border-[#F84A88]/30 transition-all duration-700 m-4 rounded-2xl pointer-events-none" />
            </div>

            {model.gallery?.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={img} 
                  alt={`${model.name.en} Gallery ${idx}`} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Fixed Sticky CTA Bottom Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 w-full z-50 bg-[#3D0A1E]/90 backdrop-blur-2xl border-t border-white/10 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="hidden md:block">
            <p className="font-serif italic text-white text-xl">{model.name[lang] || model.name.en}</p>
            <p className="text-[10px] text-[#F84A88] uppercase tracking-widest font-bold">{t.model.availableToBook}</p>
          </div>
          
          <div className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto items-center gap-3 md:gap-4">
            <a 
              href={`https://wa.me/6400000000?text=${t.model.contactMsg.replace("[name]", model.name.en)}`}
              target="_blank"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-[#F84A88] text-white rounded-xl hover:bg-[#D41E5D] transition-all transform hover:scale-[1.02] shadow-[0_0_40px_rgba(225,29,72,0.3)] min-w-[120px]"
            >
              <MessageCircle size={18} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold font-sans">{t.model.whatsapp}</span>
            </a>

            <button 
              onClick={() => setShowQR(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-[#F84A88] text-white rounded-xl hover:bg-[#D41E5D] transition-all transform hover:scale-[1.02] shadow-[0_0_40px_rgba(225,29,72,0.3)] min-w-[120px]"
            >
              <MessageSquare size={18} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold font-sans">{t.model.wechat}</span>
            </button>
            
            <a 
              href={`https://t.me/boutiquecollection?text=Inquiry for ${model.name.en}`}
              target="_blank"
              className="flex items-center justify-center p-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </motion.div>

      <WeChatQRModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)} 
      />
    </main>
  );
}
