"use client";

import { useEffect } from "react";
import { Video } from "./VideoCard";

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  const getEmbedUrl = () =>
    `https://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1`;

  const getYouTubeUrl = () =>
    `https://www.youtube.com/watch?v=${video.id}`;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenYouTube = () => {
    window.open(getYouTubeUrl(), "_blank");
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-[50%] bg-black rounded-xl overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-white/20 text-white text-4xl 
                     w-12 h-12 rounded-full flex items-center justify-center 
                     hover:bg-red-600 hover:rotate-90 transition-all duration-300"
        >
          ×
        </button>

        {/* Video Player */}
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src={getEmbedUrl()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        {/* <div className="p-6 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
          <p className="text-gray-300 mb-4">{video.description}</p>
          
          <div className="flex gap-4">
            <button
              onClick={handleOpenYouTube}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white 
                         rounded-lg font-semibold hover:bg-red-700 
                         hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};