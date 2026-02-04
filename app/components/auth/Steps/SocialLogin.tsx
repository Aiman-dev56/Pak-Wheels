import React from "react";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "../../common/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const SocialLogin = () => {
    const { setStep } = useAuth();

    return (
        <div className="flex flex-col gap-2">
            <Button onClick={() => setStep("register")} variant="pill" >
                <FcGoogle/>
                Continue With Google</Button>
            <Button onClick={() => setStep("register")} variant="pill">
                <FaApple/>
                Continue With Apple</Button>
             </div>
    )
}