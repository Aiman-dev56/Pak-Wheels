"use client";

import { useState } from "react";
import Image from "next/image";

export interface Video {
  id: string;
  title: string;
  description: string;
  caption: string;
}

interface VideoCardProps {
  video: Video;
  onOpenModal: (video: Video) => void;
}

export const VideoCard = ({ video, onOpenModal }: VideoCardProps) => {
  // 🔐 Runtime safety
  if (!video) return null;

  const [isHovered, setIsHovered] = useState(false);

  // ✅ Correct URLs
  const getThumbnail = () =>
    `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  const getYouTubeUrl = () =>
    `https://www.youtube.com/watch?v=${video.id}`;

  const handlePlayClick = () => {
    // Open modal when play button is clicked
    onOpenModal(video);
  };

  const handleOpenYoutube = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getYouTubeUrl(), "_blank");
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden h-60 shadow-2xl hover:shadow-3xl ">
      <div
        className="relative w-full h-40 pt-[56.25%] bg-black overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <Image
          src={getThumbnail()}
          alt={video.title}
          fill
          className="object-cover  transition-opacity duration-300"
          onClick={handlePlayClick}
          priority
        />

        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[50px] h-[50px] bg-gray-600 bg-opacity-90 rounded-full 
                     flex items-center justify-center cursor-pointer 
                       z-10
                     before:content-[''] before:w-0 before:h-0 
                     before:border-l-[20px] before:border-l-white 
                     before:border-t-[12px] before:border-t-transparent 
                     before:border-b-[12px] before:border-b-transparent 
                     before:ml-1"
        />

      

        {/* Control Buttons */}
        <div className="absolute top-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            onClick={handlePlayClick}
            className="w-10 h-10 bg-black bg-opacity-70 rounded-lg text-white 
                       flex items-center justify-center hover:bg-red-600 
                       hover:scale-110 transition-all duration-300"
            title="Open in popup"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>

          <button
            onClick={handleOpenYoutube}
            className="w-10 h-10 bg-black bg-opacity-70 rounded-lg text-white 
                       flex items-center justify-center hover:bg-red-600 
                       hover:scale-110 transition-all duration-300"
            title="Watch on YouTube"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
          {video.title}
        </h3>
      
      </div>
    </div>
  );
};