import { useMotionValue } from "motion/react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const useCarousel = () => {
    const { darkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const dragX = useMotionValue(0);

    return { darkMode, currentIndex, setCurrentIndex, dragX };
};
export default useCarousel;
