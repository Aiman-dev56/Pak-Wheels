import Image from "next/image";
import { Typography } from "../Typography";

interface CarModel{
    name: string;
    image: string
}



const cars: CarModel[]= [
        {
            name: "Toyota",
            image: "/images/tototalogo.png"
        },
        {
            name: "Honda",
            image: "/images/hondalogo.png"
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
        }

    ];

    
    export const CarModel = () => {
        return (
        <div className="grid grid-cols-3 lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 gap-6 m-8 lg:m-18">
            {cars.map((car) => (
                <div
                    key={car.name}
                    className="flex flex-col items-center bg-gray-50 justify-center border-2 border-gray-300 rounded-xl cursor-pointer h-40 ">
                    <div className="relative w-20 h-20">
                        <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                        
                        />
                    </div>
                    <div>
                        <Typography variant="h5">{car.name}</Typography>
                    </div>


                </div>
            ))}

        </div>
        );
    }

