"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const TrustVideo = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full bg-black rounded-sm overflow-hidden border border-[#C5A059]/10 shadow-2xl group/video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover opacity-90"
      />
      
      {/* Overlay Controls */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-black/20">
        <div className="flex justify-end">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 bg-[#2b0817]/60 backdrop-blur-md rounded-full text-white/80 hover:text-gold transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="p-3 bg-[#C5A059] rounded-full text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} fill="black" />}
          </button>
          
          <div className="px-3 py-1 bg-[#2b0817]/60 backdrop-blur-md border border-[#C5A059]/30 rounded-full">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Unedited Preview</span>
          </div>
        </div>
      </div>

      {!isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
        >
          <div className="p-5 bg-[#2b0817]/60 backdrop-blur-xl border border-[#C5A059]/20 rounded-full text-[#C5A059] animate-pulse">
            <Play size={32} fill="#C5A059" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustVideo;
