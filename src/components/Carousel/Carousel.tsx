import { useEffect, useState } from "react";
import useCarousel from "./UseCarousel";
import { motion } from "motion/react";
import CarouselDots from "./CarouselDots";
import { COLOR } from "../../constants/Color";
import CarouselItems from "./CarouselItems";
import PROJECT_LISTS from "../../constants/ProjectList";

const SPRING_OPTIONS = { type: "spring", mass: 3, stiffness: 400, damping: 50 };
const DRAG_BUFFER = 30;

const Carousel = ({ isSectionInView }: { isSectionInView: boolean }) => {
    const itemCount = PROJECT_LISTS.length;
    const { darkMode, currentIndex, setCurrentIndex, dragX } = useCarousel();
    const [countDown, setCoundown] = useState(200);

    useEffect(() => {
        const interval = setInterval(() => {
            setCoundown((prev) => {
                if (prev === 0) {
                    const x = dragX.get();
                    if (x === 0) {
                        setCurrentIndex((pv) => {
                            if (pv === itemCount - 1) {
                                return 0;
                            }
                            return pv + 1;
                        });
                    }
                    return 199;
                }
                return prev - 1;
            });
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && currentIndex < itemCount - 1) {
            setCurrentIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && currentIndex > 0) {
            setCurrentIndex((pv) => pv - 1);
        }
    };

    return (
        <motion.div
            className="relative w-full flex items-center flex-col gap-4 "
            animate={{ opacity: isSectionInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: isSectionInView ? 0.4 : 0,
                    delay: isSectionInView ? 0.5 : 0,
                },
            }}
        >
            <motion.div
                className="h-1 w-[199px]"
                style={{ backgroundColor: darkMode ? COLOR.PROJECTS : "white" }}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: countDown / 199 }}
                transition={{ ease: "linear", duration: 0 }}
            />

            {/* Carousel items contrainer */}
            <motion.div
                className="w-full aspect-16/9 flex items-center active:cursor-grabbing"
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${currentIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
            >
                <CarouselItems currentIndex={currentIndex} />
            </motion.div>

            <CarouselDots
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                itemsCount={itemCount}
                darkMode={darkMode}
            />
        </motion.div>
    );
};

export default Carousel;
