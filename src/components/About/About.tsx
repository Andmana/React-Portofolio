import Header from "./Header";
import useAbout from "./UseAbout";
import Name from "./Name";
import SlideButton from "./SlideButton";
import Detail from "./Details";
import { motion } from "motion/react";
import { delay } from "motion";
const About = () => {
    const {
        headerRef,
        isInView,
        contentRef,
        slideButtonRef,
        isSlide,
        darkMode,
        isDeskTop,
    } = useAbout();

    const buttonHandle = () => {
        if (contentRef.current) {
            if (isSlide) {
                // Scroll to the left (start) smoothly
                contentRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                // Scroll to the right (end) smoothly
                contentRef.current.scrollTo({
                    left: contentRef.current.scrollWidth,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        // Border
        <section className="relative w-full h-(--section) portrait:h-fit p-6 md:px-14 isolate">
            <div
                ref={contentRef}
                style={{ scrollbarWidth: "none" }}
                className="relative w-full h-full overflow-scroll flex flex-col gap-8 justify-center  overflow-x-scroll "
            >
                <motion.article
                    animate={{
                        filter: isSlide
                            ? darkMode
                                ? "brightness(0.8)"
                                : "brightness(1.4)"
                            : "brightness(1)",
                    }}
                    className="min-w-full h-full flex portrait:flex-col gap-16 portrait:gap-4 "
                >
                    <div className="relative w-3/10 h-full flex items-center  landscape:dark:bg-[#FACC15]">
                        <Header ref={headerRef} isInView={isInView} />
                    </div>

                    <motion.div
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{
                            opacity: {
                                duration: isInView ? 0.4 : 0,
                                delay: isInView ? 0.3 : 0,
                            },
                        }}
                        className="w-7/10 portrait:w-full h-full font-semibold flex justify-center items-center portrait:justify-start bg-[#FACC15] dark:bg-inherit"
                    >
                        <Name />
                    </motion.div>
                </motion.article>
                <motion.article
                    animate={
                        !isDeskTop
                            ? { opacity: 1 }
                            : { opacity: isSlide ? 1 : 0.1 }
                    }
                    className="absolute portrait:static left-[min(130%,calc(100%+150px))] w-7/10 portrait:w-full h-fit flex items-center "
                >
                    <Detail />
                </motion.article>

                <SlideButton
                    isSlide={isSlide}
                    isInView={isInView}
                    buttonHandle={buttonHandle}
                    slideButtonRef={slideButtonRef}
                />
            </div>

            <div className=""></div>
        </section>
    );
};

export default About;
