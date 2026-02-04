"use client";

import Image from "next/image";
import Bg1 from "../../../../public/images/car.jpg";
import Bg2 from "../../../../public/images/flag.jpg";
import { FaSearch } from "react-icons/fa";
import { Typography } from "../../common/Typography";
import { CityDropdown } from "../../common/CityDropdown/CityDropdown";
import { PriceFilter } from "../pricefilter/PriceFilter";

export const Hero = () => {
    return (
        <div className="relative w-full flex justify-center items-center h-full overflow-hidden">

            {/* ✅ Background Image 1 */}
            <Image
                src={Bg1}
                alt="Background 1"
                fill
                className="object-cover"
                priority
            />

            {/* ✅ Background Image 2 (overlapping layer) */}
            <Image
                src={Bg2}
                alt="Background 2"
                className="h-[90%] lg:w-[80%]  lg:h-[90%] opacity-80 scale-110"
            />

            {/* ✅ RGBA overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* ✅ Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="w-full max-w-8xl text-center text-white">

                    <Typography variant="h1" className="font-light">
                        Find Your Ride Or Sell It Fast -
                    </Typography>

                    <Typography variant="h1" className="font-light">
                        All In One Place
                    </Typography>

                    <Typography variant="p" className="mt-4 text-lg">
                        With thousands of cars, we have just the right one for you
                    </Typography>

                    {/* Search */}
                    <div className="mt-8 flex  justify-center items-center">
                        <div className="relative ">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <FaSearch />
                            </span>

                            <input
                                type="text"
                                placeholder="Make or Model"
                                className=" w-170 h-[44px] rounded-md bg-white pl-12 pr-4 text-gray-700 outline-none placeholder:animate-pulse"
                            />
                        </div>
                    </div>

                    <CityDropdown />
                    <PriceFilter/>
                </div>
            </div>

        </div>

    );
};
