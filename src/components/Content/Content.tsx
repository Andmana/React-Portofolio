import { motion } from "motion/react";
import Home from "../Home";
import SideMenuButton from "./SideMenuButton";
import { useHomePage } from "../../contexts/HomePageContext";
import { useTheme } from "../../contexts/ThemeContext";
import About from "../About";
import Projects from "../Projects";
import { useMediaQuery } from "react-responsive";
import SectionDots from "./SectionDots";

const Content = () => {
    const { darkMode } = useTheme();
    const { showMenu, sideWidth } = useHomePage();
    const isPortrait = useMediaQuery({ orientation: "portrait" });

    return (
        <motion.main className="relative w-full">
            <SideMenuButton />
            <motion.div
                initial={{ x: 0 }}
                animate={{
                    x: showMenu ? sideWidth : 0,
                    filter: showMenu
                        ? darkMode
                            ? "brightness(0.8)"
                            : "brightness(1.4)"
                        : "brightness(1)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full my-14 flex flex-col gap-[1px]"
            >
                <Home />
                <About />
                <Projects />
            </motion.div>
            {!isPortrait && <SectionDots />}
        </motion.main>
    );
};

export default Content;
