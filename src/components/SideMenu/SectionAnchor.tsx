import { MouseEvent, useState } from "react";
import { useHomePage } from "../../contexts/HomePageContext";
import { useContent } from "../../contexts/ContentContext";
import { motion } from "motion/react";
import { COLOR } from "../../constants/Color";
import ColoredText from "../Common/ColoredText";

const SectionAnchor = ({ label }: { label: string }) => {
    const [isHover, setIsHover] = useState(false);
    const { setShowMenu } = useHomePage();
    const { activeContent } = useContent();
    const isActive = activeContent === label;

    const clickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setShowMenu(false);

        setTimeout(() => {
            // Scroll to #id label
            const targetElement = document.getElementById(label);
            if (targetElement) {
                const elementRect = targetElement.getBoundingClientRect();
                window.scrollTo({
                    top: window.scrollY + elementRect.top - 56, // Adjust for marginTop
                    behavior: "smooth", // Smooth scrolling
                });
            }
        }, 500);
    };

    return (
        <motion.a
            onClick={clickHandle}
            href={`#${label}`}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="relative w-fit"
            style={{
                color: isActive ? "gray" : "inherit",
                cursor: isActive ? "none" : "pointer",
                pointerEvents: isActive ? "none" : "auto",
            }}
            aria-label={`Go to section ${label}`} // Improve accessibility
        >
            <span>{label}</span>
            {isActive && <ColoredText color={COLOR[activeContent]} label="." />}

            {/* Hover effect */}
            <motion.span
                initial={{ scaleX: 0 }}
                animate={{
                    scaleX: !isActive ? (isHover ? 1 : 0) : 0,
                    opacity: isHover || isActive ? 1 : 0, // Fade effect on hover
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    backgroundColor: COLOR[label],
                    opacity: 0, // Initial opacity
                }}
                className="absolute h-1/3 w-[120%] -left-1/10 top-1/2 transform -translate-y-2/5 origin-left"
            ></motion.span>
        </motion.a>
    );
};

export default SectionAnchor;
