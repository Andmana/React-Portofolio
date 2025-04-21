import { motion } from "motion/react";
import iconArrow from "../../assets/icons/icon-arrow-down-2.svg";
import { RefObject } from "react";

interface SlideButtonProps {
    isSectionInView: boolean;
    isShowMore: boolean;
    slideButtonRef: RefObject<HTMLDivElement | null>;
    clickHandle: () => void;
}
const SlideButton = ({
    isSectionInView,
    isShowMore,
    slideButtonRef,
    clickHandle,
}: SlideButtonProps) => {
    return (
        <motion.div
            style={{ translateX: isShowMore ? "100%" : "0%" }}
            ref={slideButtonRef}
            animate={{ opacity: isSectionInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: isSectionInView ? 0.4 : 0,
                    delay: isSectionInView ? 0.5 : 0,
                },
            }}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 "
        >
            <button
                onClick={clickHandle}
                className="p-1 aspect-square flex flex-col gap-4 items-center transform cursor-pointer animate-bounce"
                style={{ rotate: isShowMore ? "90deg" : "-90deg" }}
            >
                <motion.span
                    className="w-full h-0.5 absolute top-1 left-0 bg-black dark:bg-white origin-right "
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <span className="text-lg font-semibold rotate-180">
                    {isShowMore ? "HIDE" : "MORE"}
                </span>
                <img
                    src={iconArrow}
                    alt=""
                    className="w-10 dark:filter-(--whitening)"
                />
            </button>
        </motion.div>
    );
};
export default SlideButton;
