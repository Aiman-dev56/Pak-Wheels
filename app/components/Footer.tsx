"use client";

import Link from "next/link";

import Image from "next/image";
import logo from "../../public/images/white-logo.png"
import { Typography } from "./common/Typography";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { usePathname } from "next/navigation";
import CustomLinks from "./common/customlinks/CustomLinks";
import "@/app/globals.css"


// cars data

const carBrands = ["Toyota", "Honda", "Suzuki", "Daihatsu", "Nissan", "Kia", "Changan", "Mitsubishi", "Hyundai", "Proton"];
const carModels = ["Corolla", "Yaris CROSS", "Camry", "Hilux", "Fortuner", "Corolla", "Prius", "Raize", "Crown", "VITZ"]
const carCity = ["Peshawar", "Mardan", "Kohat", "Swabi", "Islamabad", "Karachi", "Hyderabad", "Multan", "Quetta", "Chaman"];

// bikes data

const bikeBrands =  ["Honda", "Yamaha", "Suzuki", "Super Power", "Hi Speed Chinese", "Kawasaki", "Road Prince", "Unique", "United", "Aprilla"];
const bikeModels = ["CG 125", "CD 70", "CG125", "PRIDOR", "CB 150 F", "CG125 Special Edition", "CB125 F", " CD70 Dream", "GT Edition", "CG 150"];
const bikeCity = ["Peshawar", "Mardan", "Kohat", "Swabi", "Islamabad", "Karachi", "Hyderabad", "Multan", "Quetta", "Chaman"];

// autoparts data

const autoPartsBrand = ["Auto Hub", "Car Geek", "Alpha Parts", "Umar Tyres", "PakWheels", "ZIC", "Alpha Pak", "AGS", "Mobil"];
const autopartsCategory = ["Audio/Video", "Car Exhausts", "Tyre & Rims", "Car Care", "Brakes", "Interior", "Exterior", "Lights", "Engines", "Tools & Gadgets"];
const autoPartsCity = ["Peshawar", "Mardan", "Kohat", "Swabi", "Islamabad", "Karachi", "Hyderabad", "Multan", "Quetta", "Chaman"];


