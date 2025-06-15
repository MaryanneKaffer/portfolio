import Links from "./links";
import StarHover from "./starHover";
import { lazy, Suspense, useState } from "react";

export default function Cover() {
    const [hover, setHover] = useState<number | null>(null);
    const Resume = lazy(() => import("./resume"));

    return (
        <section className="w-full sm:h-[100dvh] justify-items-center lg:py-60 py-20">
            <div className="flex flex-col items-center">
                <h1 className="lg:w-[550px] cursor-default lg:text-6xl text-5xl text-center bg-gradient-to-r dark:from-purple-500 dark:to-cyan-500 from-pink-500 to-yellow-500 bg-clip-text text-transparent 
            lg:dark:brightness-100 lg:brightness-125 brightness-150 transition-all duration-500 ease-in-out dark:hover:brightness-125 hover:brightness-150 dark:hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] 
            lg:dark:drop-shadow-[0_0_5px_rgba(0,0,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] dark:brightness-125">
                    Maryanne Käffer
                </h1>
                <span className="cursor-default flex place-items-center gap-10 mr-[0.3vw] dark:text-purple-700 text-xl transition-all duration-500 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.9)]">
                    <h2>Software</h2>
                    <h2>Engineer</h2>
                </span>
            </div>
            <div className="text-center lgxl:mt-10 my-8 lg:text-xl text-sm md:w-[75%]">
                <Suspense fallback={<p className="text-gray-500">Loading</p>}>
                    <Resume />
                </Suspense>
            </div>
            <div className="lg:my-10 my-5 dark:hover:brightness-125 hover:scale-105 transition-all">
                <a href="/assets/curriculum.pdf" target="_blank" onMouseEnter={() => setHover(10)} onMouseLeave={() => setHover(null)}
                    className="relative inline-block lg:text-lg text-sm rounded-xl p-[2px] transition-transform active:scale-100 group"
                >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-300 to-yellow-200 dark:from-purple-700 dark:to-blue-500 group-hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]"></span>
                    <span className="relative z-10 flex items-center justify-center transition-all duration-500 hover:bg-transparent hover:dark:bg-transparent dark:bg-black bg-white text-black dark:text-white rounded-xl px-5 py-3">
                        {hover === 10 && <StarHover type="skill" />} Curriculum
                    </span>
                </a>
            </div>
            <Links />
        </section>
    )
}  