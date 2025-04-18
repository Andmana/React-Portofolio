import { motion } from "motion/react";
import iconBurger from "../../assets/icons/icon-burger.svg";
import { useHomePage } from "../../contexts/HomePageContext";
import { useState } from "react";

const SideMenuButton = () => {
    const { showMenu, setShowMenu } = useHomePage();
    const [isHover, setIsHover] = useState(false);
    return (
        <motion.div
            className="fixed z-20 top-1/2 left-0 ps-14 transform -translate-y-1/2 portrait:hidden"
            initial={{ x: "0%", opacity: 1 }}
            animate={{
                x: showMenu ? "-200%" : "0%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <motion.button
                onClick={() => setShowMenu(true)}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
                className="text-xl font-semibold flex flex-col items-center gap-4 transform rotate-90 animate-bounce "
            >
                <span className="transform rotate-180">MENU</span>
                <img
                    src={iconBurger}
                    alt=""
                    className="rotate-90 w-12 h-12 dark:filter-(--whitening)"
                />
                <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHover ? 1 : 0 }}
                    className="absolute top-0 h-0.5 w-full bg-black dark:bg-white origin-right"
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        </motion.div>
    );
};

export default SideMenuButton;
