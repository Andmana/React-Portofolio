import { useEffect, useRef, useState } from "react";
import { useHomePage } from "../../contexts/HomePageContext";

const useSideMenu = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const { showMenu, setSideWidth, sideWidth } = useHomePage();

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                //  Check position
                const rect = ref.current.getBoundingClientRect();
                const elementCenter = rect.left + rect.width / 2;
                const viewportCenter = window.innerWidth / 2;

                if (elementCenter < viewportCenter) {
                    setSideWidth(ref.current.offsetWidth);
                    setIsDesktop(true);
                } else {
                    setSideWidth(-ref.current.offsetWidth);
                    setIsDesktop(false);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { ref, isDesktop, setIsDesktop, showMenu, sideWidth };
};

export default useSideMenu;
