import { useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useMediaQuery } from "react-responsive";

const useProjects = () => {
    const { darkMode } = useTheme();
    const isPortrait = useMediaQuery({ orientation: "portrait" });
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef);

    return { darkMode, sectionRef, isPortrait, isSectionInView };
};

export default useProjects;
