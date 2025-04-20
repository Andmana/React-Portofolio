import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const useAbout = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const slideButtonRef = useRef<HTMLButtonElement>(null);
    const [isSlide, setIsSlide] = useState(false);
    const isInView = useInView(headerRef);
    const { darkMode } = useTheme();
    const [isDeskTop, setIsDesktop] = useState(true);

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

                if (
                    window.getComputedStyle(slideButtonRef.current).display ===
                    "none"
                ) {
                    setIsSlide(false);
                    setIsDesktop(false);
                } else {
                    setIsDesktop(true);
                }
            }
        };
        if (contentRef.current) {
            contentRef.current.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
        }
        handleScroll();

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
            }
        };
    }, []);

    return {
        headerRef,
        isInView,
        contentRef,
        slideButtonRef,
        isSlide,
        setIsSlide,
        darkMode,
        isDeskTop,
    };
};

export default useAbout;
