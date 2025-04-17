import { motion } from "motion/react";
import Home from "../Home";
import SideMenuButton from "./SideMenuButton";
import { useHomePage } from "../../contexts/HomePageContext";

const Content = () => {
    const { showMenu, sideWidth } = useHomePage();

    return (
        <motion.main
            initial={{ x: 0 }}
            animate={{ x: showMenu ? sideWidth : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full py-14 flex flex-col gap-14 overflow-x-hidden"
        >
            <SideMenuButton />
            <Home />
            <section className="h-screen"></section>
            <section className="h-screen"></section>
        </motion.main>
    );
};

export default Content;
