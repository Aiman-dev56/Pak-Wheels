"use client";

import { Typography } from "../../common/Typography";
import PowerCarCard from "./PowerCard";
import { CommonSlider } from "../../common/sliders";
import data from "@/app/data/Data.json";
import { AiOutlineRight } from "react-icons/ai";


export default function PowerBikesSection() {
  const powerCars = data.bikes.filter((bike) => bike.powerHP && bike.powerHP >= 25);
  

  return (
    <div className="container">
      <div className="lg:mt-20 m-10 lg:ml-20 lg:mr-20  flex flex-col">
        <div className=" justify-between inline-flex">
          <Typography variant="h2" className="font-normal mb-4">Power Up Bikes</Typography>
          <div className="flex gap-1  lg:mt-5 mt-2 cursor-pointer">
            <Typography variant="h6">View All</Typography>
            <span className=" mt-1" ><AiOutlineRight size={16} color="blue" /></span>
          </div>
        </div>
        <hr className="border-[1px]" />




      </div>
      <div className="mt-4 flex flex-col m-8">



        <div className="lg:m-10">
          <CommonSlider
            items={powerCars}
            slidesOnPhone={1}
            slidesOnTablet={2}
            slidesOnDesktop={4}
            slidesOnLargeScreens={5}
            renderItem={(car) => <PowerCarCard car={car} />}

          />

        </div>
      </div>
    </div>

  );
}
