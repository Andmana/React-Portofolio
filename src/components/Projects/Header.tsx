import { COLOR } from "../../constants/Color";
import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";

interface HeaderProps {
    isPortrait: boolean;
    darkMode: boolean;
    isSectionInView: boolean;
}

const Header = ({ isPortrait, darkMode, isSectionInView }: HeaderProps) => {
    return (
        <>
            <div
                style={
                    isPortrait
                        ? { backgroundColor: "inherit" }
                        : {
                              backgroundColor: !darkMode
                                  ? COLOR.PROJECTS
                                  : "inherit",
                          }
                }
                className="flex items-center"
            >
                <AnimatedHeader
                    isInView={isSectionInView}
                    isVertical={!isPortrait}
                >
                    JECTS
                    <ColoredText
                        color={COLOR.PROJECTS}
                        label="."
                        flexible={true}
                    />
                </AnimatedHeader>
            </div>
            <div
                style={
                    isPortrait
                        ? { backgroundColor: "inherit" }
                        : {
                              backgroundColor: darkMode
                                  ? COLOR.PROJECTS
                                  : "inherit",
                          }
                }
                className="w-full portrait:w-fit flex items-center"
            >
                <AnimatedHeader
                    isInView={isSectionInView}
                    isVertical={!isPortrait}
                >
                    PRO
                </AnimatedHeader>
            </div>
        </>
    );
};

export default Header;
