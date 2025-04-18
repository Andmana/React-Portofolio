import { motion } from "motion/react";
import iconArrow from "../../assets/icons/icon-arrow-down-2.svg";
import { RefObject, useState } from "react";

interface SlideButtonProps {
    buttonHandle: () => void;
    isSlide: boolean;
    isInView: boolean;
    slideButtonRef: RefObject<HTMLButtonElement | null>;
}

const SlideButton = ({
    buttonHandle,
    isSlide,
    isInView,
    slideButtonRef,
}: SlideButtonProps) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <motion.button
            onClick={buttonHandle}
            ref={slideButtonRef}
            className="absolute left-full cursor-pointer portrait:hidden"
            initial={{ x: "-200%", rotate: "-90deg" }}
            style={{
                rotate: isSlide ? "90deg" : "-90deg",
            }}
            animate={{
                x: isSlide ? "100px" : "-105%",
                rotate: isSlide ? "90deg" : "-90deg",
                opacity: isInView ? 1 : isSlide ? 1 : 0,
            }}
            transition={{
                opacity: {
                    duration: isInView ? 0.4 : 0,
                    delay: isInView ? 0.5 : 0,
                },
            }}
        >
            <motion.div
                className="flex flex-col items-center gap-6 animate-bounce"
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
            >
                <span className="text-lg font-bold rotate-180">
                    {isSlide ? "HIDE" : "MORE"}
                </span>
                <motion.span
                    className="w-full h-0.5 absolute top-0 left-0 bg-black dark:bg-white origin-right"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHover ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                <img
                    src={iconArrow}
                    alt=""
                    className="w-10 dark:filter-(--whitening)"
                />
            </motion.div>
        </motion.button>
    );
};

motion;
export default SlideButton;
