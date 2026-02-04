"use client";

import { useState, createContext, ReactNode, useContext } from "react";

type Language = "en" | "ur";

type LanguageContextType = {
    lang: Language;
    toggleLang: () => void;
};


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children} : {children : ReactNode}) {
    const [lang, setLang] = useState<Language>("en");

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "ur": "en"));
    };

    return(
        <LanguageContext.Provider value={{ lang, toggleLang}}>
            {children}
        </LanguageContext.Provider>
    );

}

export function useLanguage(){
    const context = useContext(LanguageContext);
    if(!context) throw new Error("useLanguage must be used inside language ")
        return context;
}