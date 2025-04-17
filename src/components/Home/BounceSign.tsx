import { motion } from "motion/react";
import iconArrow from "../../assets/icons/icon-arrow-down.svg";

const BounceSign = ({ isInView }: { isInView: boolean }) => {
    return (
        <div className="absolute bottom-0 right-0 transform animate-bounce">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{
                    duration: isInView ? 2 : 0,
                }}
                className="flex flex-col items-center justify-center gap-8"
            >
                <span className="font-semibold text-xl -rotate-90">Scroll</span>
                <img
                    src={iconArrow}
                    className="w-5 h-5 dark:filter-(--icon-filter)"
                />
            </motion.div>
        </div>
    );
};

export default BounceSign;
