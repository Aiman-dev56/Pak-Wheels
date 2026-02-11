"use client";

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { useRouter } from "next/navigation";
import { IoLocationOutline } from "react-icons/io5";

interface Car {
  id: string;
  title: string;
  price: string;
  brand?: string;
  Model?: string;
  category?: string;
  year?: string | number;
  engineCC?: number;
  powerHP?: number;
  km?: string;
  fuel?: string;
  posted?: string;
  description?: string;
  city?: string;
  image: string[];
  sold?: boolean;
  inSale?: boolean;
}

type PowerCarCardProps = {
  car: Car;
};

export default function PowerCarCard({ car }: PowerCarCardProps) {
  const cityName = car.city?.split(",")[0];
  const router = useRouter();

  const handleClick = () => {
    // Navigate to car details page with id
    router.push(`/cars/${car.id}`);
  };

  return (
    <div
      className="w-full flex flex-col gap-2 bg-white border border-orange-400 rounded-2xl mt-6 overflow-hidden cursor-pointer "
      onClick={handleClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={car.image[0]}
          alt={car.title}
          fill
          className="object-cover rounded-t-2xl"
        />

        <span className="absolute top-3 left-2 bg-white px-2 w-28 py-2 text-xs md:text-sm rounded-full  flex items-center gap-1 truncate">
          <IoLocationOutline /> {cityName}
        </span>
        <span className="absolute top-3 right-0 bg-orange-500 text-white px-2 py-2 text-xs md:text-sm rounded-md flex items-center gap-1">
          ⚡ POWERUP
        </span>
      </div>

      <div className="p-4 space-y-1">
        {/* Title with ellipsis */}
        <Typography
          variant="h3"
          className="text-sm md:text-base truncate"
        >
          {car.title}
        </Typography>

        {/* Price */}
        <Typography
          variant="p"
          className="text-sm md:text-base text-gray-800 truncate"
        >
          PKR {car.price}
        </Typography>

        {/* Details like year, km, fuel */}
        <Typography
          variant="p"
          className="text-xs md:text-sm text-gray-500 truncate"
        >
          {car.year} | {car.km ?? "-"} km | {car.fuel ?? "Petrol"}
        </Typography>

        {/* Posted info */}
        <Typography
          variant="p"
          className="text-xs md:text-sm text-gray-400 truncate"
        >
          {car.posted ?? "Few days ago"}
        </Typography>
      </div>
    </div>
  );
}
