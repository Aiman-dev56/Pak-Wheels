// header component

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomLinks from "./common/customlinks/CustomLinks";
import Logo from "../../public/images/Mask group.png";
import {AuthModel } from "../components/auth/AuthModel";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/languageContext";
import { en } from "@/locales/en";
import { ur } from "@/locales/ur";


export const Header = () => {
  const {setOpen} = useAuth();
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const t = lang === "en" ? en : ur;

  return(
    <div className="sticky top-0 z-50 w-full bg-white h-24 shadow flex justify-between">
      <div  className="p-3 lg:ml-10 gap-16 flex items-center">
         <Image src={Logo} alt="Logo" className="w-18 h-18" />
          <ul className="gap-12 p-6 lg:flex hidden text-[18px]">
         <CustomLinks
         href="/"   
                   text={t.home}
            fontSize="text-lg"
           fontWeight={pathname === "/" ? "font-bold" : "font-normal"}
            color={pathname === "/" ? "text-orange-500" : "text-black"}
          />

            <CustomLinks
             href="/cars"
             text={t.cars}
             fontSize="text-lg"
             fontWeight={pathname === "/cars" ? "font-bold" : "font-normal"}
             color={pathname === "/cars" ? "text-orange-500" : "text-black"}
           />

                      <CustomLinks
             href="/bikes"
             text={t.bikes}
             fontSize="text-lg"
             fontWeight={pathname === "/bikes" ? "font-bold" : "font-normal"}
             color={pathname === "/bikes" ? "text-orange-500" : "text-black"}
           />
               <CustomLinks
             href="/autoparts"
             text={t.autoparts}
             fontSize="text-lg"
             fontWeight={pathname === "/autoparts" ? "font-bold" : "font-normal"}
             color={pathname === "/autoparts" ? "text-orange-500" : "text-black"}
           />

           <CustomLinks
             href="/forums"
             text={t.forums}
             fontSize="text-lg"
             fontWeight={pathname === "/forums" ? "font-bold" : "font-normal"}
             color={pathname === "/forums" ? "text-orange-500" : "text-black"}
          />

           <CustomLinks
             href="/reviews"
             text={t.reviews}
              fontSize="text-lg"
             fontWeight={pathname === "/reviews" ? "font-bold" : "font-normal"}
             color={pathname === "/reviews" ? "text-orange-500" : "text-black"}
           />
          
          
          
          </ul>
        </div >

        <div className="flex gap-5 lg:mr-10 items-center">
         <button className="lg:px-6 rounded-md lg:m-6 border-amber-600 border-2 cursor-pointer" 
         onClick={()=> setOpen(true)}
         >
           {t.login}
         </button>
         <AuthModel />
          <button
         onClick={toggleLang}
         className="text-amber-600 font-bold text-2xl cursor-pointer"
       >
          {lang === "en" ? "اردو" : "EN"}
        </button>
        </div>

    </div>
  )
}







