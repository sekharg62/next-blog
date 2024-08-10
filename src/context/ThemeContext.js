"use client";
import { createContext, useState } from "react";

// Define and export the ThemeContext
const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        console.log("toggle")
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return ( 
        <ThemeContext.Provider value={{ toggle, mode }}>
           <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
