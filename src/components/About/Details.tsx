import { motion } from "motion/react";
import { COLOR } from "../../constants/Color";
import { TAG } from "../../constants/Tags";
import ColoredText from "../Common/ColoredText";

interface DetailProps {
    isSectionInView: boolean;
    isShowMore: boolean;
    isPortrait: boolean;
}

const Detail = ({ isSectionInView, isShowMore, isPortrait }: DetailProps) => {
    return (
        <motion.div
            animate={{ opacity: isSectionInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: isSectionInView ? 0.4 : 0,
                    delay: isSectionInView ? 0.5 : 0,
                },
            }}
            className="px-14 h-fit md:pe-4 lg:pe-14 py-8 portrait:p-0"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={
                    !isPortrait
                        ? { opacity: isShowMore ? 1 : 0.1 }
                        : { opacity: 1 }
                }
                transition={{ delay: 0.2 }}
                className="border-y-2 flex flex-col gap-3 py-4 lg:py-14 portrait:py-8 text-sm leading-relaxed portrait:leading-snug lg:text-lg"
            >
                <h1 className="text-3xl font-bold">
                    Hello
                    <ColoredText label=" !," color={COLOR.ABOUT} />
                </h1>
                <p className="portrait:text-[0.9rem] whitespace-pre-line indent-8 text-justify leading-7 tracking-wide">
                    A Computer Science graduate with 6 months of internship
                    experience as Backend Web Developer. I am currently
                    improving my skils in web development and have strong desire
                    to learn more in IT and exploring new fields. I'm looking
                    for my first full-time professional experience in the IT
                    industry and other fields. My portfolio reflects a
                    commitment to continuous learning and showcases the
                    practical projects I have completed, highlighting my ability
                    to bring creative web solutions to life!
                </p>

                <p className=" tracking-wide">
                    Here are the tech stacks I have used in various projects:
                </p>

                <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                    {Object.entries(TAG).map(([key, tag]) => (
                        <li
                            className="p-1 text-white font-semibold flex items-center gap-2"
                            style={{ backgroundColor: tag.color }}
                            key={key}
                        >
                            <img src={tag.icon} className="w-5 h-5" alt="" />
                            {tag.name}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Detail;
