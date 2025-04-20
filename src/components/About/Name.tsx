import { motion } from "motion/react";
import { COLOR } from "../../constants/Color";
import ColoredText from "../Common/ColoredText";

const Name = ({ isSectionInView }: { isSectionInView: boolean }) => {
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
            className="flex flex-col gap-4 w-fit font-bold"
        >
            <h6 className="text-2xl w-fit">
                Hi
                <ColoredText label="," color={COLOR.ABOUT} flexible={true} /> I
                AM
            </h6>
            <p className="text-3xlw-fit md:text-4xl portrait:text-2xl lg:text-5xl font-black">
                ANDREAS P. PUTRA S.
            </p>
            <p className="text-2xl w-fit portrait:text-lg">
                FULL STACK DEVELOPER
            </p>
        </motion.div>
    );
};

export default Name;
