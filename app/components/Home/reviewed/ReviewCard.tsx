"use client";

import Image from "next/image";
import { Typography } from "../../common/Typography";
import { useRouter } from "next/navigation";
import { StarRating } from "./StarRating";

interface Cards {
  id: string;
  title: string;
   image: string;
  review: number;
  reviewtext: string;
}

type ReviewCardProps = {
  cards: Cards;
};

export default function ReviewCarCard({ cards }: ReviewCardProps) {
  const router = useRouter();

  return (
   <div
  className="w-full h-90 bg-gray-50 rounded-2xl mt-6 overflow-hidden cursor-pointer"
  onClick={() => router.push(`/cars/${cards.id}`)}
>
  {/* IMAGE SECTION */}
  <div className="relative h-50 m-2 bg-gray-100 flex items-center justify-center">
    <Image
      src={cards.image}
      alt={cards.title}
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
      {cards.title}
    </Typography>
    <div className="mt-4">
        <StarRating rating={cards.review}  />
        <Typography variant="p" className="mt-4">{cards.reviewtext}</Typography>
    </div>

    
  </div>
</div>

  );
}
