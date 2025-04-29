import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { assets } from "../../assets/frontend_assets/assets";

export default function Banner() {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-right">
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden rounded-2xl">
        {/* Video Background */}
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover sm:object-contain md:object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full max-w-none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={assets.WhyAsar} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Over Video */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            أثــــر
          </h1>
          <div className="w-24 h-1 bg-amber-500 mb-8"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center font-light">
            رحلة عبر أزمنة مصر العريقة، حيث تتلاقى روعة الحضارة وإبداع الفن
            والتراث
          </p>

          {/* Video Controls */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6">
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
