import { motion } from "motion/react";
import { COLOR } from "../../constants/Color";
import { useContent } from "../../contexts/ContentContext";

const Dot = ({ section }: { section: string }) => {
    const { activeContent } = useContent();
    const isActive = activeContent === section;

    const clickHandle = () => {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            const elementRect = targetElement.getBoundingClientRect();
            window.scrollTo({
                top: window.scrollY + elementRect.top - 56, // Adjust for marginTop
                behavior: "smooth", // Smooth scrolling
            });
        }
    };

    return (
        <motion.button
            onClick={clickHandle}
            style={{
                backgroundColor: COLOR[section],
                filter: isActive ? "brightness(100%)" : "brightness(80%)",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: isActive ? 1.5 : 1 }}
            whileHover={{ scale: 1.5, filter: "brightness(100%)" }}
            className="w-2 h-2 rounded-full cursor-pointer"
            aria-label={`Jump to ${section} section`}
        ></motion.button>
    );
};

const SectionDots = () => {
    return (
        <div className="fixed top-1/2 right-7 -translate-y-1/2 flex flex-col gap-6">
            <Dot section="HOME" />
            <Dot section="ABOUT" />
            <Dot section="PROJECTS" />
        </div>
    );
};

export default SectionDots;
