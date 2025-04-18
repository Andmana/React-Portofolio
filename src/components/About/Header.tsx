import { RefObject } from "react";
import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import { COLOR } from "../../constants/Color";

const Header = ({
    isInView,
    ref,
}: {
    isInView: boolean;
    ref: RefObject<HTMLDivElement | null>;
}) => {
    return (
        <div
            ref={ref}
            className="absolute  right-0 portrait:static text-header portrait:text-xl flex flex-col portrait:flex-row transform translate-x-1/6"
        >
            <AnimatedHeader isInView={isInView}>AB</AnimatedHeader>
            <AnimatedHeader isInView={isInView}>
                OUT
                <ColoredText color={COLOR.ABOUT} label="." />
            </AnimatedHeader>
        </div>
    );
};

export default Header;
