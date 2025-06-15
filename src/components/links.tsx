import { ThemeSwitch } from "@/components/theme-switch";
import { lazy, Suspense } from "react";

export default function Links({ footer }: { footer?: boolean }) {
    const GithubIcon = lazy(() => import("react-icons/vsc").then(m => ({ default: m.VscGithub })));
    const LinkedinIcon = lazy(() => import("react-icons/ci").then(m => ({ default: m.CiLinkedin })));
    const MailIcon = lazy(() => import("react-icons/tb").then(m => ({ default: m.TbMail })));

    return (
        <>
            <span className="fixed bottom-0 right-0 flex gap-2 m-2">
                <ThemeSwitch />
            </span>
            <Suspense fallback={null}>
                <span className="flex gap-2 items-center">
                    <a aria-label="GitHub" href="https://github.com/MaryanneKaffer" target="_blank" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" rel="noopener noreferrer"><GithubIcon className={`${footer ? "size-5" : "size-8"}`} /></a>
                    <a aria-label="LinkedIn" href="https://www.linkedin.com/in/maryanne-käffer/" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" target="_blank" rel="noopener noreferrer"><LinkedinIcon className={`${footer ? "size-7" : "size-10"}`} /></a>
                    <a aria-label="Gmail" href="mailto:kaffermaryanne@gmail.com" target="_blank" className="dark:text-purple-900 text-pink-500 hover:brightness-125 transition-all hover:drop-shadow-[0_0px_8px_rgba(255,192,203,0.5)]" rel="noopener noreferrer"><MailIcon className={`${footer ? "size-7" : "size-10"}`} /></a>
                </span>
            </Suspense>
        </>
    );
}