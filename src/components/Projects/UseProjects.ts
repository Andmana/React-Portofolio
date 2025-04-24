import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useMediaQuery } from "react-responsive";
import { useContent } from "../../contexts/ContentContext";

const useProjects = () => {
    const { darkMode } = useTheme();
    const { setActiveContent } = useContent();

    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef);

    const centerRef = useRef(null);
    const isCenterInView = useInView(centerRef);

    useEffect(() => {
        if (isCenterInView) setActiveContent("PROJECTS");
    }, [isCenterInView]);

    return { darkMode, isPortrait, sectionRef, isSectionInView, centerRef };
};

export default useProjects;
