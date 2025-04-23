import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import { COLOR } from "../../constants/Color";

interface CarouselDots {
    currentIndex: number;
    itemsCount: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const CarouselDots = ({
    currentIndex,
    itemsCount,
    setCurrentIndex,
}: CarouselDots) => {
    return (
        <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 mt-1 flex w-fit justify-center gap-2 cursor-pointer">
            {Array.from({ length: itemsCount }, (_, idx) => (
                <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{ borderColor: COLOR.PROJECTS }}
                    initial={{ scale: 1 }}
                    animate={{ scale: currentIndex === idx ? 0.1 : 1 }}
                    className="h-2.5 w-10 transition-colors border-2 bg-neutral-500 box-border"
                />
            ))}
            <motion.div
                className="absolute h-2.5 w-10 left-0"
                style={{ backgroundColor: COLOR.PROJECTS }}
                animate={{ x: 0 + (currentIndex * 8 + currentIndex * 40) }}
            />
        </div>
    );
};

export default CarouselDots;
