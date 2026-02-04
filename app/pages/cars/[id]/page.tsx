"use client";

import { useParams } from "next/navigation";
import data from "@/app/data/Data.json";
import Image from "next/image";
import { Typography } from "@/app/components/common/Typography";

export default function CarDetailsPage() {
  const params = useParams();
  const car = data.cars.find((c) => c.id === params.id);

  if (!car) return <div>Car not found</div>;

  return (
    <div className="m-8">
      <Typography variant="h1" className="mb-4">
        {car.title}
      </Typography>

      <div className="relative h-64 w-full md:h-96 mb-6">
        <Image
          src={car.image[0]}
          alt={car.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <Typography variant="h3" className="mb-2">
        Price: PKR {car.price}
      </Typography>

      <Typography variant="p" className="mb-2">
        {car.year} | {car.km ?? "-"} km | {car.fuel ?? "Petrol"}
      </Typography>

      <Typography variant="p" className="mb-4">
        Posted: {car.posted ?? "Few days ago"}
      </Typography>

      <Typography variant="p">{car.description}</Typography>
    </div>
  );
}
