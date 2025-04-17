import { motion } from "motion/react";
import iconBurger from "../../assets/icons/icon-burger.svg";
import { useHomePage } from "../../contexts/HomePageContext";

const SideMenuButton = () => {
    const { showMenu, setShowMenu } = useHomePage();
    return (
        <motion.div
            className="fixed z-20 top-1/2 left-0 ps-14 transform -translate-y-1/2 portrait:hidden"
            initial={{ x: "0%", opacity: 1 }}
            animate={{
                x: showMenu ? "-200%" : "0%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <button
                onClick={() => setShowMenu(true)}
                className="text-xl font-semibold flex flex-col items-center gap-4 transform rotate-90 animate-bounce "
            >
                <span className="transform rotate-180">MENU</span>
                <img
                    src={iconBurger}
                    alt=""
                    className="rotate-90 w-12 h-12 dark:filter-(--whitening)"
                />
            </button>
        </motion.div>
    );
};

export default SideMenuButton;
