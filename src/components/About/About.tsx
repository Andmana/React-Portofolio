import { motion } from "motion/react";
import { COLOR } from "../../utils/Color";
import Header from "./Header";
import SlideButton from "./SlideButton";
import { useEffect, useRef, useState } from "react";
import { TAG } from "../../utils/Tags";

const About = () => {
    const [showDetail, setShowDetail] = useState(false);
    const detailRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const [offSet, setOffSet] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (detailRef.current && nameRef.current) {
                setOffSet(detailRef.current.offsetWidth);
                if (
                    detailRef.current.offsetWidth ===
                    nameRef.current.offsetWidth
                )
                    setShowDetail(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="relative landscape:min-h-(--section) portrait:min-h-svh pe-4 md:px-14 flex ">
            {/* Parent element */}
            <div className="relative flex-1 w-full flex items-stretch overflow-x-hidden">
                {/* Child element, slide */}
                <motion.div
                    initial={{ x: "0px" }}
                    animate={{
                        x: showDetail ? `-${offSet + 56}px` : "0px",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative min-h-full h-fit w-full flex flex-14 portrait:flex-col gap-14 portrait:gap-4"
                >
                    <div
                        ref={nameRef}
                        className="relative min-h-full w-full shrink-0 flex items-center ps-4"
                    >
                        <div
                            className="absolute w-3/11 h-full portrait:hidden"
                            style={{ backgroundColor: COLOR.ABOUT }}
                        />
                        <div className="relative left-1/6 w-5/6 portrait:left-0 portrait:w-full flex portrait:flex-col items-center gap-4">
                            {/* Header */}
                            <Header mainColor={COLOR.ABOUT} />

                            {/* Name */}
                            <motion.article
                                initial={{ opacity: 1 }}
                                animate={{ opacity: showDetail ? 0.5 : 1 }}
                                className="flex-1 font-bold flex flex-col gap-3 justify-start w-full"
                            >
                                <h6 className="text-2xl font-bold">
                                    Hi{" "}
                                    <span style={{ color: COLOR.ABOUT }}>
                                        ,
                                    </span>{" "}
                                    I AM
                                </h6>
                                <p className="text-4xl md:text-5xl portrait:text-2xl lg:text-6xl">
                                    ANDREAS PERMANA PUTRA S.
                                </p>
                                <p className="text-2xl portrait:text-lg">
                                    Full Stack Developer
                                </p>
                            </motion.article>

                            {/* Slide Button */}
                            <SlideButton
                                handleShowDetail={() =>
                                    setShowDetail((prev) => !prev)
                                }
                                showDetail={showDetail}
                            />
                        </div>
                    </div>
                    <div
                        ref={detailRef}
                        className="min-h-full w-4/5 lg:w-3/5 portrait:w-full shrink-0 py-4"
                    >
                        <article
                            className="min-h-full h-fit w-full border-y-2 flex flex-col gap-3 px-4 py-8 md:py-14"
                            style={{ borderColor: COLOR.ABOUT }}
                        >
                            <h1 className="text-xl font-bold">
                                Hello
                                <span style={{ color: COLOR.ABOUT }}>,!</span>
                            </h1>
                            <p className="text-lg lg:text-xl portrait:text-base leading-relaxed portrait:leading-snug tracking-wide">
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

                            <p className="text-lg lg:text-xl  leading-relaxed portrait:leading-snug tracking-wide">
                                Here are the tech stacks I have used in various
                                projects:
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {Object.entries(TAG).map(([key, tag]) => (
                                    <div
                                        className="p-1 text-sm text-white font-semibold flex items-center gap-2"
                                        style={{ backgroundColor: tag.color }}
                                        key={key}
                                    >
                                        <img
                                            src={tag.icon}
                                            className="w-5 h-5"
                                            alt=""
                                        />
                                        {tag.name}
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
