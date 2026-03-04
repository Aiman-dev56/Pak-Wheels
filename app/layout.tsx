"use client"


import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { LanguageProvider } from "./context/languageContext";
import { Model } from "./components/common/Model";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";
import { useState } from "react";
import { Toaster} from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased overflow-x-hidden`}
      >
        <AuthProvider>
          <LanguageProvider>
            <Header />
            <Model open={openRegister} onClose={() => setOpenRegister(false)}>

            </Model>
            <div className="overflow-x-hidden">
              {children}
              <Toaster position="bottom-right" />
            </div>

            
          
          </LanguageProvider>
        </AuthProvider>






      </body>
    </html>
  );
}
