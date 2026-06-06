"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BrandLogo from '@/components/common/BrandLogo';

const AgeGate = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useLanguage();

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
                 <div className="w-full max-w-md mx-auto px-4 -mt-4">
                    <div className="p-6 pb-6 md:p-8 md:pb-8 rounded-[2rem] bg-white/75 backdrop-blur-sm border border-[#F05C88]/15 relative overflow-hidden shadow-sm">
                       {/* Centered decorated title with logo icon */}
                       <div className="flex items-center justify-center gap-3.5 mb-2">
                          <img src="/images/logo-icon.svg" className="w-6 h-6 object-contain opacity-70" alt="" />
                          <h1 className="text-2xl md:text-3xl font-serif italic font-bold text-[#F05C88] tracking-widest">
                            {lang === "cn" ? "欢迎光临" : "WELCOME"}
                          </h1>
                          <img src="/images/logo-icon.svg" className="w-6 h-6 object-contain opacity-70" alt="" />
                       </div>
                       
                       {/* Small heart decoration below title */}
                       <div className="flex justify-center mb-4 opacity-65">
                          <span className="text-[#F05C88] text-xs">♥</span>
                       </div>
                       
                       {/* Split text paragraph */}
                       <div className="space-y-1 text-[#593A48] text-[13px] md:text-sm font-sans tracking-wide leading-relaxed mb-6">
                          {t.ageGate.message.split('\n').map((line, idx) => (
                             <p 
                               key={idx}
                               dangerouslySetInnerHTML={{ __html: line }}
                               className="text-center"
                             />
                          ))}
                       </div>

                       {/* Verification Buttons Container - Redesigned to match Image 2 */}
                       <div className="flex flex-col items-center justify-center gap-3 w-full">
                          {/* Top English Button (Rose Pink Capsule Gradient/Glossy shape) */}
                          <button
                            onClick={handleVerify}
                            className="w-[90%] h-12 bg-gradient-to-r from-[#FF88A5] via-[#F05C88] to-[#E24E79] hover:opacity-95 active:scale-[0.99] border border-[#F05C88]/20 rounded-full flex items-center justify-between px-10 shadow-[0_4px_14px_rgba(240,92,136,0.25)] transition-all duration-300 group"
                          >
                             <span className="text-white text-xs opacity-75 group-hover:scale-110 transition-transform">♥</span>
                             <span className="text-white font-sans text-[13px] font-extrabold tracking-[0.2em] uppercase">
                                {t.ageGate.buttonEn}
                             </span>
                             <span className="text-white text-xs opacity-75 group-hover:scale-110 transition-transform">♥</span>
                          </button>
       
                          {/* Bottom Chinese Button (White Capsule Outline) */}
                          <button
                            onClick={handleVerify}
                            className="w-[90%] h-12 bg-white hover:bg-[#FFF5F8] active:scale-[0.99] border border-[#F05C88]/25 rounded-full flex items-center justify-between px-10 shadow-[0_2px_10px_rgba(240,92,136,0.06)] transition-all duration-300 group"
                          >
                             <span className="text-[#F05C88] text-xs opacity-70 group-hover:scale-110 transition-transform">♥</span>
                             <span className="text-[#F05C88] font-sans font-bold text-[13px] tracking-[0.25em]">
                                {t.ageGate.buttonCn}
                             </span>
                             <span className="text-[#F05C88] text-xs opacity-70 group-hover:scale-110 transition-transform">♥</span>
                          </button>
                       </div>
                    </div>
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
