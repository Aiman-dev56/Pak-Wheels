"use client"
import { useState } from "react";
import { Typography } from "../../common/Typography";
import { CarModel } from "../../common/CarModels/brands";
import { Model } from "../../common/CarModels/model";
import { Category } from "../../common/CarModels/category";
import { City } from "../../common/CarModels/cities";
import { Year } from "../../common/CarModels/year";
import { AiOutlineRight } from "react-icons/ai";
// import PowerCarCard from "../../common/PowerSection/PowerCard";
import data from "@/app/data/Data.json"; // adjust path if needed




type OptionType = "Brand" | "Model" | "Category" | "Cities" | "Year"

export const Products = () => {
    const [activeOptions, setActiveOptions] = useState<OptionType>("Brand");
const tabs: OptionType[] = ["Brand", "Model", "Category", "Cities", "Year"];

const powerCars = data.cars

    return (
        <div>
             <div className="lg:mt-24 mt-20 m-8">
            <Typography variant="h1" className="font-light">Browse Cars</Typography>
            <div className="flex m-10 gap-12 list-none text-[20px] ">
                <ul className="flex gap-10 mt-8 ">
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
                {
                    activeOptions === "Brand" && <CarModel/>
                }
                {
                    activeOptions === "Model" && <Model/>
                }
                {
                    activeOptions === "Category" && <Category/>
                }
                {
                    activeOptions === "Cities" && <City/>
                }
                {
                    activeOptions === "Year" && <Year/>
                }

        </div>

     
        </div>
       
    )

}