import React, { useState, useRef } from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

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
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        onClick={togglePlay}
        className="w-full h-full md:h-100 object-cover  md:object-contain"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={assets.banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Play className="w-8 h-8 text-blue-600 ml-1" />
          </button>
        )}
      </div>

      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex justify-between items-center">
        <button
          onClick={toggleMute}
          className="text-white hover:text-blue-300 focus:outline-none"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        <div
          onClick={togglePlay}
          className="text-xs text-white opacity-70 cursor-pointer hover:opacity-100 transition"
        >
          {isPlaying ? "أضغط لإيقاف المشاهدة" : "أضغط للمشاهدة"}
        </div>
      </div>
    </div>
  );
}
