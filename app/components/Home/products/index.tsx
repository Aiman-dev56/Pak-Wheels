"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Typography } from "../../common/Typography";
import { CarModel } from "../../common/CarModels/brands";
import { Model } from "../../common/CarModels/model";
import { Category } from "../../common/CarModels/category";
import { City } from "../../common/CarModels/cities";
import { Year } from "../../common/CarModels/year";
import { BikeBrand } from "../../common/BikesModels/Brands";
import { ModelBikes } from "../../common/BikesModels/Model";
import { CategoryBikes } from "../../common/BikesModels/Category";
import { CityBikes } from "../../common/BikesModels/Cities";
import { YearBikes } from "../../common/BikesModels/Year";
import { AutoPartsCategory } from "../../common/AutoPartsModel/Categories";
import { AutoPartsCity } from "../../common/AutoPartsModel/Cities";
import { AutoPartsYear } from "../../common/AutoPartsModel/Year";



type OptionType = "Brand" | "Model" | "Category" | "Cities" | "Year"; 

type ProductType = "cars" | "bikes" | "autoParts" ;

export const Products = ({ type} : {type: ProductType}) => {const [activeOptions, setActiveOptions] = useState<OptionType>(
    type === "autoParts" ? "Category" : "Brand"
  );
    const pathname = usePathname();

    
  const allTabs: OptionType[] = ["Brand", "Model", "Category", "Cities", "Year"];

// Filter tabs based on product type
  const tabs = type === "autoParts" 
    ? allTabs.filter(tab => tab !== "Brand" && tab !== "Model")
    : allTabs;

    return (
        <div  className="container">
             <div className="lg:mt-24 mt-20 m-8   ">
            <Typography variant="h1" className="font-light">Browse {type}</Typography>
            <div className="flex lg:m-10 gap-12 list-none text-[20px] mx-auto scroll-smooth  overflow-x-auto  hide-scrollbar ">
                <ul className="flex gap-6 lg:gap-10 mt-8 m-2 ">
                    {tabs.map((tab) => (
                        <li key={tab}
                        onClick={() => setActiveOptions(tab)}
                        className={`cursor-pointer pb-3 relative ${
                            activeOptions === tab ? "text-orange-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-orange-500" : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {tab}

                        </li>
                    ))}

                </ul>
                </div>
                 {/* conditional rendring */}
               {type === "cars" &&  (
                <>
                {activeOptions === "Brand" && <CarModel/>}
                {activeOptions === "Model" && <Model/>}
                {activeOptions === "Category" && <Category/>}
                {activeOptions === "Cities" && <City/>}
                {activeOptions === "Year" && <Year/>}
                </>
            
               )}

               {type === "bikes" && (
                <>
                {activeOptions === "Brand" && <BikeBrand/>}
                {activeOptions === "Model" && <ModelBikes/>}
                {activeOptions === "Category" && <CategoryBikes/>}
                {activeOptions === "Cities" && <CityBikes/>}
                {activeOptions === "Year" && <YearBikes/>}
                </>
               )}

               {type === "autoParts" && (
                <>
                {activeOptions === "Category" && <AutoPartsCategory/>}
                {activeOptions === "Cities" && <AutoPartsCity/>}
                {activeOptions === "Year" && <AutoPartsYear/>}
                </>
               )}

        </div>

     
        </div>
       
    )

}