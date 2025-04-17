import { motion } from "motion/react";
import HideMenuButton from "./HideMenuButton";
import Menu from "./Menu";
import { useHomePage } from "../../contexts/HomePageContext";
import useSideMenu from "./UseSideMenu";
import { useEffect } from "react";

const SideMenu = () => {
    const { ref, setIsDesktop, isDesktop } = useSideMenu();
    const { showMenu, setSideWidth, sideWidth } = useHomePage();

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                //  Check position
                const rect = ref.current.getBoundingClientRect();
                const elementCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                if (elementCenter < viewportCenter) {
                    setSideWidth(ref.current.offsetWidth);
                    setIsDesktop(true);
                } else {
                    setSideWidth(-ref.current.offsetWidth);
                    setIsDesktop(false);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <motion.aside
            initial={{ x: "0px" }}
            animate={{
                x: showMenu
                    ? isDesktop
                        ? 0
                        : sideWidth
                    : isDesktop
                    ? -sideWidth
                    : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            ref={ref}
            className="fixed z-30 top-0 landscape:left-0 portrait:left-full w-3/5 lg:w-2/5 portrait:w-4/5 h-full portrait:h-svh flex portrait:justify-end px-4 lg:px-14 py-14 gap-4 lg:gap-14 items-stretch"
        >
            {/* Hide Button */}
            <div className="flex justify-center items-center portrait:hidden portrait:w-0">
                <HideMenuButton />
            </div>
            {/* Menus */}
            <div className="flex flex-col justify-center portrait:items-end gap-14 portrait:gap-10">
                <Menu />
            </div>
        </motion.aside>
    );
};

export default SideMenu;
