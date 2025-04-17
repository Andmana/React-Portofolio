import { motion } from "motion/react";
import iconBurger from "../../assets/icons/icon-burger.svg";
import iconCross from "../../assets/icons/icon-cross.svg";
import { useHomePage } from "../../contexts/HomePageContext";

const MobileSideBarButton = () => {
    const { setShowMenu, showMenu } = useHomePage();
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-7 h-7 dark:filter-(--whitening) cursor-pointer"
            aria-label="Sidebar"
        >
            <img src={showMenu ? iconCross : iconBurger} alt="" />
        </motion.button>
    );
};

export default MobileSideBarButton;
