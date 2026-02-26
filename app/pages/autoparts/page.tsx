"use client";

import { Footer } from "@/app/components/Footer";
import AutoPartsSection from "@/app/components/Home/autoparts/AutoParts";
import AutoPartsBannerSec from "@/app/components/Home/banners/AutoPartsBanners";
import BrowseBannerSec from "@/app/components/Home/banners/BrowseBanner";
import { Hero } from "@/app/components/Home/Hero";
import { VideoGallery } from "@/app/components/Home/latestvideos/VideoGallery";
import { Products } from "@/app/components/Home/products";
import ReviewCarsSection from "@/app/components/Home/reviewed/PopularReview";
import { videoData } from "@/app/data/videos";



export default function AutoPartsPage() {
    return(
        <>
         <Hero/>
        <Products type="autoParts"/>
        <AutoPartsSection/>
        <AutoPartsBannerSec/>
        <ReviewCarsSection/>
        <BrowseBannerSec/>
        <VideoGallery videos={videoData}/>
        <Footer/>

        </>
       
    )
}