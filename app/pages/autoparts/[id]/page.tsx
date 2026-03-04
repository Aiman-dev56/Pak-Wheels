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

    const autopart = data.AutoParts.find(
        (item: any) => item.id === id
    );

    useEffect(() => {
        if (id && !autopart) {
            toast.error("Part Not Found");
            router.push("/autoparts");
        }
    }, [id, autopart, router]);

    if (!autopart) return null;

    return <ProductDetails product={autopart} />; // ✅ bike not bikes
}