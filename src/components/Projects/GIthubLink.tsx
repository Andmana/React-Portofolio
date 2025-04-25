import { motion } from "motion/react";
import iconGithub from "../../assets/icons/icon-github.svg";
import { useState } from "react";

const GithubLink = ({ isSectionInView }: { isSectionInView: boolean }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <motion.div
            className=""
            animate={{ opacity: isSectionInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: isSectionInView ? 0.4 : 0,
                    delay: isSectionInView ? 0.5 : 0,
                },
            }}
        >
            <motion.a
                onHoverEnd={() => setIsHover(false)}
                onHoverStart={() => setIsHover(true)}
                href="https://github.com/Andmana"
                className="relative landscape:font-bold landscape:text-xl flex items-start gap-1"
            >
                MORE ON GITHUB
                <img
                    src={iconGithub}
                    className="w-6 dark:filter-(--whitening)"
                    alt=""
                />
                <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHover ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-[-6px] w-full h-0.5 bg-black dark:bg-white transform origin-left"
                />
            </motion.a>
        </motion.div>
    );
};

export default GithubLink;
