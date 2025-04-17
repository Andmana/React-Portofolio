import iconBurger from "../../assets/icons/icon-burger.svg";

const MobileSideBarButton = () => {
    return (
        <button
            className="w-7 h-7 dark:filter-(--whitening) cursor-pointer"
            aria-label="Sidebar"
        >
            <img src={iconBurger} alt="" />
        </button>
    );
};

export default MobileSideBarButton;
