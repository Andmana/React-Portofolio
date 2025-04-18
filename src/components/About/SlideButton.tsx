import { motion } from "motion/react";
import iconArrow from "../../assets/icons/icon-arrow-down-2.svg";
import { RefObject } from "react";

interface SlideButtonProps {
    buttonHandle: () => void;
    isSlide: boolean;
    slideButtonRef: RefObject<HTMLButtonElement | null>;
}

const SlideButton = ({
    buttonHandle,
    isSlide,
    slideButtonRef,
}: SlideButtonProps) => {
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
            }}
        >
            <div className="flex flex-col items-center gap-6 animate-bounce">
                <span className="text-lg font-bold rotate-180">
                    {isSlide ? "HIDE" : "MORE"}
                </span>
                <img
                    src={iconArrow}
                    alt=""
                    className="w-10 dark:filter-(--whitening)"
                />
            </div>
        </motion.button>
    );
};

motion;
export default SlideButton;
