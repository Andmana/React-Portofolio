import { motion } from "motion/react";
import iconCross from "../../assets/icons/icon-cross.svg";
import { useHomePage } from "../../contexts/HomePageContext";

const HideMenuButton = () => {
    const { setShowMenu } = useHomePage();
    return (
        <button
            onClick={() => setShowMenu(false)}
            className="h-10 w-10"
            aria-label="Hide side menu "
        >
            <motion.img
                whileHover={{ rotate: 180 }}
                src={iconCross}
                alt=""
                className="dark:filter-(--whitening)"
            />
        </button>
    );
};

export default HideMenuButton;
