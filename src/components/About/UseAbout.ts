import { useInView } from "motion/react";
import { useRef, useState } from "react";

const useAbout = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideButtonRef = useRef<HTMLButtonElement>(null);
    const [isSlide, setIsSlide] = useState(false);
    const isInView = useInView(headerRef);

    return {
        headerRef,
        isInView,
        contentRef,
        slideButtonRef,
        isSlide,
        setIsSlide,
    };
};

export default useAbout;
