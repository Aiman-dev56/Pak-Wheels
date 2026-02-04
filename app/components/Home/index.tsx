import { Products } from "./products/products";
import { Hero } from "./Hero/hero";
import BannerSec from "./banners/CarBanners";
import PowerCarsSection from "./PowerSection/PowerCars";
import PowerBikesSection from "./PowerSection/PowerBikes";
import BikeBannerSec from "./banners/BikeBanners";
import AutoPartsSection from "./autoparts/AutoParts";






export default function Home(){
   


    return(
        <div>
       
        <Hero/>
        <Products/>
        <PowerCarsSection/>
        <BannerSec/> 
        <PowerBikesSection/>  
        <BikeBannerSec/>   
        <AutoPartsSection/>

        </div>
    )
}