"use client";

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { useRouter } from "next/navigation";
import { IoLocationOutline } from "react-icons/io5";


interface AutoParts {
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
  type: string;
  fuel?: string;
  posted?: string;
  description?: string;
  city?: string;
  image: string[];
  sold?: boolean;
  inSale?: boolean;
  part: number;
}

type AutoPartsCardProps = {
  autoparts: AutoParts;
};

export default function AutoPartCarCard({ autoparts }: AutoPartsCardProps) {
  const router = useRouter();
const cityName = autoparts.city?.split(",")[0];

  const handleClick = () => {
    // Navigate to car details page with id
    router.push(`/cars/${autoparts.id}`);
  };

  return (
    <div
      className="w-full flex flex-col gap-2 bg-white border border-orange-400 rounded-2xl mt-6 overflow-hidden cursor-pointer "
      onClick={handleClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={autoparts.image[0]}
          alt={autoparts.title}
          fill
          className="object-cover rounded-t-2xl"
        />

        <span className="absolute top-3 left-2 bg-white px-2 w-28 py-2 text-xs md:text-sm rounded-full  flex items-center gap-1 truncate">
          <IoLocationOutline /> {cityName}
        </span>
       
      </div>

      <div className="p-4 space-y-1">
        {/* Title with ellipsis */}
        <Typography
          variant="h5light"
          className="text-[20px] truncate first-letter:uppercase"
        >
          {autoparts.title}
        </Typography>

        {/* Price */}
        <Typography
          variant="p"
          className="text-sm md:text-base text-gray-600 truncate"
        >
          PKR {autoparts.price}
        </Typography>

        {/* Details like year, km, fuel */}
        <Typography
          variant="p"
          className="text-xs md:text-sm text-gray-500 truncate"
        >
          {autoparts.type}
        </Typography>

        {/* Posted info */}
        <Typography
          variant="p"
          className="text-xs md:text-sm text-gray-400 truncate"
        >
          {autoparts.posted ?? "Few days ago"}
        </Typography>
      </div>
    </div>
  );
}
