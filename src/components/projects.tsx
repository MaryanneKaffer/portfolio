import { projects } from "@/config/projects";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type SwiperType from 'swiper';
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useStar } from "./starProvider";
import StarHover from "./starHover";


export default function Projects() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hover, setHover] = useState("")
    const { showStar } = useStar();

    const toggleAutoplay = () => {
        if (!swiperRef.current) return;
        swiperRef.current.autoplay.start();
        setIsPlaying(true);
        setTimeout(() => {
            setIsPlaying(false);
            swiperRef.current?.autoplay.stop();
        }, 1000);
    };

    return (
        <section className="w-full h-[100dvh] justify-items-center sm:py-32 py-16 relative">
            <h1 className={`text-center sm:text-4xl text-2xl transition-all ${showStar ? "opacity-100" : "opacity-0"}`}>Projects</h1>
            <Swiper direction="vertical" slidesPerView={1} spaceBetween={window.innerWidth > 425 ? 10 : 55} modules={[Autoplay]} autoplay={isPlaying ? { delay: 1000 } : false} speed={1000}
                className="w-full h-full touch-pan-y" onSwiper={(swiper) => { swiperRef.current = swiper }} touchStartPreventDefault={false} allowTouchMove={false}>
                {showStar && projects.map((project, index) => (
                    <SwiperSlide >
                        <motion.div className={`md:flex md:flex-row flex-col w-full h-full gap-[8vw] items-center justify-center transition-all`} key={index}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} >
                            <div onMouseEnter={() => setHover("preview")} onMouseLeave={() => setHover("")}
                                className="dark:bg-[#111111] bg-white dark:border-none border-1 border-black xl:p-8 p-5 rounded-xl sm:h-[53%] sm:m-0 m-4 h-[40%] flex flex-col sm:w-[45vw] transition-all relative sm:ml-8 hover:scale-105 " >
                                <a href={project.link} target="_blank">
                                    <img loading="lazy" src={project.image} alt={project.name} className="object-cover rounded-xl md:h-fit md:w-full h-[95%] mx-auto" />
                                </a>
                                <a href={project.link} target="_blank" className="relative inline-block lg:text-lg text-[12px] rounded-xl p-[2px] transition-transform active:scale-100 group md:w-[50%] w-[40%] mx-auto mt-auto">
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-300 to-yellow-200 dark:from-cyan-200 dark:via-white dark:to-pink-200 group-hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]"></span>
                                    <span className="relative z-10 flex items-center justify-center transition-all duration-500 hover:bg-transparent hover:dark:bg-transparent dark:bg-[#111111] bg-white text-black dark:text-white rounded-xl px-5 py-2 md:py-3">
                                        <p className="group-hover:text-black">Visit</p>
                                    </span>
                                </a>
                                {hover === "preview" && <StarHover type="card" />}
                            </div>
                            <div onMouseEnter={() => setHover("description")} onMouseLeave={() => setHover("")}
                                className="dark:bg-[#111111] bg-white dark:border-none mt-14 sm:mt-0 border-1 border-black flex flex-col xl:p-8 p-5 rounded-xl sm:h-[53%] h-[45%] sm:w-[45vw] sm:m-0 m-4  relative sm:mr-8 hover:scale-105 transition-all" >
                                <h2 className="text-center lgxl:text-3xl xl:text-2xl lg:text-xl md:text-md text-[20px] xl:mb-3 lg:mb-2 mb-1">{project.name}</h2>
                                <p className="text-center xl:text-lg lg:text-sm md:text-sm text-[1.7vh]">{project.description}</p>
                                <a href={project.github} target="_blank" className="relative inline-block md:text-lg text-[12px] rounded-xl p-[2px] transition-transform active:scale-100 group md:w-[50%] w-[40%] mx-auto mt-auto">
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-300 to-yellow-200 dark:from-cyan-200 dark:via-white dark:to-pink-200 group-hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]"></span>
                                    <span className="relative z-10 flex items-center justify-center transition-all duration-500 hover:bg-transparent hover:dark:bg-transparent dark:bg-[#111111] bg-white text-black dark:text-white rounded-xl px-5 py-2 md:py-3">
                                        <p className="dark:group-hover:text-black">GitHub</p>
                                    </span>
                                </a>
                                {hover === "description" && <StarHover type="card" />}
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {showStar &&
                <motion.svg initial={{ opacity: 0 }} animate={{ opacity: isPlaying ? 0 : 1 }} transition={{ duration: 0.1 }}
                    className={`animate-spin-slow absolute sm:ml-2 ml-4 sm:top-[52%] top-[52%] z-10 transition-all duration-500 sm:size-[30px] size-[20px] fill-current dark:text-white text-yellow-400 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]`}
                    viewBox={"0 0 100 100"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0 C60 25, 75 40, 100 50 C75 60, 60 75, 50 100 C40 75, 25 60, 0 50 C25 40, 40 25, 50 0 Z" />
                </motion.svg>
            }
            {isPlaying && <motion.svg
                className={`transition-all duration-500 size-[100px] absolute top-[49.5%] xl:left-[41.6%] lg:left-[39%] md:left-[36.3%] g:left-[23%] left-[18%] dark:text-white text-yellow-400`} xmlns="http://www.w3.org/2000/svg"
                viewBox={"-500 0 600 100"}
                fill="currentColor"
                style={{ filter: "blur(1px)" }}
                initial={{ opacity: 0.5, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1.5 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
                <path d="M40 0 L70 0 Q50 -520 50 -500 Q50 -520 40 0 Z" />
            </motion.svg>}
            <button onClick={toggleAutoplay} aria-label="Next" className={`transition-all p-3 duration-500 active:scale-50 w-fit h-fit z-10 ${showStar ? "opacity-100" : "opacity-0"}`}><FaChevronDown size={25} /></button>
        </section >
    )
}