"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/app/components/common/shadecn/ui/breadcrumb";
import { useRouter } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/app/components/common/shadecn/ui/pagination";

import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { StarRating } from "@/app/components/Home/reviewed/StarRating";
import Link from "next/link";


export const reviewedCars = [
    {
        id: "1",
        title: "MGH6",
        slug: "mgh6",
        image: "/images/mgh6.png",
        review: 5,
        reviewtext: "10 reviews",
        reviews: [
            {
                id: "r1",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:4
            },
            {
                id: "r2",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:5
            },
        ]
    },
    {
        id: "2",
        title: "HONDA CIVIC",
        slug: "honda-civic",
        image: "/images/hondacivic.png",
        review: 3.5,
        reviewtext: "5 reviews",
         reviews: [
            {
                id: "r3",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating: 3
            },
            {
                id: "r4",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 2.5
            },
        ]

    },
    {
        id: "3",
        title: "TOYOTA RAIZE",
        slug: "toyota-raize",
        image: "/images/toyotaraize.png",
        review: 3.5,
        reviewtext: "5 reviews",
         reviews: [
            {
                id: "r5",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:4.5
            },
            {
                id: "r6",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:4
            },
        ]
    },
    {
        id: "4",
        title: "CHANGAN DEEPAL",
        slug: "changan-deepal",
        image: "/images/changancar.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r7",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:1.5
            },
            {
                id: "r8",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:2.5
            },
        ]
    },
    {
        id: "5",
        title: "KIA STONIC",
        slug: "kia-stonic",
        image: "/images/kiacar.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r9",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:4.5
            },
            {
                id: "r10",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:3.5
            },
        ]
    },
    {
        id: "6",
        title: "TOYOTA Prius",
        slug: "toyota-prius",
        image: "/images/toyotaprius.png",
        review: 5,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r11",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:5
            },
            {
                id: "r12",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:2
            },
        ]
    },
    {
        id: "7",
        title: "TOYOTA AQUA",
        slug: "toyota-aqua",
        image: "/images/toyotaaqwa.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r12",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:3
            },
            {
                id: "r14",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:5
            },
        ]
    },
    {
        id: "8",
        title: "JAC MOTORS",
        slug: "jac-motors",
        image: "/images/jacmotors.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r15",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:5
            },
            {
                id: "r16",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:4
            },
        ]
    },
    {
        id: "9",
        title: "HONDA City 1.5 ASPIRE CVT",
        slug: "honda-city",
        image: "/images/hondacityaspire.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r17",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:3
            },
            {
                id: "r18",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:5
            },
        ]
    },
    {
        id: "10",
        title: "Toyota Corolla Cross",
        slug: "toyota-corolla-cross",
        image: "/images/corollacross.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r19",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:3
            },
            {
                id: "r20",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:5
            },
        ]
    },
    {
        id: "11",
        title: "CHANGAN Oshan X7",
        slug: "changan-oshan",
        image: "/images/oshan.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r21",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:3
            },
            {
                id: "r22",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:3
            },
        ]
    },
    {
        id: "12",
        title: "JAECOO",
        slug: "jaecoo",
        image: "/images/jaecoo.png",
        review: 0,
        reviewtext: "0 reviews"
    },
    {
        id: "13",
        title: "NISSAN AURA",
        slug: "nissan-aura",
        image: "/images/nissanaura.png",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r23",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:4
            },
            {
                id: "r24",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:3
            },
        ]
    },
];
export const reviewedBikes = [
    {
        id: "b1",
        title: "Honda CG 125",
        slug: "Honda-cg",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1744808493146.webp&w=750&q=75", // Make sure these paths exist
        review: 4.8,
        reviewtext: "15 reviews",
         reviews: [
            {
                id: "r25",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating: 3
            },
            {
                id: "r26",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 4
            },
        ]
    },
    {
        id: "b2",
        title: "HEAVY Bikes",
        slug: "heavy-bikes",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1753353530395.webp&w=750&q=75",
        review: 3.5,
        reviewtext: "5 reviews",
         reviews: [
            {
                id: "r27",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating: 4
            },
            {
                id: "r28",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 3
            },
        ]

    },
    {
        id: "3",
        title: "SUZUKI MotorCycles",
        slug: "suzuki-motercycles",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1753440214343.webp&w=750&q=75",
        review: 3.5,
        reviewtext: "5 reviews",
         reviews: [
            {
                id: "r29",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:3
            },
            {
                id: "r30",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 3
            },
        ]
    },
    {
        id: "4",
        title: "ZXMCO Bikes",
        slug: "zxmco-bikes",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1753439036002.webp&w=750&q=75",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r31",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating: 4
            },
            {
                id: "r32",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating:0
            },
        ]
    },
    {
        id: "5",
        title: "YAMAHA Bikes",
        slug: "yamaha-bikes",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1753439378048.webp&w=750&q=75",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r33",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:1
            },
            {
                id: "r34",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 2
            },
        ]
    },
    {
        id: "6",
        title: "Electric Bikes and Scooters",
        slug: "electric-bikes-and-scooters",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1754805831665.webp&w=750&q=75",
        review: 5,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r35",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",

                rating:3
            },
            {
                id: "r36",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 5
            },
        ]
    },
    {
        id: "7",
        title: "MOUNTAIN BIKES",
        slug: "mountain-bikes",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1755072304960.webp&w=750&q=75",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r37",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating: 0
            },
            {
                id: "r38",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 4
            },
        ]
    },
    {
        id: "8",
        title: "CYCLING WORLD",
        slug: "cycling-world",
        image: "https://thepremiervehicles.com/_next/image?url=https%3A%2F%2Fprimervehicles.blr1.digitaloceanspaces.com%2Fadmin-posts%2F1769253071724.webp&w=750&q=75",
        review: 0,
        reviewtext: "0 reviews",
         reviews: [
            {
                id: "r39",
                user: "Admin",
                message: "Excellent SUV with great comfort.",
                createdAt: "2026-02-18",
                rating:5
            },
            {
                id: "r40",
                user: "Admin",
                message: "Very smooth drive and reliable.",
                createdAt: "2026-02-18",
                rating: 3
            },
        ]
    },


]

