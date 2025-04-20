import { useMediaQuery } from "react-responsive";
import ThemeButton from "../ThemeButton";
import MobileSideBarButton from "./MobileSideBarBtn";

const TopNav = () => {
    const isPotrait = useMediaQuery({ orientation: "portrait" });

    return (
        <nav className="fixed z-50 top-0 left-0 w-full h-14 bg-inherit px-6 md:px-16 flex items-center">
            <a href="/" className="text-xl font-black ">
                ANDMANA
            </a>

            {isPotrait ? (
                <div className="flex-1 flex items-center justify-end">
                    <MobileSideBarButton />
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-end">
                    <ThemeButton />
                </div>
            )}
        </nav>
    );
};

export default TopNav;
