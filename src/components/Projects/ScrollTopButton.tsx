import { motion, useInView } from "motion/react";
import iconArrow from "../../assets/icons/icon-arrow-down.svg";
import { useRef, useState } from "react";

const ScrollTopButton = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [isHover, setIsHover] = useState(false);
    const clickHandle = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            ref={ref}
            onHoverEnd={() => setIsHover(false)}
            onHoverStart={() => setIsHover(true)}
            onClick={clickHandle}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
                duration: isInView ? 0.4 : 0,
                delay: isInView ? 0.2 : 0,
            }}
            className="flex flex-col items-center gap-2 cursor-pointer rotate-180 animate-bounce"
        >
            <span
                className="relative text-base font-semibold -scale-100 tracking-wider align-middle"
                style={{ writingMode: "vertical-rl" }}
            >
                TOP
                <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isHover ? 1 : 0 }}
                    transition={{ duration: isHover ? 0.5 : 0 }}
                    className="absolute left-0 top-0 w-0.5 h-full bg-black dark:bg-white transform origin-top"
                />
            </span>
            <img
                src={iconArrow}
                alt=""
                aria-hidden="true"
                className="w-6 h-6 dark:filter-(--whitening) "
            />
        </motion.button>
    );
};

export default ScrollTopButton;
