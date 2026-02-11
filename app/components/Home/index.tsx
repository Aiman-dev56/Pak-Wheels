import { Products } from "./products/products";
import { Hero } from "./Hero/hero";
import BannerSec from "./banners/CarBanners";
import PowerCarsSection from "./PowerSection/PowerCars";
import PowerBikesSection from "./PowerSection/PowerBikes";
import BikeBannerSec from "./banners/BikeBanners";
import AutoPartsSection from "./autoparts/AutoParts";
import AutoPartsBannerSec from "./banners/AutoPartsBanners";
import ReviewCarsSection from "./reviewed/PopularReview";
import BrowseBannerSec from "./banners/BrowseBanner";
import { videoData } from "../../data/videos";
import { VideoGallery } from "./latestvideos/VideoGallery";
import { Footer } from "../Footer";







export default function Home() {



    return (
        <div>

            <Hero />
            <Products />
            <PowerCarsSection />
            <BannerSec />
            <PowerBikesSection />
            <BikeBannerSec />
            <AutoPartsSection />
            <AutoPartsBannerSec />
            <ReviewCarsSection />
            <BrowseBannerSec />
            <VideoGallery videos={videoData} />
            <Footer/>
           

        </div>
    )
}