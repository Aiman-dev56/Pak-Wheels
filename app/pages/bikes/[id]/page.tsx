"use client";

import data from "@/app/data/Data.json";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ProductDetails from "@/app/components/common/ProductDetail";

export default function BikeDetails() {
    const router = useRouter();
    const params = useParams();

    const id = params?.id as string;

    const bike = data.bikes.find(
        (item: any) => item.id === id
    );

    useEffect(() => {
        if (id && !bike) {
            toast.error("Bike Not Found");
            router.push("/bikes");
        }
    }, [id, bike, router]);

    if (!bike) return null;

    return <ProductDetails product={bike} />; // ✅ bike not bikes
}