import Image from "next/image";
import { Typography } from "../Typography";


interface AutoPartsCategory {
    name: string;
    image: string
}

const categories: AutoPartsCategory[] = [
    {
        name: "SUV",
        image: "/images/suvlogo.png"
    },
    {
        name: "Double Cabin",
        image: "/images/doublecabin.png"
    },
    {
        name: "4X4 Cars",
        image: "/images/4x4.jpg"
    },
    {
        name: "Vintage Cars",
        image: "/images/vintage.jpg"
    },
    {
        name: "Automatic Cars",
        image: "/images/automatic.jpg"
    },
    {
        name: "Diesel Car",
        image: "/images/diesel.jpg"
    },
    {
        name: "Small Cars",
        image: "/images/smallcars.jpg"
    },
    {
        name: "Old Cars",
        image: "/images/ oldcars.jpg"
    },
    {
        name: "Family Cars",
        image: "/images/familycars.jpg"
    },
    {
        name: "Sedan",
        image: "/images/sedan.jpg"
    }, {
        name: "Sport Cars",
        image: "/images/sportcars.jpg"
    },
    {
        name: "Two Doors",
        image: "/images/twodoors.jpg"
    },
    {
        name: "SUV",
        image: "/images/suvlogo.png"
    },
    {
        name: "Double Cabin",
        image: "/images/doublecabin.png"
    },
    {
        name: "4X4 Cars",
        image: "/images/4x4.jpg"
    },
    {
        name: "Vintage Cars",
        image: "/images/vintage.jpg"
    },
    {
        name: "Automatic Cars",
        image: "/images/automatic.jpg"
    },
    {
        name: "Diesel Car",
        image: "/images/diesel.jpg"
    },
    {
        name: "Small Cars",
        image: "/images/smallcars.jpg"
    },
    {
        name: "Old Cars",
        image: "/images/ oldcars.jpg"
    },
    {
        name: "Family Cars",
        image: "/images/familycars.jpg"
    },
    {
        name: "Sedan",
        image: "/images/sedan.jpg"
    }, {
        name: "Sport Cars",
        image: "/images/sportcars.jpg"
    },
    {
        name: "Two Doors",
        image: "/images/twodoors.jpg"
    }

]

export const AutoPartsCategory = () => {
    return (
        <div className=" mx-auto overflow-x-auto scroll-smooth hide-scrollbar">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[130px] lg:auto-cols-[150px] gap-4 m-8 lg:m-10">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="flex flex-col items-center bg-gray-50 justify-center border-2 border-gray-300 rounded-xl cursor-pointer lg:h-50 h-50 w-34 ">
                        <div className="relative lg:w-20 lg:h-20 w-16 h-16">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-contain"

                            />
                        </div>
                        <div>
                            <Typography variant="h5" className="mt-5  p-2">{category.name}</Typography>
                        </div>
                    </div>

                ))}

            </div>
        </div>


    )

}