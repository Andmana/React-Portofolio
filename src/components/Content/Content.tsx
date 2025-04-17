import { motion } from "motion/react";
import Home from "../Home";
import SideMenuButton from "./SideMenuButton";
import { useHomePage } from "../../contexts/HomePageContext";
import { useTheme } from "../../contexts/ThemeContext";

const Content = () => {
    const { showMenu, sideWidth } = useHomePage();
    const { darkMode } = useTheme();

    return (
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
                className="flex flex-col gap-14 "
            >
                <Home />
                <section className="h-screen"></section>
                <section className="h-screen"></section>
            </motion.div>
        </motion.main>
    );
};

export default Content;
