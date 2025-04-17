import HideMenuButton from "./HideMenuButton";
import Menu from "./Menu";

const SideMenu = () => {
    // left-0 portrait:left-full
    return (
        <aside className="fixed top-0 w-3/5 lg:w-2/5 portrait:w-4/5 h-full portrait:h-svh flex px-4 lg:px-14 py-14 gap-4 lg:gap-14 items-stretch">
            {/* Hide Button */}
            <div className="flex justify-center items-center portrait:hidden">
                <HideMenuButton />
            </div>
            {/* Menus */}
            <div className="flex flex-col justify-center portrait:items-end gap-14 portrait:gap-10">
                <Menu />
            </div>
        </aside>
    );
};

export default SideMenu;
