import { color, motion, useCycle } from "motion/react";
import SlideButton from "./SlideButton";
import Header from "./Header";
import { TAG } from "../../utils/Tags";

const mainColor = "#FACC15";

const About = () => {
    const [showDetail, setShowDetail] = useCycle(false, true);
    return (
        <section
            style={{
                minHeight: "calc(100vh - 112px)",
            }}
            className="relative w-full px-4 md:px-14 flex"
            id="About"
        >
            <div className="relative portrait:static w-full overflow-x-hidden  ">
                <motion.div
                    className="absolute top-0 left-0 w-[180%] h-full portrait:w-full flex portrait:flex-col "
                    initial={{ x: "0%" }}
                    animate={{ x: showDetail ? "-40%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="relative h-full w-[50%] portrait:h-fit portrait:w-full flex flex-row portrait:flex-col items-center">
                        <div
                            style={{ backgroundColor: mainColor }}
                            className="w-3/11 h-full potrait:hidden"
                        />

                        <div className="absolute portrait:static right-0 top-0 w-10/12 portrait:w-full h-full flex items-center portrait:items-stretch portrait:flex-col gap-4 px-4">
                            {/* Header */}
                            <Header mainColor={mainColor} />
                            {/* Name */}
                            <motion.article
                                initial={{ opacity: 1 }}
                                animate={{ opacity: showDetail ? 0.5 : 1 }}
                                className="flex-1 font-bold flex flex-col gap-3 justify-start"
                            >
                                <h6 className="text-2xl font-bold">
                                    Hi{" "}
                                    <span style={{ color: mainColor }}>,</span>{" "}
                                    I AM
                                </h6>
                                <p className="text-4xl md:text-5xl lg:text-6xl">
                                    ANDREAS PERMANA PUTRA S.
                                </p>
                                <p className="text-2xl">Full Stack Developer</p>
                            </motion.article>
                            {/* Slide Button */}
                            <SlideButton
                                handleShowDetail={setShowDetail}
                                showDetail={showDetail}
                            />
                        </div>
                    </div>
                    <div className="min-h-full h-fit w-[50%] portrait:w-full p-8 portrait:px-4">
                        <article
                            className="min-h-full h-fit lg:w-2/3 portrait:w-full py-4 md:py-14 border-y-2 flex flex-col gap-3"
                            style={{ borderColor: mainColor }}
                        >
                            <h1 className="text-xl font-bold">
                                Hello
                                <span style={{ color: mainColor }}>,!</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-justify leading-relaxed tracking-wide">
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

                            <p className="mt-4 text-xl text-justify leading-relaxed">
                                Here are the tech stacks I have used in various
                                projects:
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {Object.entries(TAG).map(([key, tag]) => (
                                    <div
                                        className="p-1 text-[0.85rem] text-white font-semibold flex items-center gap-2"
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
