import { motion } from "motion/react";
import { useState } from "react";
import SocialMedia from "./SocialMedia";
import ThemeButton from "../ThemeButton";

const Menu = () => {
    return (
        <>
            <div className="not-portrait:hidden">
                <ThemeButton />
            </div>

            <h1 className="text-4xl lg:text-6xl font-black">
                <span>M</span>ENU
            </h1>

            {/* Section */}
            <div className="flex flex-col gap-3 text-2xl lg:text-4xl font-bold portrait:items-end">
                <SectionAnchor label="HOME" />
                <SectionAnchor label="ABOUT" />
                <SectionAnchor label="PROJECTS" />
            </div>

            <div className="flex flex-col gap-4 text-xl portrait:text-base portrait:items-end font-semibold">
                <h2 className="text-2xl lg:text-3xl font-bold">
                    <span>C</span>ONTACT
                </h2>
                <p className="">
                    ANDREAS P. PUTRA S. <br></br> andre.pputras@gmail.com
                </p>
                <SocialMedia />
            </div>
        </>
    );
};

const SectionAnchor = ({ label }: { label: string }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <motion.a
            href="#"
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="relative w-fit"
        >
            {label}
            {/* hover effect */}
            <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHover ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute h-1/3 w-[120%] -left-1/10 top-1/2 transform -translate-y-2/5 bg-cyan-300 origin-left"
            ></motion.span>
        </motion.a>
    );
};

export default Menu;
