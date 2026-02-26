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
      className="container fixed inset-0 bg-black/30 z-50 flex items-center justify-center animate-fadeIn"
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

       
      </div>
    </div>
  );
};