import { ThemeSwitch } from "@/components/theme-switch";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { TbMail } from "react-icons/tb";

export default function Links({ footer }: { footer?: boolean }) {
    return (
        <>
            <span className="fixed bottom-0 right-0 flex gap-2 m-2">
                <ThemeSwitch />
            </span>
            <span className="flex gap-2 items-center">
                <a href="https://github.com/sahil-khan-2002" target="_blank" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" rel="noopener noreferrer"><VscGithub className={`${footer ? "size-5" : "size-8"}`} /></a>
                <a href="https://www.linkedin.com/in/maryanne-kaffer" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" target="_blank" rel="noopener noreferrer"><CiLinkedin className={`${footer ? "size-7" : "size-10"}`} /></a>
                <a href="mailto:kaffermaryanne@gmail.com" target="_blank" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" rel="noopener noreferrer"><TbMail className={`${footer ? "size-7" : "size-10"}`} /></a>
            </span>
        </>
    );
}