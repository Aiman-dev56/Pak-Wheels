"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/images/Mask group.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { Typography } from "../common/Typography";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import PhoneInputField from "../common/CountryInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


type AuthStep =
  | "main"
  | "signupEmail"
  | "signupPhone"
  | "setPassword"
  | "login"
  | "loginEmail"
  | "loginPhone";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const AuthModal = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  const [step, setStep] = useState<AuthStep>("main");
  const [showPassword, setShowPassword] = useState(false);
  const [stepHistory, setStepHistory] = useState<AuthStep[]>([]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };


  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside)
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };





  const createAccount = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email || undefined,
      phone: formData.phone || undefined,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Account Created Successfully!");
    setStep("login");
  };

  const handleLogin = () => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No User Found. Please Register First.");
      return;
    }


    const parsedUser = JSON.parse(savedUser);

    if ((formData.email && parsedUser.email === formData.email) ||
      (formData.phone && parsedUser.phone === formData.phone)) {

      alert("Login successful!");

      resetForm();     // ADD THIS
      onClose();
      router.push("/");
    }
    else {
      alert("Invalid credentials");
    }
  };

  const goToStep = (newStep: AuthStep) => {
    setStepHistory(prev => [...prev, step]);
    setStep(newStep);

    // Reset form when entering login or main
    if (newStep === "login" || newStep === "main") {
      resetForm();
    }
  };


  const handelGoBack = () => {
    if (stepHistory.length === 0) return;
    const previousStep = stepHistory[stepHistory.length - 1];
    setStepHistory(prev => prev.slice(0, prev.length - 1));
    setStep(previousStep);
  }


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center  justify-center z-50">
      <div className="bg-white w-[480px] p-6 rounded-2xl shadow-xl relative">
        <div className="inline-flex mb-10">
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-500"
          >
            ✕
          </button>

          {step !== "main" && step !== "login" && stepHistory.length > 0 && (
            <button onClick={handelGoBack}
              className="absolute top-8 left-8 mb-8 text-gray-500 font-medium text-2xl"
            >
              ←
            </button>
          )}
        </div>


        {/* ================= MAIN ================= */}
        {step === "main" && (
          <>
            <div className="flex justify-center  items-center mb-8">
              <Image
                src={Logo}
                alt="logo"
                height={80} />
            </div>

            <h2 className="text-2xl font-light text-center m-10">
              Login to Premier Vehicle
            </h2>

            <button className="w-full inline-flex justify-center items-center gap-2 rounded-full border-gray-600 border font-light p-3 cursor-pointer mb-2">
              <span><FcGoogle size={24} /></span>
              Continue with Google
            </button>



            <div className="my-4 p-3 text-center text-xl text-gray-500">
              OR
            </div>

            <button
              onClick={() => goToStep("signupEmail")}
              className="w-full inline-flex justify-center  items-center gap-3 p-2 rounded-full font-light border border-gray-600  mb-4 cursor-pointer"
            >
              <span><MdEmail size={24} /></span>
              Signup with Email
            </button>

            <button
              onClick={() => setStep("signupPhone")}
              className="w-full inline-flex justify-center items-center gap-2  p-2 rounded-full border border-gray-500 font-light cursor-pointer"
            >
              <span><FaMobile size={25} /></span>
              Signup with Phone
            </button>
            <div className="flex justify-center items-center mt-12 mb-4">
              <Typography variant="p">Already Have an Account? <span className="text-blue-400 cursor-pointer" onClick={() => goToStep("login")}>Login</span></Typography>
            </div>
          </>
        )}

        {/* ================= SIGNUP EMAIL ================= */}
        {step === "signupEmail" && (
          <>
            <div>
              <h2 className="text-2xl font-normal  mb-4 mt-8">
                Create an account with Email
              </h2>
              <Typography variant="h5light" >Welcome back! Please enter your email address below.</Typography>
            </div>
            <div className="relative gap-3  w-full mt-12">
              <span className="absolute left-3 top-7 -translate-y-1/2 text-gray-500 "><RxPerson size={22} /></span>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}

                className="w-full border-2 p-4 pl-12 rounded-md mb-4 cursor-pointer"
              />
            </div>


            <div className="relative w-full mt-4">
              <span className="absolute left-3 top-7 -translate-y-1/2 text-gray-500 "><HiOutlineMail size={26} /></span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 p-4  pl-14 rounded-md mb-4 cursor-pointer"
              />
            </div>



            <button
              onClick={() => goToStep("setPassword")}
              className="w-full bg-orange-500 text-white p-4 rounded-lg cursor-pointer"
            >
              Continue
            </button>
          </>
        )}

        {/* SIGNUP PHONE */}
        {step === "signupPhone" && (
          <>
            <div>
              <h2 className="text-xl mb-4">Create an Account with Phone</h2>
              <Typography variant="h5light">Welcome back! Please enter your Phone number.</Typography>
            </div>

            <div className="relative mt-8">
              <span className="absolute text-gray-400 top-5 left-6">
                <RxPerson size={20} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 p-4 pl-12 border-gray-300 rounded-lg mb-4 cursor-pointer "

              />

            </div>

            <div className="  mt-8 mb-8">
              <PhoneInputField
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
              />
            </div>

            <button
              onClick={() => goToStep("setPassword")}
              className="w-full bg-orange-500 text-white p-3 rounded cursor-pointer"
            >
              Next
            </button>
          </>
        )}

        {/* ================= VERIFY ================= */}


        {/* ================= SET PASSWORD ================= */}
        {step === "setPassword" && (
          <>
            <h2 className="text-xl mb-4">Create Password</h2>

            <div className="relative mb-4">
              <TbLockPassword className="absolute left-3 top-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={showPassword ? "password" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 pl-10 rounded"
              />
              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            <div className="relative mb-4">
              <TbLockPassword className="absolute left-3 top-4 text-gray-400 cursor-pointer" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder={showPassword ? "Confirm Password" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border p-3 pl-10 rounded cursor-pointer"
                required
              />
              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            <button
              onClick={createAccount}
              className="w-full bg-orange-500 text-white p-3 rounded cursor-pointer"
            >
              Create Account
            </button>
          </>
        )}

        {/* ================= LOGIN MAIN ================= */}
        {step === "login" && (
          <>
            <div className="flex justify-center  items-center mb-8">
              <Image
                src={Logo}
                alt="logo"
                height={80} />
            </div>

            <h2 className="text-2xl font-light text-center m-12">
              Login to Premier Vehicle
            </h2>

            <button className="w-full inline-flex justify-center items-center gap-2 rounded-full border-gray-600 border font-light p-3 cursor-pointer mb-2 ">
              <span><FcGoogle size={24} /></span>
              Continue with Google
            </button>



            <div className="my-4 p-4 text-center text-xl text-gray-500">
              OR
            </div>

            <button
              onClick={() => setStep("loginEmail")}
              className="w-full inline-flex justify-center  items-center gap-3 p-2 rounded-full font-light border border-gray-600  mb-6 cursor-pointer"
            >
              <span><MdEmail size={24} /></span>
              Login with Email
            </button>

            <button
              onClick={() => goToStep("loginPhone")}
              className="w-full inline-flex justify-center items-center gap-2  p-2 rounded-full border border-gray-500 font-light cursor-pointer"
            >
              <span><FaMobile size={25} /></span>
              Login with Phone
            </button>
            <div className="flex justify-center items-center mt-12 mb-6 cursor-pointer">
              <Typography variant="p">New to Premier Vehicles?<span className="text-blue-400" onClick={() => goToStep("main")}>Create Account</span></Typography>
            </div>



          </>
        )}

        {/* ================= LOGIN EMAIL ================= */}
        {step === "loginEmail" && (
          <>
          <div className="mt-8">
            <Typography variant="h4">Continue with Email</Typography>
            <Typography variant="h5light">Welcome back!Please enter </Typography>

          </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4 cursor-pointer"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-3 rounded mb-4 cursor-pointer"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white p-3 rounded cursor-pointer"
            >
              Login
            </button>
          </>
        )}

        {/* ================= LOGIN PHONE ================= */}
        {step === "loginPhone" && (
          <>
            <div className="mt-2 flex flex-col gap-3">
              <Typography variant="h4" >Login With Phone</Typography>
              <Typography variant="h5light">Welcome back! Please enter your phone number.</Typography>

            </div>
            <div className="mt-6 mb-6">
              <PhoneInputField
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
              />
            </div>
            <div className="relative mb-8">
              <TbLockPassword className="absolute left-3 top-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={showPassword ? "password" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 pl-10 rounded"
              />
              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <div className="mt-8 mb-8">
              <Typography variant="h5light">Forgot password? <span className="text-blue-400 cursor-pointer">Reset it</span></Typography>

            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-orange-500 text-white p-3 rounded cursor-pointer"
            >
              Login
            </button>


          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

