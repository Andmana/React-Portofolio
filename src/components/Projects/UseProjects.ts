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
    const isSectionInView = useInView(sectionRef, { margin: "-1px" });

    const isCenterInView = useInView(sectionRef, {
        margin: isPortrait ? "-33% 0px" : "-49.9% 0px",
    });

    useEffect(() => {
        if (isCenterInView) setActiveContent("PROJECTS");
    }, [isCenterInView]);

    return { darkMode, isPortrait, sectionRef, isSectionInView };
};

export default useProjects;
