import ThemeButton from "../ThemeButton";
import MobileSideBarButton from "./MobileSideBarBtn";

const TopNav = () => {
    return (
        <nav className="fixed z-10 top-0 left-0 w-full h-14 bg-inherit px-4 md:px-14 flex items-center">
            <a href="/" className="text-xl font-black ">
                ANDMANA
            </a>

            <div className="flex-1 flex items-center justify-end portrait:hidden">
                <ThemeButton />
            </div>
            <div className="flex-1 flex items-center justify-end landscape:hidden">
                <MobileSideBarButton />
            </div>
        </nav>
    );
};

export default TopNav;
