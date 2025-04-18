import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const useAbout = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideButtonRef = useRef<HTMLButtonElement>(null);
    const [isSlide, setIsSlide] = useState(false);
    const isInView = useInView(headerRef);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current && slideButtonRef.current) {
                //  Check position
                const rect = slideButtonRef.current.getBoundingClientRect();
                const elementCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                if (elementCenter < viewportCenter) {
                    setIsSlide(true);
                } else {
                    setIsSlide(false);
                }
            }
        };
        if (contentRef.current)
            contentRef.current.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            if (contentRef.current)
                contentRef.current.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
