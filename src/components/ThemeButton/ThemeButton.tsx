import { motion, useCycle } from "motion/react";

const ThemeButton = () => {
    const [indicatorState, setIndicatorState] = useCycle(false, true);

    const clickHandler = () => {
        setIndicatorState(); // Toggle between the two states
    };

    return (
        <button
            onClick={clickHandler}
            className="w-13 h-6 bg-black rounded-2xl flex items-center"
        >
            <motion.div
                animate={{
                    marginLeft: indicatorState ? "calc(100% - 28px)" : 0, // Moves the indicator across the button
                    marginRight: indicatorState ? 0 : "calc(100% - 28px)", // Adjusts the position of the indicator
                }}
                initial={{
                    marginLeft: 0,
                    marginRight: 0,
                }}
                transition={{ ease: "easeOut" }} // Optional: Add transition for smoothness
                className="w-6 h-6 rounded-full bg-white border-2 border-black box-content"
            ></motion.div>
        </button>
    );
};

export default ThemeButton;
