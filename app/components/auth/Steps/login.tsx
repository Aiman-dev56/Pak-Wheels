//login component

import React from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "../../common/button";
import { SocialLogin } from "./SocialLogin";
import { Typography } from "../../common/Typography";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Logo from "../../../../public/images/Mask group.png";

export const Login = () => {
    const { setStep } = useAuth();

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Image src={Logo} alt="Logo" className="w-18 h-18 mb-5 mt-8" />
            <Typography variant="h4" className="flex justify-center items-center">Login To Premier Vehciles </Typography>
            <SocialLogin />
            <div className="flex gap-1 m-3 items-center justify-center">
                
                 <Typography variant="h5light" className="text-xl text-gray-400">Or</Typography>
                 

            </div>

            <div className="flex ">
                <Button onClick={() => setStep("register")} 
                    variant="pill">
                    <span>
                        <FaEnvelope />
                        </span>
                        Login With Email
                        </Button>
            </div>
             <div className="flex gap-4 mb-5">
                <Button onClick={() => setStep("register")} variant="pill">
                    <span>
                        <FaPhone />
                        </span>
                        Login With Phone
                        </Button>
            </div>

            <Typography variant="p" className="flex items-center justify-center">New to Premier Vehcile?<span className="text-red-600 ">
                Create Account?</span></Typography>







        </div>
    )
}