export const Footer = () => {
    const pathname = usePathname();


    let brandsList: string[] = [];
    let modelslist: string[] = [];
    let citylist: string[] = [];
    let basePath =  "/cars";
    let heading: string = "";


    if (pathname === "/" || pathname.startsWith("/cars")) {
        brandsList = carBrands;
        modelslist = carModels;
        citylist = carCity;
        heading = "Cars";
    } else if (pathname.startsWith("/bikes")) {
        brandsList = bikeBrands;
        modelslist = bikeModels;
        citylist = bikeCity;
        basePath =  "/bikes"
        heading = "Bikes";
    } else if (pathname.startsWith("/autoparts")) {
        brandsList = autoPartsBrand;
        modelslist = autopartsCategory;
        citylist = autoPartsCity;
        basePath =  "/autoparts"
        heading = "Auto Parts"
    } else {
        brandsList = carBrands;
        modelslist = carModels;
        citylist = carCity;
        basePath =  "/cars";
        heading = "Cars";

    }




    return (
        <div className=" mx-auto bg-black text-white  w-full  p-5 lg:p-0 bottom-0 ">
            <div className=" sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:p-20 md:p-16 ">
                <div className="flex flex-col">
                    <Image
                        src={logo}
                        alt="logo"
                        height={120}
                        width={120}
                    />
                    <div>
                        <Typography variant="h4" className="flex mt-2">Contact Us</Typography>
                        <Typography variant="p" className="flex gap-3 mt-4 text-base"><span><FaWhatsapp size={22} /></span>+92 3326033338</Typography>
                        <Typography variant="p" className="flex gap-3 mt-4"><span><FiPhoneCall size={22} /></span>+92 3326033338</Typography>
                        <Typography variant="h4" className="mt-6">Follow Us</Typography>
                        <div className="flex gap-2 mt-4">
                            <Link href="https://www.facebook.com/thepremiervehicles">
                                <FaFacebook size={22} className="cursor-pointer" /></Link>

                            <Link
                                href="https://www.instagram.com/thepremiervehicles/"
                            >
                                <FaInstagram size={22} className="cursor-pointer" />
                            </Link>

                            <Link
                                href="https://www.tiktok.com/@the.premier.vehicles"
                            >
                                <FaTiktok size={22} className="cursor-pointer" />
                            </Link>


                            <Link
                                href="https://www.youtube.com/@Thepremiervehicles"
                            >
                                <FaYoutube size={22} className="cursor-pointer" />
                            </Link>



                            <FaLinkedin size={22} />
                        </div>
                    </div>
                </div>

                {/* brand grid */}
                <div className="flex flex-col ">
                    <Typography variant="h5light" className="text-[20px] mt-8 lg:mt-0">{heading} By Brands</Typography>
                    <hr className="border-2 rounded mt-2"></hr>
                    <ul className="space-y-3 mt-4   text-[16px] list-disc p-3">
                        {brandsList.map((brand) => (
                            <li key={brand}>
                                <Link href={`/${heading.toLowerCase()}?brand=${brand}`}>
                                    {brand}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </div>

                <div className="flex flex-col">
                    <Typography variant="h5light" className="text-[20px] mt-8 lg:mt-0">{heading} By Models</Typography>
                    <hr className="border-2 rounded mt-2"></hr>
                    <ul className="space-y-3 mt-4 p-3 text-[16px] list-disc">
                        {modelslist.map((brand) => (
                            <li key={brand}>
                                <Link href={`/${heading.toLowerCase()}?brand=${brand}`}>
                                    {brand}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className="flex flex-col">
                    <div className="inline-block ">
                          <Typography variant="h5light" className="text-[20px] mt-8 lg:mt-0">{heading} by Cities</Typography>
                    <hr className="border-2 rounded mt-2 "></hr>
                    </div>
                  
                    <ul className="space-y-3 mt-4 p-3 text-[16px] list-disc">
                        {citylist.map((brand) => (
                            <li key={brand}>
                                <Link href={`/${heading.toLowerCase()}?brand=${brand}`}>
                                    {brand}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </div>
                <div className="flex flex-col">
                    <Typography variant="h5light" className="text-[20px] mt-8 lg:mt-0">Customer Service</Typography>
                    <hr className="border-2 rounded mt-2"></hr>
                    <ul className="lg:space-y-3 mt-4 lg:p-3 text-[16px] list-disc flex flex-col">
                        <li>
                            <CustomLinks
                                    href="/aboutus"
                                    text="About Us"
                                    fontSize="text-lg"
                                    fontWeight="font-normal"
                                    color="text-white"
                          />
                        </li>
                        
                          <li>
                             <CustomLinks
                                    href="/termsand con"
                                    text="Terms & Conditions"
                                    fontSize="text-lg"
                                    fontWeight="font-normal"
                                    color="text-white"
                          />
                          </li>
                          <li>
                             <CustomLinks
                                    href="/faq"
                                    text="FAQ"
                                    fontSize="text-lg"
                                    fontWeight="font-normal"
                                    color="text-white"
                          />
                          </li>
                           <li>
                            <CustomLinks
                                    href="/privacy"
                                    text="Privacy Policy"
                                    fontSize="text-lg"
                                    fontWeight="font-normal"
                                    color="text-white"
                          />
                           </li>
                                  
                         
                    </ul>

                </div>

            </div>
            <hr className="border-t  mt-6 lg:mt-0 border-gray-700" />
            <div className="text-center  text-sm py-4">
                <Typography  variant="h5">ⓒ All Right Are Reserved.The Premier Vehicles</Typography>

            </div>

        </div>






    );
}