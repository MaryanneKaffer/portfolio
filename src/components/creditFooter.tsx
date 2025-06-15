import { useEffect, useState } from "react";
import Links from "./links";

export default function CreditFooter() {
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

    return (
        <footer className="flex flex-col items-center p-5">
            <div className="min-h-[50px] sm:mt-0 mt-10 relative flex place-items-center justify-center gap-2 hover:brightness-90">
                <h1 className="text-center text-md">Powered by <a href="https://github.com/MaryanneKaffer" target="_blank" className="dark:text-purple-500 text-pink-500">Maryanne Käffer</a></h1>
                <svg className={`transition-all duration-500 animate-spin-slow size-4 ${isDark ? "text-white" : "text-black"}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0 C60 25, 75 40, 100 50 C75 60, 60 75, 50 100 C40 75, 25 60, 0 50 C25 40, 40 25, 50 0 Z" fill="currentColor" />
                </svg>
            </div>
            <Links footer={true} />
        </footer>
    )
}