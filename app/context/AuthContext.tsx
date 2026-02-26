"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, getUser, saveUser, removeUser } from "./Auth";

interface AuthContextType{
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = getUser();
        if(storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (userData: User) => {
        saveUser(userData);
        setUser(userData);
    };

    const logout = () => {
        removeUser();
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
}