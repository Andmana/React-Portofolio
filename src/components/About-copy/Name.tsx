import { motion } from "motion/react";
import { COLOR } from "../../constants/Color";
import ColoredText from "../Common/ColoredText";

const Name = ({ isInView }: { isInView: boolean }) => {
    return (
        <motion.div
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
                opacity: {
                    duration: isInView ? 0.4 : 0,
                    delay: isInView ? 0.5 : 0,
                },
            }}
            className="flex flex-col gap-4 w-fit"
        >
            <h6 className="text-2xl font-bold w-fit">
                Hi <ColoredText label="," color={COLOR.ABOUT} flexible={true} />{" "}
                I AM
            </h6>
            <p className="text-3xl w-fit md:text-4xl portrait:text-2xl lg:text-5xl font-black">
                ANDREAS P. PUTRA S.
            </p>
            <p className="text-xl portrait:text-lg">Full Stack Developer</p>
        </motion.div>
    );
};

export default Name;
