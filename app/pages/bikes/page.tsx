"use client"


import { Footer } from "@/app/components/Footer";
import BikeBannerSec from "@/app/components/Home/banners/BikeBanners";
import BrowseBannerSec from "@/app/components/Home/banners/BrowseBanner";
import { Hero } from "@/app/components/Home/Hero";
import { VideoGallery } from "@/app/components/Home/latestvideos/VideoGallery";
import PowerBikesSection from "@/app/components/Home/PowerSection/PowerBikes";
import { Products } from "@/app/components/Home/products";
import ReviewBikesSection from "@/app/components/Home/reviewed/PopularBikeReview";
import { videoData } from "@/app/data/videos";

export default function Bikes() {
    return (
        <div>
            <Hero />
            <Products type="bikes" />
            <PowerBikesSection />
            <BikeBannerSec />
            <ReviewBikesSection />
            <BrowseBannerSec />
            <VideoGallery videos={videoData} />

            <Footer />

        </div>
    )
}