import { motion } from "motion/react";
import Home from "../Home";
import SideMenuButton from "./SideMenuButton";
import { useHomePage } from "../../contexts/HomePageContext";
import { useTheme } from "../../contexts/ThemeContext";
import About from "../About";
import Projects from "../Projects";

const Content = () => {
    const { showMenu, sideWidth } = useHomePage();
    const { darkMode } = useTheme();

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
        </motion.main>
    );
};

export default Content;
