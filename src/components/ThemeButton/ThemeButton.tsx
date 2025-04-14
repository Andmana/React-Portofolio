import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeButton = () => {
    const { darkMode, setDarkMode } = useTheme();

    const clickHandler = () => {
        setDarkMode((prev) => !prev);
        document.querySelector("");
    };

    return (
        <button
            onClick={clickHandler}
            className="w-13 h-6 bg-black rounded-2xl flex items-center"
        >
            <motion.div
                animate={{
                    marginLeft: darkMode ? "calc(100% - 28px)" : 0, // Moves the indicator across the button
                    marginRight: darkMode ? 0 : "calc(100% - 28px)", // Adjusts the position of the indicator
                }}
                initial={{
                    marginLeft: 0,
                    marginRight: 0,
                }}
                transition={{ ease: "easeOut" }} // Optional: Add transition for smoothness
                className="w-6 h-6 rounded-full border-2 border-black box-content bg-mint-500"
            ></motion.div>
        </button>
    );
};

export default ThemeButton;
