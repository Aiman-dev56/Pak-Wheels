"use client"

import { Footer } from "@/app/components/Footer";
import BrowseBannerSec from "@/app/components/Home/banners/BrowseBanner";
import BannerSec from "@/app/components/Home/banners/CarBanners";
import { Hero } from "@/app/components/Home/Hero";
import { VideoGallery } from "@/app/components/Home/latestvideos/VideoGallery";
import PowerCarsSection from "@/app/components/Home/PowerSection/PowerCars";
import { Products } from "@/app/components/Home/products";
import ReviewCarsSection from "@/app/components/Home/reviewed/PopularReview";
import { videoData } from "@/app/data/videos";




export default function CarsPage(){
  return(
    <div>
      <Hero/>
      <Products type="cars"/>
      <PowerCarsSection/>
      <BannerSec/>
      <ReviewCarsSection/>
      <ReviewCarsSection/>
      <BrowseBannerSec/>
      <VideoGallery videos={videoData} />

      <Footer/>
    </div>
  )

}