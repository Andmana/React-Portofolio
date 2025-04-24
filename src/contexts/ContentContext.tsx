import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

interface ContentContextType {
    activeContent: string;
    setActiveContent: Dispatch<SetStateAction<string>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
    const [activeContent, setActiveContent] = useState("HOME");

    return (
        <ContentContext.Provider value={{ activeContent, setActiveContent }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContent must be used within a ThemeProvider");
    }
    return context;
};
