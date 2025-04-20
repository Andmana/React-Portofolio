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
    console.log("COLOR.ABOUT", COLOR.ABOUT);
    return (
        <div
            ref={ref}
            className="absolute left-full portrait:static text-header portrait:text-xl flex flex-col portrait:flex-row transform landscape:-translate-x-1/2"
        >
            <AnimatedHeader isInView={isInView}>AB</AnimatedHeader>
            <AnimatedHeader isInView={isInView}>
                OUT
                <ColoredText color={COLOR.ABOUT} label="." flexible={true} />
            </AnimatedHeader>
        </div>
    );
};

export default Header;
