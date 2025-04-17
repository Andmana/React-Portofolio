import { useRef, useState } from "react";

const useSideMenu = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    return { ref, isDesktop, setIsDesktop };
};

export default useSideMenu;
