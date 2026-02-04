"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {AuthOptions} from "../../auth/AuthOptions";

interface ModelProps {
  open: boolean;
  onClose: () => void;
}

export const Model = ({ open, onClose }: ModelProps) => {
  const [step, setStep] = useState<AuthOptions>("login");

  if (!open) return null;

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // STEP BACK LOGIC
  const handleBack = () => {
    if (step === "login") {
      onClose(); // only close when first step
    } else if (step === "register") {
      setStep("login");
    } else if (step === "verify") {
      setStep("register");
    } else if (step === "phone") {
      setStep("verify");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* BACK BUTTON */}
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 text-gray-400 hover:text-black"
        >
          <FaArrowLeft />
        </button>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-400 text-2xl hover:text-black"
        >
          &times;
        </button>

        {/* STEPS */}
        {step === "login" && (
          <Login
            goRegister={() => setStep("register")}
          />
        )}

        {step === "register" && (
          <Register
            goVerify={() => setStep("verify")}
          />
        )}

        {step === "verify" && (
          <VerifyEmail
            goPhone={() => setStep("phone")}
          />
        )}

        {step === "phone" && <PhoneNumber />}
      </div>
    </div>
  );
};
