import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StarHover({ type }: { type: string }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () =>
            setIsDark(document.documentElement.classList.contains("dark"));

        checkTheme();
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkTheme);

        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", checkTheme);
        };
    }, []);

    function star(spin: any, position: any): JSX.Element {
        return (
            <motion.svg initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className={`m-2 ${spin} transition-all duration-500 absolute ${position} h-full`}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={isDark ? "#fcc7ff" : "#ffe76e"} />
                        <stop offset="100%" stopColor={isDark ? "#cceeff" : "#ffe76e"} />
                    </linearGradient>
                </defs>
                <path
                    d="
                    M50 0 
                    C60 25, 75 40, 100 50 
                    C75 60, 60 75, 50 100 
                    C40 75, 25 60, 0 50 
                    C25 40, 40 25, 50 0 
                    Z
                "
                    fill="url(#gradient)"
                />
            </motion.svg>
        )
    }
    return (
        <>
            {type === "skill" && (
                <>
                    {star("animate-spin-slower-reverse", "bottom-[24%] -left-[11%] lg:w-[25px] w-[20px]")}
                    {star("animate-spin-slower", "top-[24%] -right-[11%] lg:w-[20px] w-[15px]")}
                </>
            )}
            {type === "card" && (
                <>
                    {star("animate-spin-slower-reverse", "bottom-[45%] -right-[5%] lg:w-[1.5vw] w-[20px]")}
                    {star("animate-spin-slower", "top-[40%] -left-[5%] lg:w-[1.2vw] w-[15px]")}
                </>
            )}
        </>
    );
}