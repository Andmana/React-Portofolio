import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface HomePageContextType {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;

    sideWidth: number;
    setSideWidth: Dispatch<SetStateAction<number>>;
}

const HomePageContext = createContext<HomePageContextType | undefined>(
    undefined
);

export const HomePageProvider = ({ children }: { children: ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [sideWidth, setSideWidth] = useState(0);

    return (
        <HomePageContext.Provider
            value={{ showMenu, setShowMenu, sideWidth, setSideWidth }}
        >
            {children}
        </HomePageContext.Provider>
    );
};

export const useHomePage = () => {
    const context = useContext(HomePageContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
