import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useContent } from "../../contexts/ContentContext";

const useHome = () => {
    const { setActiveContent } = useContent();

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-1px" });

    const centerRef = useRef(null);
    const isCenterInView = useInView(centerRef);

    useEffect(() => {
        if (isCenterInView) setActiveContent("HOME");
    }, [isCenterInView]);

    return {
        ref,
        isInView,
        centerRef,
    };
};

export default useHome;
