"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BrandLogo from '@/components/common/BrandLogo';

const AgeGate = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const isVerified = sessionStorage.getItem('age-verified');
    if (isVerified) {
      setVerified(true);
    }
    setLoading(false);
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('age-verified', 'true');
    setVerified(true);
  };

  if (loading) return null;

  return (
    <>
      <AnimatePresence>
        {!verified && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="fixed inset-0 z-[200] bg-[#FFE4EC] flex flex-col font-sans overflow-hidden"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-[#FFE4EC]">
               <motion.img 
                 initial={{ scale: 1.15 }}
                 animate={{ scale: 1.05 }}
                 transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                 src="/images/landing-bg-erotic-new.jpg" 
                 className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity"
                 alt="Luxury Entry"
               />
               <div className="absolute inset-0 bg-[#F84A88]/5 mix-blend-color" />
               <div className="absolute inset-0 bg-gradient-to-b from-[#FFE4EC]/80 via-[#FFE4EC]/20 to-[#FFE4EC]" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                className="max-w-2xl w-full text-center space-y-12"
              >
                 {/* Brand Logo Identity */}
                 <div className="flex flex-col items-center gap-8 mt-12 md:mt-24">
                     <motion.div 
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.8, duration: 1.5 }}
                       className="w-48 h-20 md:w-80 md:h-32 flex items-center justify-center relative group"
                     >
                        <BrandLogo className="w-full h-full" />
                     </motion.div>
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F84A88]/30 to-transparent" />
                 </div>

                 {/* Welcome Message Box */}
                 <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-16 rounded-[4rem] shadow-[0_40px_100px_rgba(248,74,136,0.15)] relative overflow-hidden">
                    {/* Luxury Gradient Accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#F84A88]/50 to-transparent" />
                    
                    <h1 className="text-5xl md:text-7xl font-serif text-[#15030A] italic font-playfair tracking-normal mb-8 leading-tight drop-shadow-sm">
                      {t.ageGate.welcome}
                    </h1>
                    
                    <p className="text-[#15030A]/60 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-sans tracking-[0.1em] uppercase">
                      {t.ageGate.message}
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                       <button
                         onClick={handleVerify}
                         className="group relative px-10 py-5 bg-transparent border border-[#F84A88]/30 hover:border-[#F84A88]/50 rounded-2xl overflow-hidden transition-all duration-500 w-full sm:w-auto min-w-[200px] shadow-sm"
                       >
                          <span className="relative z-10 text-[#15030A] font-serif italic text-xl tracking-widest group-hover:text-white transition-colors">
                            {t.ageGate.buttonEn}
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#F84A88] to-[#D41E5D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-90" />
                       </button>

                       <button
                         onClick={handleVerify}
                         className="group relative px-10 py-5 bg-white/60 border border-white/60 hover:border-[#F84A88]/30 rounded-2xl overflow-hidden transition-all duration-500 w-full sm:w-auto min-w-[200px]"
                       >
                          <span className="relative z-10 text-[#15030A]/70 font-sans font-bold text-xs md:text-sm tracking-[0.2em] group-hover:text-[#15030A] transition-colors">
                            {t.ageGate.buttonCn}
                          </span>
                          <span className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                       </button>
                    </div>
                 </div>

                 {/* Disclaimer / Additional verification text if needed */}
                 <p className="text-[9px] uppercase tracking-[0.5em] text-[#15030A]/40 font-bold max-w-lg mx-auto leading-loose px-4">
                   Step into a world of bespoke luxury. By entering, you confirm you are of legal age to view such content.
                 </p>
              </motion.div>
            </div>

            {/* Global Footer */}
            <div className="relative z-10 p-10 text-center">
               <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#15030A]/30 font-bold font-sans">
                 {t.ageGate.footer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {(verified || loading) && children}
    </>
  );
};

export default AgeGate;
