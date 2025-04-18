import { COLOR } from "../../constants/Color";
import Header from "./Header";
import useAbout from "./UseAbout";
import iconArrow from "../../assets/icons/icon-arrow-down-2.svg";
import ColoredText from "../Common/ColoredText";
import { useEffect } from "react";
import { motion } from "motion/react";
const About = () => {
    const {
        headerRef,
        isInView,
        contentRef,
        slideButtonRef,
        isSlide,
        setIsSlide,
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

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current && slideButtonRef.current) {
                //  Check position
                const rect = slideButtonRef.current.getBoundingClientRect();
                const elementCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                if (elementCenter < viewportCenter) {
                    setIsSlide(true);
                } else {
                    setIsSlide(false);
                }
            }
        };
        if (contentRef.current)
            contentRef.current.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            if (contentRef.current)
                contentRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // Border
        <section className="relative w-full h-(--section) portrait:h-fit p-6 md:px-14 isolate">
            <div
                ref={contentRef}
                style={{ scrollbarWidth: "none" }}
                className="relative w-full h-full overflow-scroll flex flex-col gap-8 justify-center  overflow-x-scroll overflow-y-scroll"
            >
                <article className="min-w-full h-full flex portrait:flex-col gap-4 md:gap-14">
                    <div
                        className="relative w-2/5 h-full flex items-center"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${COLOR.ABOUT}, ${COLOR.ABOUT})`,
                            backgroundSize: "75% 100%",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Header ref={headerRef} isInView={isInView} />
                    </div>

                    <div className="w-3/5 portrait:w-full h-full font-semibold flex justify-center items-center portrait:justify-start">
                        <div className="flex w-4/5 flex-col gap-4">
                            <h6 className="text-2xl font-bold w-fit">
                                Hi <span style={{ color: COLOR.ABOUT }}>,</span>{" "}
                                I AM
                            </h6>
                            <p className="text-3xl md:text-4xl portrait:text-2xl lg:text-5xl font-black">
                                ANDREAS P. PUTRA S.
                            </p>
                            <p className="text-xl portrait:text-lg">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                </article>
                <article className="absolute portrait:static left-[min(130%,calc(100%+200px))] w-7/10 portrait:w-full h-full flex items-center">
                    <div className="px-14 py-8 portrait:p-0">
                        <div className="border-y-2 flex flex-col gap-3 py-14 portrait:py-8">
                            <h1 className="text-3xl font-bold">
                                Hello
                                <ColoredText label=" !," color={COLOR.ABOUT} />
                            </h1>
                            <p className=" text-base lg:text-lg portrait:text-[0.9rem] whitespace-pre-line indent-8 text-justify leading-relaxed portrait:leading-snug tracking-wide">
                                A Computer Science graduate with 6 months of
                                internship experience as Backend Web Developer.
                                I am currently improving my skils in web
                                development and have strong desire to learn more
                                in IT and exploring new fields. I'm looking for
                                my first full-time professional experience in
                                the IT industry and other fields. My portfolio
                                reflects a commitment to continuous learning and
                                showcases the practical projects I have
                                completed, highlighting my ability to bring
                                creative web solutions to life!
                            </p>

                            <p className="text-base md:text-lg leading-relaxed portrait:leading-snug tracking-wide">
                                Here are the tech stacks I have used in various
                                projects:
                            </p>
                        </div>
                    </div>
                </article>
                <motion.button
                    onClick={buttonHandle}
                    ref={slideButtonRef}
                    className="absolute left-full cursor-pointer portrait:hidden"
                    initial={{ x: "-200%", rotate: "-90deg" }}
                    style={{
                        rotate: isSlide ? "90deg" : "-90deg",
                    }}
                    animate={{
                        x: isSlide ? "100px" : "-100%",
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
            </div>

            <div className=""></div>
        </section>
    );
};

export default About;
