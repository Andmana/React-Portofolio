import { useRef } from "react";

const useSideMenu = () => {
    const ref = useRef<HTMLDivElement>(null);

    return { ref };
};

export default useSideMenu;
