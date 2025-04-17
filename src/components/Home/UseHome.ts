import { useInView } from "motion/react";
import { useRef } from "react";

const useHome = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return {
        ref,
        isInView,
    };
};

export default useHome;
