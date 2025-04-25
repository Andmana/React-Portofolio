import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import GithubLink from "./GIthubLink";
import ProjectItems from "./ProjectItems";
import useProjects from "./UseProjects";
import Carousel from "../Carousel";
import { COLOR } from "../../constants/Color";
import ScrollTopButton from "./ScrollTopButton";

const Projects = () => {
    const { darkMode, isPortrait, sectionRef, isSectionInView, centerRef } =
        useProjects();

    return (
        <section
            id="PROJECTS"
            ref={sectionRef}
            className="relative w-full h-(--section) portrait:h-fit px-6 md:px-14 mt-14 flex portrait:flex-col-reverse portrait:gap-8 isolate "
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
                className="relative w-5/6 portrait:w-full h-full flex flex-col justify-center items-center p-4 portrait:p-0 gap-8"
            >
                {/* Carousel */}
                {!isPortrait && (
                    <div className="relative w-5/8 h-fit overflow-hidden">
                        <Carousel isSectionInView={isSectionInView} />
                    </div>
                )}

                {/* Projects */}
                {isPortrait && (
                    <ProjectItems isSectionInView={isSectionInView} />
                )}

                <GithubLink isSectionInView={isSectionInView} />

                {/* Header */}
                {!isPortrait && (
                    <div className="absolute top-0 right-0 h-full text-header flex items-center">
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

                {isPortrait && (
                    <div className="absolute bottom-4 right-2">
                        <ScrollTopButton />
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
                className="relative flex-1/6 portrait:w-full h-full text-header portrait:text-4xl flex items-center"
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

                {!isPortrait && (
                    <div className="absolute bottom-8 left-4">
                        <ScrollTopButton />
                    </div>
                )}
            </div>
            <div
                ref={centerRef}
                className="absolute top-1/2 left-0 w-full h-2 portrait:h-2/10 opacity-0 -z-10 transform -translate-y-1/2"
            ></div>
        </section>
    );
};
export default Projects;
