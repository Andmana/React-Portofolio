import { motion, useInView } from "motion/react";
import { useRef } from "react";
import iconArrow from "../../assets/icon-arrow-2.svg";

const Home = () => {
    const mainColor = "#F87171";
    const ref = useRef(null);
    const isInView = useInView(ref);

    const textMotionProps = {
        initial: { y: "120%" },
        animate: { y: isInView ? "0%" : "120%" },
        transition: { duration: 0.4, delay: isInView ? 0.1 : 0 },
    };

    return (
        <section
            className="relative landscape:min-h-(--section) portrait:min-h-svh flex justify-center items-stretch px-4 md:px-14 isolate"
            id="Home"
        >
            {/* Left Side with Background and Scroll Text */}
            <div className="flex-1" style={{ backgroundColor: mainColor }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-3/4 -translate-y-[200%] animate-bounce">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{
                            duration: isInView ? 2 : 0,
                        }}
                        className="-rotate-90 font-semibold  text-xl flex items-center justify-center gap-2"
                    >
                        <img
                            src={iconArrow}
                            className="w-5 h-5 -rotate-90 dark:filter-(--icon-filter)"
                        />
                        Scroll
                    </motion.div>
                </div>
            </div>

            {/* Right Side (Empty for now) */}
            <div className="flex-1" />

            <div
                ref={ref}
                className="absolute h-full leading-[0.85] text-header flex flex-col justify-center"
            >
                <div className="overflow-hidden">
                    <motion.div {...textMotionProps}>HE</motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div {...textMotionProps}>
                        LLO
                        <span style={{ color: mainColor }}>.</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
