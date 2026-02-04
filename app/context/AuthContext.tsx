"use client";


import React, { createContext, useContext, useState, ReactNode} from "react";
import { AuthStep } from "../components/auth/types";


interface AuthContextType{
    step: AuthStep;
    setStep: (step: AuthStep)=> void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider =  ({ children  }: {children :  ReactNode}) => {
    const [step, setStep] = useState<AuthStep>("login");
    const [open, setOpen] =  useState(false);

    return(
       <AuthContext.Provider value={{
        step, setStep, open, setOpen
       }}>
        {children}
       </AuthContext.Provider>
    );
};

export const useAuth =  () => {
    const context =  useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};