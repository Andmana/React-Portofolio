import { motion, useInView } from "motion/react";
import { useRef } from "react";

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
            style={{
                minHeight: "calc(100vh - 112px)",
            }}
            className="relative flex justify-center items-stretch px-4 md:px-14 isolate"
            id="Home"
        >
            <div className="flex-1/2" style={{ backgroundColor: mainColor }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-3/4 -translate-y-full animate-bounce">
                    <div className="transform -rotate-90 font-semibold text-xl">
                        ← Scroll
                    </div>
                </div>
            </div>
            <div className="flex-1/2"></div>

            <motion.div
                ref={ref}
                className="self-center absolute h-full text-[150px] leading-[0.85] font-black flex flex-col justify-center"
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
            </motion.div>
        </section>
    );
};

export default Home;
