import { projects } from "@/config/projects";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type SwiperType from 'swiper';
import { FaChevronDown } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useStar } from "./starProvider";
import StarHover from "./starHover";


export default function Projects() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { scrollYProgress } = useScroll();
    const [hover, setHover] = useState("")
    const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
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
        <section className="w-full h-[100dvh] justify-items-center py-32 relative">
            <h1 className={`text-center text-4xl transition-all ${showStar ? "opacity-100" : "opacity-0"}`}>Projects</h1>
            <Swiper direction="vertical" slidesPerView={1} spaceBetween={10} modules={[Autoplay]} autoplay={isPlaying ? { delay: 1000 } : false} speed={1000} className="w-full h-full"
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
            >
                {showStar && projects.map((project, index) => (
                    <SwiperSlide >
                        <motion.div className={`md:flex md:flex-row flex-col w-full h-full items-center justify-center transition-all`} key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <div onMouseEnter={() => setHover("preview")} onMouseLeave={() => setHover("")}
                                className="dark:bg-[#111111] p-8 rounded-xl h-[53%] flex flex-col w-[45vw] transition-all relative ml-4" >
                                <img src={project.image} alt={project.name} className="object-cover rounded-xl h-[80%] w-full" />
                                <a href={project.link} target="_blank" className="text-xl self-center mt-auto bg-gradient-to-r dark:from-cyan-200 dark:via-white dark:to-pink-200 from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                                    Visit
                                </a>
                                {hover === "preview" && <StarHover type="card" />}
                            </div>
                            <motion.svg className={`animate-spin-slow transition-all duration-500 size-[30px] fill-current dark:text-white w-[15vw]`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0 C60 25, 75 40, 100 50 C75 60, 60 75, 50 100 C40 75, 25 60, 0 50 C25 40, 40 25, 50 0 Z" />
                            </motion.svg>
                            <div onMouseEnter={() => setHover("description")} onMouseLeave={() => setHover("")}
                                className="dark:bg-[#111111] flex flex-col p-8 rounded-xl h-[53%] w-[45vw] relative mr-4">
                                <h2 className="text-center text-3xl mb-3">{project.name}</h2>
                                <p className="text-center text-xl">{project.description}</p>
                                <a href={project.github} target="_blank" className="text-xl mt-auto self-center bg-gradient-to-r dark:from-cyan-200 dark:via-white dark:to-pink-200 from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                                    GitHub
                                </a>
                                {hover === "description" && <StarHover type="card" />}
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={toggleAutoplay} className={`transition-all p-3 duration-500 active:bottom-18 w-fit h-fit absolute lg:left-[48.2%] left-[47%] bottom-20 z-10 ${showStar ? "opacity-100" : "opacity-0"}`}><FaChevronDown /></button>
        </section >
    )
}