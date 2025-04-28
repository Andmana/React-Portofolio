import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useContent } from "../../contexts/ContentContext";

const useHome = () => {
    const { setActiveContent } = useContent();

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-1px" });

    const isCenterInView = useInView(ref, { margin: "-49.9% 0px" });

    useEffect(() => {
        if (isCenterInView) setActiveContent("HOME");
    }, [isCenterInView]);

    return {
        ref,
        isInView,
    };
};

export default useHome;
