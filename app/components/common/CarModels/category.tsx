import Image from "next/image";
import { Typography } from "../Typography";


interface Category {
    name: string;
    image: string
}

const categories : Category[] = [
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
},{
    name: "Sport Cars",
    image: "/images/sportcars.jpg"
},
{
    name: "Two Doors",
    image: "/images/twodoors.jpg"
}

]

export const Category = () => {
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 m-10">
            {categories.map((category) => (
                            <div
                                key={category.name}
                                className="flex flex-col items-center bg-gray-50 justify-center border-2 border-gray-300 rounded-xl cursor-pointer h-50 ">
                                <div className="relative w-20 h-20">
                                    <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-contain"
                                    
                                    />
                                </div>
                                <div>
                                    <Typography variant="h5" className="mt-5">{category.name}</Typography>
                                </div>
            </div>
            
            ))}

        </div>

    )

}