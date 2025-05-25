import StarHover from "./starHover";
import { skills } from "@/config/skills";
import { useState } from "react";

export default function Cover() {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <section className="w-full sn:h-[100dvh] justify-items-center lg:py-32 py-12">
            <div className="flex flex-col items-center">
                <h1 className="lg:w-[550px] cursor-default mt-2 lg:text-6xl text-5xl text-center bg-gradient-to-r dark:from-purple-500 dark:to-cyan-500 from-pink-500 to-yellow-500 bg-clip-text text-transparent 
            lg:dark:brightness-100 lg:brightness-125 brightness-150 transition-all duration-500 ease-in-out dark:hover:brightness-125 hover:brightness-150 dark:hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] 
            lg:dark:drop-shadow-[0_0_5px_rgba(0,0,255,0.5)] dark:drop-shadow-[0_0_10px_rgba(0,0,255,0.7)] dark:brightness-125">
                    Maryanne Käffer
                </h1>
                <span className="cursor-default flex place-items-center gap-10 mr-[0.3vw] dark:text-purple-700 text-xl transition-all duration-500 hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.9)]">
                    <h2>Software</h2>
                    <h2>Engineer</h2>
                </span>
            </div>
            <div className="text-center lgxl:mt-14 mt-10 lg:text-xl text-sm">
                <p>I have been involved with programming since childhood and am always looking to learn and grow.
                    In recent months, I have been focusing my studies on front-end development, using technologies such as React and JavaScript to build modern and high-performance web applications.
                </p>
            </div>
            <div className="lg:mt-5 mt-5 dark:hover:brightness-125 hover:scale-105 transition-all">
                <a href="/assets/curriculum.pdf" target="_blank" onMouseEnter={() => setHover(10)} onMouseLeave={() => setHover(null)}
                    className=" active:scale-100 lg:text-lg text-sm bg-gradient-to-r dark:from-purple-700 dark:to-blue-500 py-3 px-5 rounded-xl from-pink-300 to-yellow-200 ">
                    {hover === 10 && <StarHover type="skill" />} Curriculum
                </a>
            </div>
            <h2 className="text-center lg:text-4xl lg:mt-20 md:mt-20 mt-10">Skills</h2>
            <div className="flex flex-wrap gap-3 sm:mx-16 justify-center overflow-visible mt-4">
                {skills.map((skill, index) => (
                    <span key={index} >
                        <div onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} className="w-auto flex gap-2 mx-[0.1vh] hover:mx-0 items-center lg:text-lg md:text-md text-sm items-center bg-white 
                        px-4 dark:bg-[#111111] bg-[#d1gfff] relative rounded-lg p-2 hover:scale-110 transition-all duration-500 group transform origin-center justify-items-center sm:min-w-[130px] dark:border-none border-1 border-black">
                            <img src={skill.icon} alt={skill.name} className="lg:w-8 lg:h-8 md:h-6 md:w-6 w-4 h-4" />
                            <p className="text-center group-hover:hidden">{skill.name}</p>
                            <p className="hidden group-hover:flex bg-gradient-to-r dark:from-cyan-200 dark:via-white dark:to-pink-200 from-pink-300 to-yellow-300 bg-clip-text text-transparent" >
                                {skill.proficiency}
                            </p>
                            {hover === index && <StarHover type="skill" />}
                        </div>
                    </span>
                ))}
            </div>
        </section>
    )
}  