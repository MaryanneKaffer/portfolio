import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Academic() {
    const { scrollYProgress } = useScroll();
    const [active, setActive] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.7) {
            setActive(false);
        }
        else if (latest > 0.5) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    });

    return (
        <section className="w-full lg:h-[60dvh] ml-12 relative lgxl:mt-[100px] lg:mt-[200px] xl:mt-[150px] md:my-0 my-52">
            <motion.div transition={{ type: "spring", stiffness: 60, damping: 20, }} className="absolute h-full w-full -mt-[70px] ">
                <svg
                    className={`transition-all -ml-14 duration-1000 size-[50px] lg:size-[70px] fill-current dark:text-white ${active ? "opacity-100" : "opacity-0"} `}
                    viewBox="0 -100 100 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M50 0 C60 25, 75 40, 100 50 C75 60, 60 75, 50 100 C40 75, 25 60, 0 50 C25 40, 40 25, 50 0 Z" />
                </svg>
                <div className={`h-[3px] -ml-6 lg:-mt-[19px] -mt-[14px] rounded-r-xl bg-gradient-to-r from-black/100 to-black/0 dark:from-white/100 dark:to-white/0 bg-black ${active ? "w-[30%]" : "w-0"} transition-all duration-1000`} />
                <div className={`w-[3px] lg:-ml-[23px] -ml-[32px] rounded-b-xl bg-gradient-to-b from-black/100 to-black/0 dark:from-white/100 dark:to-white/0 bg-black ${active ? "h-[60%]" : "h-0"} transition-all duration-1000`} />
            </motion.div>
            <div className={`${active ? "opacity-100" : "opacity-0"} transition-all duration-1000 py-2 px-6`}>
                <h1 className="sm:text-4xl text-2xl lg:mb-10 mt-5 mb-3">Education</h1>
                <div className="flex flex-col gap-10">
                    <span className="flex flex-col lg:gap-2">
                        <h2 className="sm:text-2xl text-lg font-bold">
                            Software Engineering    
                        </h2>
                        <p className="sm:text-lg">
                            UNINTER
                        </p>
                        <p className="sm:text-lg">2025 - 2029</p>
                    </span>
                    <span className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-gray-700">
                            Coming soon
                        </h2>
                    </span>
                </div>
            </div>
        </section>
    )
}