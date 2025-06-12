import { skills } from "@/config/skills";
import StarHover from "./starHover";
import { useState } from "react";

export default function Skills() {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <section className="md:h-[60dvh] h-[40dvh] md:my-0 my-16 flex flex-col justify-center">
            < h2 className="text-center lg:text-4xl text-2xl" > Skills</h2 >
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