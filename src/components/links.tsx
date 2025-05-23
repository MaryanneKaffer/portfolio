import {
    GithubIcon,
} from "@/components/icons";

import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Links() {
    return (
        <span className="fixed bottom-0 right-0 flex gap-2 m-2">
            <ThemeSwitch />
            <Link isExternal href={"https://github.com/MaryanneKaffer"} title="GitHub">
                <GithubIcon className="text-default-500" />
            </Link>
        </span>
    );
}