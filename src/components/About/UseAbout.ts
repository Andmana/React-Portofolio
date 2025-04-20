import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../../contexts/ThemeContext";

const useAbout = () => {
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [offSet, setOffSet] = useState(0);
    const isSectionInView = useInView(sectionRef);
    const { darkMode } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            if (headerRef.current) {
                setOffSet(headerRef.current.offsetWidth / 2);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        sectionRef,
        isSectionInView,
        headerRef,
        isPortrait,
        darkMode,
        offSet,
    };
};

export default useAbout;
