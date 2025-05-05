import { motion } from "motion/react";
import { ReactNode } from "react";

const AnimatedHeader = ({
    isInView,
    children,
    isVertical = false,
}: {
    isInView: boolean;
    children: ReactNode;
    isVertical?: boolean;
}) => {
    const textMotionProps = {
        initial: isVertical ? { x: "0%" } : { y: "120%" },
        animate: isVertical
            ? { x: isInView ? "0%" : "-120%" }
            : { y: isInView ? "0%" : "120%" },
        transition: { duration: 0.4, delay: isInView ? 0.1 : 0 },
    };
    return (
        <div className="overflow-hidden">
            <motion.div
                {...textMotionProps}
                style={{
                    writingMode: isVertical ? "vertical-rl" : "horizontal-tb",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
export default AnimatedHeader;
