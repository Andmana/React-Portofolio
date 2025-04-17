import { motion } from "motion/react";
import { ReactNode } from "react";

const AnimatedHeader = ({
    isInView,
    children,
}: {
    isInView: boolean;
    children: ReactNode;
}) => {
    const textMotionProps = {
        initial: { y: "120%" },
        animate: { y: isInView ? "0%" : "120%" },
        transition: { duration: 0.4, delay: isInView ? 0.1 : 0 },
    };
    return (
        <div className="overflow-hidden">
            <motion.div {...textMotionProps}>{children}</motion.div>
        </div>
    );
};
export default AnimatedHeader;
