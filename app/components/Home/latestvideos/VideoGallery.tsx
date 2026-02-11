"use client";

import { useState } from "react";
import { VideoCard, Video } from "./VideoCard";
import { VideoModal } from "./VideoModel";
import { Typography } from "../../common/Typography";
import {AiOutlineRight} from "react-icons/ai";


interface VideoGalleryProps {
  videos: Video[];
}

export const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedVideo to allow exit animation to complete
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <>
      <div className="lg:mt-20 lg:ml-20 m-10 lg:mr-20  flex flex-col">
                <div className=" justify-between inline-flex">
                  <Typography variant="h2" className="font-normal mb-4">Latest Videos</Typography>
                  <div className="flex gap-1  lg:mt-5 mt-2 cursor-pointer">
                    <Typography variant="h6">View All</Typography>
                    <span className=" mt-1" ><AiOutlineRight size={16} color="blue" /></span>
                  </div>
                </div>
                <hr className="border-[1px]" />
    
    
    
    
              </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-16">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onOpenModal={handleOpenModal} />
        ))}
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};