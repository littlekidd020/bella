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
            className="fixed inset-0 z-[200] bg-[#FFEAEF] flex flex-col font-sans overflow-y-auto"
          >
            {/* Clean Solid Background */}
            <div className="absolute inset-0 bg-[#FFEAEF]" />

            {/* Content Overlay */}
            <div className="relative z-10 flex-1 flex-shrink-0 flex flex-col items-center justify-center px-6 pt-0 pb-12">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                className="max-w-2xl w-full text-center"
              >
                  {/* Brand Logo Identity */}
                  <div className="flex flex-col items-center gap-8 mt-0">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className="w-[90%] md:w-[60%] h-auto flex items-center justify-center relative group overflow-hidden -mb-10"
                      >
                         <img 
                           src="/images/age-gate-logo.png" 
                           alt="天使小可爱 - Little Angel Cutie" 
                           className="w-full h-auto object-contain"
                         />
                         {/* Inset shadow to blur the bounding box into the page background */}
                         <div className="absolute inset-0 shadow-[inset_0_0_24px_16px_#FFEAEF] pointer-events-none" />
                      </motion.div>
                  </div>
 
                 {/* Welcome Message Box */}
                 <div className="w-full max-w-md mx-auto px-4 mt-8">
                    <div className="p-6 pb-4 md:p-8 md:pb-5 rounded-[2rem] bg-[#FFF0F4]/60 backdrop-blur-sm border border-[#F05C88]/15 relative overflow-hidden shadow-sm">
                       {/* Centered decorated title */}
                       <div className="flex items-center justify-center gap-4 mb-1">
                          <span className="h-[1px] w-8 md:w-16 bg-[#F05C88]/30" />
                          <h1 className="text-2xl md:text-3xl font-sans font-medium text-[#f05c88] tracking-widest">
                            {t.ageGate.welcome}
                          </h1>
                          <span className="h-[1px] w-8 md:w-16 bg-[#F05C88]/30" />
                       </div>
                       
                       {/* Small heart decoration below title */}
                       <div className="flex justify-center mb-4">
                          <svg className="w-3 h-3 fill-[#F05C88]" viewBox="0 0 24 24">
                             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                       </div>
                       
                       {/* Split text paragraph */}
                       <div className="space-y-1 text-[#593A48] text-sm md:text-base font-sans tracking-wide leading-normal">
                          {t.ageGate.message.split('\n').map((line, idx) => (
                             <p 
                               key={idx}
                               dangerouslySetInnerHTML={{ __html: line }}
                               className="text-center"
                             />
                          ))}
                       </div>

                       {/* Small heart decoration below text */}
                       <div className="flex justify-center mt-4">
                          <svg className="w-3 h-3 fill-[#F05C88]" viewBox="0 0 24 24">
                             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                       </div>
                    </div>
                 </div>
 
                 {/* Verification Buttons Container - Redesigned to match Image 2 */}
                 <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto px-4 mt-6" style={{ marginTop: '24px' }}>
                    {/* Top English Button (Primary Rose Block) */}
                    <button
                      onClick={handleVerify}
                      className="w-full bg-[#F05C88] hover:bg-[#F05C88]/95 active:scale-[0.99] border border-[#F05C88] rounded-2xl py-6 flex flex-col items-center justify-center gap-1 shadow-sm transition-all duration-300 group"
                    >
                       <span className="text-white font-serif text-5xl font-medium tracking-wide">
                          18+
                       </span>
                       <div className="flex items-center gap-3">
                          <span className="h-[1px] w-8 bg-white/40 group-hover:bg-white/60 transition-colors" />
                          <span className="text-white/90 text-sm font-sans tracking-[0.1em] font-medium uppercase">
                             {t.ageGate.buttonEn}
                          </span>
                          <span className="h-[1px] w-8 bg-white/40 group-hover:bg-white/60 transition-colors" />
                       </div>
                    </button>
 
                    {/* Bottom Chinese Button (White Capsule Outline) */}
                    <button
                      onClick={handleVerify}
                      className="w-full h-16 bg-white hover:bg-[#FFF0F4]/40 active:scale-[0.99] border border-[#F05C88]/20 hover:border-[#F05C88]/40 rounded-full flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(240,92,136,0.04)] transition-all duration-300 group"
                    >
                       {/* Left Heart Icon */}
                       <svg className="w-3.5 h-3.5 fill-[#F05C88] opacity-75 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                       </svg>
 
                       <span className="text-[#F05C88] font-sans font-bold text-sm tracking-[0.2em]">
                          {t.ageGate.buttonCn}
                       </span>
 
                       {/* Right Heart Icon */}
                       <svg className="w-3.5 h-3.5 fill-[#F05C88] opacity-75 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                       </svg>
                    </button>
                 </div>
 
                 {/* Disclaimer / Additional verification text if needed */}
                 <p className="text-[9px] uppercase tracking-[0.5em] text-[#593A48]/30 font-bold max-w-lg mx-auto leading-loose px-4 mt-8">
                   Step into a world of bespoke luxury. By entering, you confirm you are of legal age to view such content.
                 </p>
              </motion.div>
            </div>

            {/* Global Footer */}
            <div className="relative z-10 p-10 text-center flex-shrink-0">
               <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#593A48]/25 font-bold font-sans">
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
