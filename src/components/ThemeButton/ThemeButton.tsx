import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { useContent } from "../../contexts/ContentContext";
import { COLOR } from "../../constants/Color";

const ThemeButton = () => {
    const { darkMode, setDarkMode } = useTheme();
    const { activeContent } = useContent();

    const clickHandler = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <motion.button
            whileHover={{ backgroundColor: COLOR[activeContent] }}
            style={{ backgroundColor: darkMode ? "#F1F5F9" : "#27272A" }}
            onClick={clickHandler}
            className="w-13 h-5 rounded-2xl flex items-center cursor-pointer"
        >
            <motion.div
                animate={{
                    marginLeft: darkMode ? "calc(100% - 22px)" : 0, // Moves the indicator across the button
                    marginRight: darkMode ? 0 : "calc(100% - 22px)", // Adjusts the position of the indicator
                }}
                initial={{
                    marginLeft: 0,
                    marginRight: 0,
                }}
                transition={{ ease: "easeOut" }} // Optional: Add transition for smoothness
                className="w-5 h-5 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white box-content"
            ></motion.div>
        </motion.button>
    );
};

export default ThemeButton;
