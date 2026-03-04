"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Controller } from "swiper/modules";
import { useState } from "react";
import { PiImageSquare } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { PiSpeedometer } from "react-icons/pi";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/common/shadecn/ui/breadcrumb";
import { TbManualGearbox } from "react-icons/tb";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../button";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiSolidFlagAlt } from "react-icons/bi";
import { Typography } from "../Typography";
import { useAuth } from "@/app/context/AuthContext";
import { Footer } from "../../Footer";
import AuthModal from "../../auth/AuthModel";



interface Product {
    id: string;
    title: string;
    price: string;
    brand?: string;
    model?: string;
    version?: string;
    year?: string;
    city?: string;
    description?: string;
    fuel?: string;
    km?: string;
    engineCC?: number;
    speed?: number;
    powerHP?: number;
    image: string[];
    whatsappNumber?: string;
}

interface Props {
    product: Product;
}

export default function ProductDetails({ product }: Props) {
    const [mainSwiper, setMainSwiper] = useState<any>(null); // Controller
    const [current, setCurrent] = useState(0);
    const [open, setIsOpen] = useState(false);
    const { user } = useAuth();

    const handelAuth = (action: string) => {
    if (!user) {
        setIsOpen(true);
        return;
    }

    console.log(`${action} clicked`);
    }

   const handleWp = () => {
    if (!user) {
        setIsOpen(true);
        return;
    }

    if (product.whatsappNumber) {
        const message = `Hi, I am interested in ${product.title}`;
        const url = `https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
};

    if (!product.image || product.image.length === 0) {
        return (
            <div className="flex justify-center items-center border h-64">
                No Images
            </div>
        );
    }

    return (
        <div>
            <div className="mt-8 hidden lg:block lg:ml-24 lg:mb-14">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-[18px]">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[18px]"> Product</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[18px]">Details</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>


            <div className="grid lg:grid-cols-12 grid-cols-1 m-16 gap-6">
                {/* LEFT - Images */}
                <div className="lg:col-span-8 relative">
                    {/* Main Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                            onSwiper={setMainSwiper}
                            className="h-[450px] rounded-md overflow-hidden"
                        >
                            {product.image.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt={`Product Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-4 z-10 bg-black/60 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
                            <PiImageSquare />
                            {current + 1} / {product.image.length}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                        {product.image.map((img, index) => (
                            <div
                                key={index}
                                className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border ${current === index ? "border-blue-500" : "border-gray-300"
                                    }`}
                                onClick={() => mainSwiper?.slideToLoop(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {current === index && (
                                    <div className="absolute inset-0 bg-black/40" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT - Product Info */}
                <div className="lg:col-span-4 space-y-4 m-6">
                    <h1 className="text-2xl font-light">{product.title}</h1>
                    <p className="text-xl font-light">{product.price}</p>
                    <div className="inline-flex text-gray-400"><CiLocationOn size={28} />
                        {product.city && <h5 className=" mt-1 "> {product.city}</h5>}
                    </div>
                    <div className="flex  gap-4">
                        <div className="flex flex-col bg-gray-100 border border-gray-400 w-20 h-20  items-center rounded p-2 gap-2 ">
                            <SlCalender size={30} />
                            {product.year && <p>{product.year}</p>}
                        </div>

                        <div className="flex flex-col bg-gray-100 border border-gray-400 w-20 h-20  items-center rounded p-2 gap-2 ">
                            <BsFuelPumpDiesel size={34} />
                            {product.fuel && <p>  {product.fuel}</p>}
                        </div>
                        <div className="flex flex-col bg-gray-100 border border-gray-400 w-20 h-20  items-center rounded p-2 gap-2 ">
                            <PiSpeedometer size={34} />
                            {product.speed && <p>  {product.speed}</p>}
                        </div>
                        <div className="flex flex-col bg-gray-100 border border-gray-400 w-20 h-20  items-center rounded p-2 gap-2">
                            <TbManualGearbox size={34} />
                            {product.year && <p>{product.year}</p>}

                        </div>

                    </div>
                    <div>
                        <Button className="flex gap-2 bg-orange-600 hover:bg-orange-500 w-full text-white py-2 px-6 h-12 mt-6 ">
                            <FaPhoneAlt />
                            Call Saller

                        </Button>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <Button className="flex gap-2 w-full " onClick={() => handelAuth("chat")}>
                            <IoChatbubbleEllipsesOutline size={24} />
                            Chat
                        </Button>
                        <Button className="flex gap-1" onClick={handleWp}>
                            <FaWhatsapp size={24} color="green" />
                            WhatsApp
                        </Button>

                    </div>
                    <Button className=" flex gap-2 w-full" onClick={() => handelAuth("report")}>
                        <BiSolidFlagAlt />
                        Report This Ad
                    </Button>
                </div>
                <AuthModal
                    isOpen={open}
                    onClose={() => setIsOpen(false)}
                />
            </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 m-16 gap-6">
                <div className="lg:col-span-8">
                    <Typography variant="h4" className="!text-4xl !font-light border border-orange-600 py-4 px-4 rounded-md">
                        Description

                    </Typography>
                    <Typography variant="h5light" className="mt-8 border border-orange-600 rounded-md px-4 py-8">
                        {product.description && <p>{product.description}</p>}
                    </Typography>
                </div>
                <div className="lg:col-span-4">
                    <Typography variant="h4" className="flex items-center justify-center !text-4xl !font-light px-4 py-4" >
                        Vehicle details
                    </Typography>
                    <div className="flex flex-col border-2 border-orange-500 h-auto items-center rounded-md">
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>

                            <hr className="border-gray-600 w-full mt-2" />
                        </div>
                        <div className="py-4 px-4 w-full">
                            <div className="flex justify-between">
                                <span>ID</span>
                                {product.id && <p> {product.id}</p>}
                            </div>


                        </div>

                    </div>

                    <div className="mt-10">
                        <Typography variant="h4" className="!text-3xl">Notable Features</Typography>
                        <div className="border flex flex-col border-gray-400 mt-4 rounded-md h-50 shadow-xl">
                            <div className="flex  justify-between">
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">ABS</Typography>
                                </div>
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Sunroof</Typography>
                                </div>

                            </div>
                            <div className="flex  justify-between">
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Power Windows</Typography>
                                </div>
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Alloy Wheels</Typography>
                                </div>

                            </div>
                            <div className="flex  justify-between">
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Power Steering</Typography>
                                </div>
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Backup Camera

                                    </Typography>
                                </div>

                            </div>
                            <div className="flex  justify-between">
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Bluetooth</Typography>
                                </div>
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Navigation System</Typography>
                                </div>

                            </div>
                            <div className="flex  justify-between">
                                <div className="flex py-2 px-4 gap-2">
                                    <FaArrowRight size={20} />
                                    <Typography variant="p" className="!text-[16px]">Fog Lights</Typography>
                                </div>


                            </div>


                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}