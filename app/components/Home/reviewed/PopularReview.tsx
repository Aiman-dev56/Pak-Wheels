"use client";

import { Typography } from "../../common/Typography";
import { CommonSlider } from "../../common/sliders";
import { AiOutlineRight } from "react-icons/ai";
import ReviewCarCard from "./ReviewCard";


export default function ReviewCarsSection() {
    const reviewedCars = [
        {
            id: "1",
            title: "MG H6",
            image: "/images/mgh6.png",
            review: 5,
            reviewtext: "10 reviews"
        },
        {
            id: "2",
            title: "HONDA CIVIC",
            image: "/images/hondacivic.png",
            review: 3.5,
            reviewtext: "5 reviews"
        },
        {
            id: "3",
            title: "TOYOTA RAIZE",
            image: "/images/toyotaraize.png",
            review: 3.5,
            reviewtext: "5 reviews"
        },
        {
            id: "4",
            title: "CHANGAN DEEPAL",
            image: "/images/changancar.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "5",
            title: "KIA STONIC",
            image: "/images/kiacar.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "6",
            title: "TOYOTA Prius",
            image: "/images/toyotaprius.png",
            review: 5,
            reviewtext: "0 reviews"
        },
        {
            id: "7",
            title: "TOYOTA AQUA",
            image: "/images/toyotaaqwa.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "8",
            title: "JAC MOTORS",
            image: "/images/jacmotors.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "9",
            title: "HONDA City 1.5 ASPIRE CVT",
            image: "/images/hondacityaspire.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "10",
            title: "Toyota Corolla Cross",
            image: "/images/corollacross.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "11",
            title: "CHANGAN Oshan X7",
            image: "/images/oshan.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "12",
            title: "JAECOO",
            image: "/images/jaecoo.png",
            review: 0,
            reviewtext: "0 reviews"
        },
        {
            id: "13",
            title: "NISSAN AURA",
            image: "/images/nissanaura.png",
            review: 0,
            reviewtext: "0 reviews"
        },


    ]

      return (
        <div className="container">
          <div className="lg:mt-20 lg:ml-20 m-10 lg:mr-20  flex flex-col">
            <div className=" justify-between inline-flex">
              <Typography variant="h2" className="font-normal mb-4">Popular Reviewed</Typography>
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
                items={reviewedCars}
                autoplay
                slidesOnPhone={1}
                slidesOnTablet={2}
                slidesOnDesktop={4}
                slidesOnLargeScreens={5}
                renderItem={(carcards) => <ReviewCarCard cards={carcards} />}

              />

            </div>
          </div>
        </div>

      );
}
