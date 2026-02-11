"use client";

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { useRouter } from "next/navigation";
import { StarRating } from "./StarRating";

interface CarCards {
  id: string;
  title: string;
   image: string;
  review: number;
  reviewtext: string;
}

type ReviewCardProps = {
  carcards: CarCards;
};

export default function ReviewCarCard({ carcards }: ReviewCardProps) {
  const router = useRouter();

  return (
   <div
  className="w-full h-90 bg-gray-50 rounded-2xl mt-6 overflow-hidden cursor-pointer"
  onClick={() => router.push(`/cars/${carcards.id}`)}
>
  {/* IMAGE SECTION */}
  <div className="relative h-50 m-2 bg-gray-100 flex items-center justify-center">
    <Image
      src={carcards.image}
      alt={carcards.title}
      width={160}
      height={160}
      className="object-contain"
    />
  </div>

  {/* CONTENT SECTION */}
  <div className="p-4 space-y-2">
    <Typography
      variant="h5light"
      className=" md:text-base truncate"
    >
      {carcards.title}
    </Typography>
    <div className="mt-4">
        <StarRating rating={carcards.review}  />
        <Typography variant="p" className="mt-4">{carcards.reviewtext}</Typography>
    </div>

    
  </div>
</div>

  );
}
