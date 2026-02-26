"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState , useEffect } from "react";
import CustomLinks from "./common/customlinks/CustomLinks";
import Logo from "../../public/images/Mask group.png";
import AuthModal from "./auth/AuthModel";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/languageContext";
import { en } from "@/locales/en";
import { ur } from "@/locales/ur";
import "@/app/globals.css";
import { Button } from "./common/button";

export const Header = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const t = lang === "en" ? en : ur;
  const {user, logout} = useAuth();

  

  return (
    <div className="sticky top-0 z-50 w-full bg-white h-24 shadow flex justify-between items-center">
      
      {/* Logo + Desktop Links */}
      <div className="p-3 lg:ml-10 gap-16 flex items-center">
        <Image src={Logo} alt="Logo" className="w-18 h-18" />

        {/* Desktop Menu */}
        <ul className="gap-12 p-6 lg:flex hidden text-[18px]">
          <CustomLinks
            href="/"
            text={t.home}
            fontWeight={pathname === "/" ? "font-bold" : "font-normal"}
            color={pathname === "/" ? "text-orange-500" : "text-black"}
          />

          <CustomLinks
            href="/pages/cars"
            text={t.cars}
            fontWeight={pathname === "/pages/cars" ? "font-bold" : "font-normal"}
            color={pathname === "/pages/cars" ? "text-orange-500" : "text-black"}
          />

          <CustomLinks
            href="/pages/bikes"
            text={t.bikes}
            fontWeight={pathname === "/pages/bikes" ? "font-bold" : "font-normal"}
            color={pathname === "/pages/bikes" ? "text-orange-500" : "text-black"}
          />

          <CustomLinks
            href="/pages/autoparts"
            text={t.autoparts}
            fontWeight={pathname === "/pages/autoparts" ? "font-bold" : "font-normal"}
            color={pathname === "/pages/autoparts" ? "text-orange-500" : "text-black"}
          />

          <CustomLinks
            href="/pages/forums"
            text={t.forums}
            fontWeight={pathname === "/forums" ? "font-bold" : "font-normal"}
            color={pathname === "/forums" ? "text-orange-500" : "text-black"}
          />

          <CustomLinks
            href="/pages/reviews"
            text={t.reviews}
            fontWeight={pathname === "/pages/reviews" ? "font-bold" : "font-normal"}
            color={pathname === "/pages/reviews" ? "text-orange-500" : "text-black"}
          />
        </ul>
      </div>

      {/* Desktop Right Side */}
      <div className="flex gap-2 ml-18 lg:mr-10 lg:items-center">
        {!user ? (
          <div>
             <Button onClick={() => setIsOpen(true)} className="border-2 border-orange-600 w-[40%] py-4">{t.login}</Button>
          <AuthModal isOpen={isOpen}
          onClose={() => setIsOpen(false)}/>
          </div>
         
         ) : (
          <div className=" flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="font-medium">{user.name}</span>
           <Button onClick={logout} className="text-sm ">Logout</Button>
          </div>
         )}
       

        <button
          onClick={toggleLang}
          className="text-amber-600 mr-8 font-bold text-2xl cursor-pointer"
        >
          {lang === "en" ? "اردو" : "EN"}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden pr-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl  cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 lg:hidden">
          
          <CustomLinks href="/" text={t.home} />
          <CustomLinks href="/pages/cars" text={t.cars} />
          <CustomLinks href="/pages/bikes" text={t.bikes} />
          <CustomLinks href="/pages/autoparts" text={t.autoparts} />
          <CustomLinks href="/pages/forums" text={t.forums} />
          <CustomLinks href="/pages/reviews" text={t.reviews} />

          
        </div>
      )}
    </div>
  );
};
