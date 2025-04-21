import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import { COLOR } from "../../constants/Color";

const Header = ({ isSectionInView }: { isSectionInView: boolean }) => {
    return (
        <>
            <AnimatedHeader isInView={isSectionInView}>AB</AnimatedHeader>
            <AnimatedHeader isInView={isSectionInView}>
                OUT
                <ColoredText color={COLOR.ABOUT} label="." flexible={true} />
            </AnimatedHeader>
        </>
    );
};

export default Header;
