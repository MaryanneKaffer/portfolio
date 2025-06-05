"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useStar } from "./starProvider";

export default function Star() {
	const { scrollYProgress } = useScroll();
	const [active, setActive] = useState(false);
	const [show, setShow] = useState(true);
	const { setShowStar } = useStar();

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest > 0.4) {
			setActive(true);
			setTimeout(() => {
				setShow(false);
				setShowStar(true);
			}, 1000);
		}
		else {
			setActive(false);
			setShow(true);
			setShowStar(false);
		}
	});

	return (
		<motion.div
			animate={{
				y: active ? window.innerWidth > 1024 ? "144vh" : "142vh" : window.innerWidth > 1024 ? "10.3vh" : "9.5vh",
			}}
			transition={{
				type: "spring",
				stiffness: 60,
				damping: 20,
			}}
		>
			<svg
				className={`${!active ? "animate-spin-slow" : "dark:text-white text-yellow-400"} ${!show ? "opacity-0" : "opacity-100"} transition-all h-[10vw] duration-500 size-[20px] fill-current dark:text-white absolute 
				lg:left-[49%] left-[47%] lgxl:mt-4 xl:mt-[9.5vh] lg:mt-[12.6vh] md:mt-2.5 mt-[11vh]`}
				viewBox={active ? "0 -100 100 200" : "0 0 100 100"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={active ? "hidden" : "block"}
					d="M50 0 C60 25, 75 40, 100 50 C75 60, 60 75, 50 100 C40 75, 25 60, 0 50 C25 40, 40 25, 50 0 Z"
				/>

				{active && (
					<motion.path
						filter={"blur(5px)"}
						d={"M40 0 L70 0 L50 -500 Z"}
						fill="currentColor"
						initial={{ opacity: 0, scaleY: 0 }}
						animate={{ opacity: 1, scaleY: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					/>
				)}
			</svg>
		</motion.div>
	);
}