import MediaQuery from "react-responsive";
import ThemeButton from "../ThemeButton";

const TopNav = () => {
    return (
        <nav className="fixed z-10 top-0 left-0 w-full h-14 bg-inherit px-4 md:px-14 flex items-center">
            <a href="/" className="text-xl font-black ">
                ANDMANA
            </a>

            <MediaQuery minWidth={768}>
                <div className="flex-1 flex items-center justify-end">
                    <ThemeButton />
                </div>
            </MediaQuery>
        </nav>
    );
};

export default TopNav;
