"use client";

import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "@/app/context/AuthContext";

// ✅ Import your step components correctly
import { Login } from "./Steps/login";
// import Register from "./steps/Register";
// import VerifyEmail from "./steps/VerifyEmail";
// import PhoneNumber from "./steps/PhoneNumber";
import { SocialLogin } from "./Steps/SocialLogin";

export const AuthModel = () => {
  const { open, setOpen, step, setStep, goBack } = useAuth();

  // ✅ Hooks MUST come before conditional return
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // ✅ Close modal if not open
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md rounded-xl bg-white p-6 shadow-xl">
        
        {/* ✅ BACK BUTTON */}
        <button
          onClick={goBack}
          className="absolute left-4 top-4 text-gray-400 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        {/* ✅ CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-3 text-gray-400 text-2xl hover:text-black"
        >
          &times;
        </button>

        {/* ✅ RENDER STEPS */}
        {step === "login" && <Login />}
        {step === "register" && <Register />}
        {step === "verifyEmail" && <VerifyEmail />}
        {step === "phone" && <PhoneNumber />}
        {step === "social" && <SocialLogin />}
      </div>
    </div>
  );
};
