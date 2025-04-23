import { motion } from "motion/react";
import iconGithub from "../../assets/icons/icon-github.svg";
import { useState } from "react";

const GithubLink = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div>
            <motion.a
                onHoverEnd={() => setIsHover(false)}
                onHoverStart={() => setIsHover(true)}
                href="https://github.com/Andmana"
                className="relative font-bold text-lg landscape:text-xl flex items-start gap-1"
            >
                MORE ON GITHUB
                <img
                    src={iconGithub}
                    className="w-6 dark-filter-(--whitenig)"
                    alt=""
                />
                <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHover ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-[-6px] w-full h-1 bg-black dark:bg-white transform origin-left"
                />
            </motion.a>
        </div>
    );
};

export default GithubLink;
