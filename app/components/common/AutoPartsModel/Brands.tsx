import Image from "next/image";
import { Typography } from "../Typography";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface AutoPartsBrands {
    name: string;
    image: string
}



const bikes: AutoPartsBrands[] = [
    {
        name: "Audi",
        image: "/images/audilogo.png"
    },
    {
        name: "Porshe",
        image: "/images/Porsche-Logo.jpg"
    },
    {
        name: "Nissan",
        image: "/images/nissanlogo.png"
    },
    {
        name: "Kia",
        image: "/images/kialogo.png"
    },
    {
        name: "hyundai",
        image: "/images/hyundailogo.png"
    },
    {
        name: "Proton",
        image: "/images/protonlogo.png"
    },
    {
        name: "Suzuki",
        image: "/images/suzukilogo.png"
    },
    {
        name: "Daihatsu",
        image: "/images/daihalogo.jpg"
    },
    {
        name: "Changan",
        image: "/images/changanlogo.png"
    },
    {
        name: "Mitsubishi",
        image: "/images/mitsubishilogo.png"
    },
    {
        name: "BMW",
        image: "/images/bmwlogo.jpg "
    },
    {
        name: "Mercedes-Benz",
        image: "/images/mercedeslogo.png"
    },
    {
        name: "Toyota",
        image: "/images/tototalogo.png"
    },
    {
        name: "Honda",
        image: "/images/hondalogo.png"
    },
    {
        name: "Nissan 2",
        image: "/images/nissanlogo.png"
    },
    {
        name: "Kia 2 ",
        image: "/images/kialogo.png"
    },
    {
        name: "hyundai 2",
        image: "/images/hyundailogo.png"
    },
    {
        name: "Proton 2",
        image: "/images/protonlogo.png"
    },
    {
        name: "Suzuki 2",
        image: "/images/suzukilogo.png"
    },
    {
        name: "Daihatsu 2",
        image: "/images/daihalogo.jpg"
    },
    {
        name: "Changan 2",
        image: "/images/changanlogo.png"
    },
    {
        name: "Mitsubishi 2",
        image: "/images/mitsubishilogo.png"
    },
    {
        name: "BMW 2",
        image: "/images/bmwlogo.jpg "
    },
    {
        name: "Mercedes-Benz2 ",
        image: "/images/mercedeslogo.png"
    }

];


export const AutoPartsBrands = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    return (
        <div className=" mx-auto overflow-x-auto scroll-smooth hide-scrollbar ">
            <div

                className="w-full"
            ></div>
            <div className=" grid grid-rows-2 grid-flow-col  auto-cols-[130px] lg:auto-cols-[150px] gap-6  m-4 lg:m-8">
                {bikes.map((bike) => (
                    <div
                        key={bike.name}
                        className="flex flex-col items-center bg-gray-50 justify-center border-2 border-gray-300 rounded-xl cursor-pointer scroll-snap-align-start h-30 lg:h-40 ">
                        <div className="relative h-15 w-15 lg:w-20 lg:h-20">
                            <Image
                                src={bike.image}
                                alt={bike.name}
                                fill
                                className="object-contain"

                            />
                        </div>
                        <div>
                            <Typography variant="h5">{bike.name}</Typography>
                        </div>


                    </div>
                ))}

            </div>
        </div>

    );
}

