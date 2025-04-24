import { motion } from "motion/react";
import Home from "../Home";
import SideMenuButton from "./SideMenuButton";
import { useHomePage } from "../../contexts/HomePageContext";
import { useTheme } from "../../contexts/ThemeContext";
import About from "../About";
import Projects from "../Projects";
import { ContentProvider } from "../../contexts/ContentContext";

const Content = () => {
    const { showMenu, sideWidth } = useHomePage();
    const { darkMode } = useTheme();

    return (
        <ContentProvider>
            <motion.main className="relative w-full py-14 ">
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
                    className="flex flex-col gap-[58px] "
                >
                    <Home />
                    <About />
                    <Projects />
                </motion.div>
            </motion.main>
        </ContentProvider>
    );
};

export default Content;