export default function Reviews() {
    const router = useRouter();
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTabs, setActiveTabs] = useState<"cars" | "bikes">("cars");

    const currentData = activeTabs === "cars" ? reviewedCars : reviewedBikes;
    const totalPages = Math.ceil(currentData.length / itemsPerPage);

    const currentPageData = currentData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <div>
            <div className="ml-18 mt-8">
                <button onClick={() => router.push("/")} className="text-gray-500">
                    <FaArrowLeft size={20} />
                </button>
                <div className="mt-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-[18px]">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[18px]"> Popular Reviews</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="flex gap-6 border-b mt-6 mb-8 lg:mr-18 mr-8">
                    <button
                        onClick={() => { setActiveTabs("cars"); setCurrentPage(1); }}
                        className={`pb-2 text-lg font-medium ${activeTabs === "cars"
                            ? "border-b-2 border-orange-500 text-orange-500"
                            : "text-gray-500"
                            }`}
                    >
                        Cars
                    </button>

                    <button
                        onClick={() => { setActiveTabs("bikes"); setCurrentPage(1); }}
                        className={`pb-2 text-lg font-medium ${activeTabs === "bikes"
                            ? "border-b-2 border-orange-500 text-orange-500"
                            : "text-gray-500"
                            }`}
                    >
                        Bikes
                    </button>
                </div>

            </div>
            <div className="max-w-6xl mx-auto mt-10 px-6 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentPageData.map((item) => (
                        <Link
                            key={item.id}
                            href={`/pages/reviews/${item.slug}`}
                            className=" bg-gray-100 rounded-xl p-2 cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-contain bg-white mb-4"
                            />
                            <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
                            <div className="mb-4">
                                <StarRating rating={item.review} />
                            </div>

                            <p className="text-sm text-gray-500 mt-1">{item.reviewtext}</p>


                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <Pagination>
                    <PaginationContent>

                        {/* Previous */}
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    currentPage > 1 && setCurrentPage(currentPage - 1)
                                } className="cursor-pointer"
                            />
                        </PaginationItem>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={currentPage === index + 1}
                                    onClick={() => setCurrentPage(index + 1)} className="cursor-pointer"
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {/* Next */}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    currentPage < totalPages &&
                                    setCurrentPage(currentPage + 1)
                                } className="cursor-pointer"
                            />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
            </div>

        </div>
    )
}