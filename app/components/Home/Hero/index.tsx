"use client";

import Image from "next/image";
import Bg1 from "../../../../public/images/car.jpg";
import Bg2 from "../../../../public/images/flag.jpg";
import { FaSearch } from "react-icons/fa";
import { Typography } from "../../common/Typography";
import { CityDropdown } from "../../common/CityDropdown/CityDropdown";
import { PriceFilter } from "../pricefilter";

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">

      {/* Background Image 1 */}
      <Image
        src={Bg1}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Optional Decorative Layer (Centered Image) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-20">
        <Image
          src={Bg2}
          alt="Overlay"
          className="w-[80%] max-w-7xl h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 text-center text-white">

        <Typography variant="h1" className="font-light">
          Find Your Ride Or Sell It Fast -
        </Typography>

        <Typography variant="h1" className="font-light">
          All In One Place
        </Typography>

        <Typography variant="p" className="mt-4 text-lg">
          With thousands of cars, we have just the right one for you
        </Typography>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>

            <input
              type="text"
              placeholder="Make or Model"
              className="w-full h-12 rounded-md bg-white pl-12 pr-4 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Dropdown + Filter */}
        <CityDropdown />
        <PriceFilter />

      </div>
    </div>
  );
};
