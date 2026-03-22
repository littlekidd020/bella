"use client";

import React from "react";
import { User, Lock, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AccountPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#3D0A1E] flex items-center justify-center p-8 transition-colors duration-700">
      <div className="w-full max-w-md p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-3xl shadow-2xl relative overflow-hidden">
        {/* Decorative Rose Glow */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#F84A88]/10 blur-3xl pointer-events-none" />
        
        <div className="relative text-center mb-10 space-y-4">
          <h1 className="text-4xl font-serif text-white italic font-playfair tracking-wide mt-4">{t.account.login.split(' ')[0]} <span className="text-[#F84A88]">{t.account.login.split(' ')[1] || ""}</span></h1>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-sans font-bold">{t.account.private}</p>
        </div>

        <form className="relative space-y-6">
          <div className="space-y-4">
            <div className="relative group/input">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-[#F84A88] transition-colors" size={18} />
              <input 
                type="email" 
                placeholder={t.account.placeholderEmail}
                className="w-full py-4 pl-12 pr-6 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#F84A88]/50 transition-all font-sans text-sm"
              />
            </div>
            
            <div className="relative group/input">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-[#F84A88] transition-colors" size={18} />
              <input 
                type="password" 
                placeholder={t.account.placeholderPass}
                className="w-full py-4 pl-12 pr-6 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-[#F84A88]/50 transition-all font-sans text-sm"
              />
            </div>
          </div>

          <button className="w-full py-4 bg-[#F84A88] text-white rounded-xl hover:bg-[#D41E5D] transition-all transform hover:scale-[1.02] shadow-lg font-bold uppercase tracking-widest text-[10px] font-sans">
            {t.account.enter}
          </button>
        </form>

        <div className="relative mt-8 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-sans">{t.account.assistant}</p>
        </div>
      </div>
    </main>
  );
}
