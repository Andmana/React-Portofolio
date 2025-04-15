import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface HeaderProps {
    mainColor: string;
}
const Header = ({ mainColor }: HeaderProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const textMotionProps = {
        initial: { y: "120%" },
        animate: { y: isInView ? "0%" : "120%" },
        transition: { duration: 0.4, delay: isInView ? 0.1 : 0 },
    };

    return (
        <div
            ref={ref}
            className="portrait:w-full flex flex-col portrait:flex-row justify-center text-header portrait:text-3xl"
        >
            <div className="overflow-hidden">
                <motion.div {...textMotionProps}>AB</motion.div>
            </div>
            <div className="overflow-hidden">
                <motion.div {...textMotionProps}>
                    OUT
                    <span style={{ color: mainColor }}>.</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
