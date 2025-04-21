import { COLOR } from "../../constants/Color";
import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import useProjects from "./UseProjects";

const Projects = () => {
    const { darkMode, isPortrait, sectionRef, isSectionInView } = useProjects();
    return (
        <section
            ref={sectionRef}
            className="relative w-full h-(--section) portrait:h-fit px-6 md:px-14 flex  portrait:flex-col-reverse isolate "
        >
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
                className="relative w-5/6 portrait:w-full h-full flex justify-center items-center p-14"
            >
                {!isPortrait && (
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
                        className="absolute top-0 right-0 h-full text-header flex items-center"
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
                )}
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
                className="flex-1/6 portrait:w-full h-full text-header portrait:text-4xl flex items-center"
            >
                <AnimatedHeader
                    isInView={isSectionInView}
                    isVertical={!isPortrait}
                >
                    PRO
                </AnimatedHeader>
                {isPortrait && (
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
                )}
            </div>
        </section>
    );
};
export default Projects;
