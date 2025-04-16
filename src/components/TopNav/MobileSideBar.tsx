import iconBurger from "../../assets/icons/icon-burger.svg";

const MobileIsdeBarButton = () => {
    return (
        <button
            className="w-7 h-7 dark:filter-(--icon-filter) cursor-pointer"
            aria-label="Sidebar"
        >
            <img src={iconBurger} alt="" />
        </button>
    );
};

export default MobileIsdeBarButton;
