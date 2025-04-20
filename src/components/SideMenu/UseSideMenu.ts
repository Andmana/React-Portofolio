import { useEffect, useRef, useState } from "react";
import { useHomePage } from "../../contexts/HomePageContext";
import { useMediaQuery } from "react-responsive";

const useSideMenu = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isPortrait = useMediaQuery({ orientation: "portrait" });
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
                } else {
                    setSideWidth(-ref.current.offsetWidth);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { ref, isPortrait, showMenu, sideWidth };
};

export default useSideMenu;
