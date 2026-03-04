"use client";

import data from "@/app/data/Data.json";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ProductDetails from "@/app/components/common/ProductDetail";


export default function CarDetails() {
    const router = useRouter();
    const params = useParams();
    const car = data.cars.find((item: any) => item.id === params.id);

    useEffect(() => {
        if (!car) {
            toast.error("Car Not Found");
            router.push("/pages/cars");
        }
    }, [car, router]);

    if(!car) return null;

    return(
        <div>
             
               <ProductDetails product={car}/>
              
        </div>
    )

}
