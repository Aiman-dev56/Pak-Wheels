"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const prices = [
    "1.00 lacs",
    "2.00 lacs",
    "3.00 lacs",
    "4.00 lacs",
    "5.00 lacs",
    "10.00 lacs",
    "15.00 lacs",
    "20.00 lacs",
    "25.00 lacs",
    "30.00 lacs",
    "35.00 lacs",
    "40.00 lacs",
    "45.00 lacs",
    "50.00 lacs",
    "55.00 lacs",
    "60.00 lacs",
    "65.00 lacs",
    "70.00 lacs",
    "80.00 lacs",
    "90.00 lacs",
    "1.00 Cr",
    "1.20 Cr",
    "1.30 Cr",
    "1.40 Cr",
    "1.50 Cr",
    "2.00 Cr",
    "2.50 Cr"
];

export const PriceFilter = () => {
    const router = useRouter();
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = () => {
        if (!minPrice || !maxPrice) return;

        router.push(`/cars?min=${minPrice}&max=${maxPrice}`);

    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5 items-center">
                <div className="lg:flex-row md:flex-row mt-6 flex flex-col sm:flex-row  gap-4 w-full max-w-2xl mx-auto">
                    <div className="flex flex-col w-full mx-auto sm:mx-0 md:w-full sm:w-full lg:w-82 ">

                        <select className="border p-3 rounded-md bg-white text-gray-400 cursor-pointer"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        >
                            <option value="">Price From</option>
                            {prices.map((p) => (
                                <option key={p}
                                    value={p}>{p}</option>
                            ))}


                        </select>
                    </div>
                    <div className="flex flex-col w-full mx-auto md:w-full sm:w-full  sm:mx-0 lg:w-82">

                        <select className="border p-3 rounded-md bg-white text-gray-400 cursor-pointer"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}>
                            <option value="" >Price To</option>
                            {prices.map((p) => (
                                <option key={p}>{p}</option>
                            ))}
                        </select>

                    </div>
                </div>


                <div className="mt-6 flex flex-col  gap-4 w-full max-w-2xl mx-auto">

                    <button
                        onClick={handleSearch}
                        className="
                        
      w-full 
       
      h-12 
      bg-orange-600 
      text-white 
      rounded-md 
      transition-all 
      duration-300 
      hover:opacity-80
      curs
    "
                    >
                        Search
                    </button>

                    <button
                        className="
      w-full 
      sm:w-auto 
      h-12
      bg-transparent 
      border-2 
      border-orange-500 
      text-orange-500
      rounded-md 
      px-6 
      transition-all 
      duration-300
       cursor-pointer
      
    "
                    >
                        Advanced Filters
                    </button>

                </div>




            </div>
        </div>


    )
}