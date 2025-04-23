import { useMotionValue } from "motion/react";
import { useState } from "react";

const useCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dragX = useMotionValue(0);

    return { currentIndex, setCurrentIndex, dragX };
};
export default useCarousel;
