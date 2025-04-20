import { motion } from "motion/react";
import HideMenuButton from "./HideMenuButton";
import Menu from "./Menu";
import useSideMenu from "./UseSideMenu";

const SideMenu = () => {
    const { ref, isPortrait, showMenu, sideWidth } = useSideMenu();

    return (
        <motion.aside
            className="fixed z-30 top-0 landscape:left-0 portrait:left-full w-3/5 lg:w-2/5 portrait:w-2/3 h-full portrait:h-svh flex portrait:justify-end px-8 lg:px-20 py-14 gap-4 lg:gap-20 items-stretch"
            animate={
                showMenu
                    ? { x: isPortrait ? sideWidth : 0 }
                    : { x: isPortrait ? 0 : -sideWidth }
            }
            initial={{ x: isPortrait ? 0 : -sideWidth }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            ref={ref}
        >
            {/* Hide Button */}
            {!isPortrait && (
                <div className="flex justify-center items-center portrait:w-0">
                    <HideMenuButton />
                </div>
            )}

            {/* Menus */}
            <div className="flex flex-col justify-center portrait:items-end gap-14 portrait:gap-10">
                <Menu />
            </div>
        </motion.aside>
    );
};

export default SideMenu;
