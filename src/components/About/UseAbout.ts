import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../../contexts/ThemeContext";

const useAbout = () => {
    const { darkMode } = useTheme();
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const sectionRef = useRef<HTMLDivElement>(null);
    const isSectionInView = useInView(sectionRef);

    const headerRef = useRef<HTMLDivElement>(null);
    const [offSet, setOffSet] = useState(0); // Hedaer positioning purposes

    const contentRef = useRef<HTMLDivElement>(null);
    const slideButtonRef = useRef<HTMLDivElement>(null);
    const [isShowMore, setIsShowMore] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (headerRef.current) {
                setOffSet(headerRef.current.offsetWidth / 2);
            }
        };

        const handleScroll = () => {
            if (contentRef.current && slideButtonRef.current) {
                const rect = slideButtonRef.current.getBoundingClientRect();
                const elementCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                if (elementCenter < viewportCenter) {
                    setIsShowMore(true);
                } else {
                    setIsShowMore(false);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        if (contentRef.current)
            contentRef.current.addEventListener("scroll", handleScroll);
        handleScroll;

        return () => {
            window.removeEventListener("resize", handleResize);
            contentRef.current?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isPortrait) setIsShowMore(false);
    }, [isPortrait]);

    return {
        sectionRef,
        isSectionInView,
        headerRef,
        isPortrait,
        darkMode,
        offSet,
        contentRef,
        slideButtonRef,
        isShowMore,
    };
};

export default useAbout;
