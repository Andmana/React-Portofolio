import { COLOR } from "../../constants/Color";
import PROJECT_LISTS from "../../constants/ProjectList";
import Carousel from "../Carousel";
import CarouselItems from "../Carousel/CarouselItems";
import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import GithubLink from "./GIthubLink";
import ProjectItems from "./ProjectItems";
import useProjects from "./UseProjects";

const Projects = () => {
    const { darkMode, isPortrait, sectionRef, isSectionInView } = useProjects();
    return (
        <section
            ref={sectionRef}
            className="relative w-full h-(--section) portrait:h-fit px-6 md:px-14 flex portrait:flex-col-reverse portrait:gap-8 isolate "
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
                        <Carousel
                            CarouselItems={CarouselItems}
                            carouselData={PROJECT_LISTS}
                            itemsCount={PROJECT_LISTS.length}
                        />
                    </div>
                )}

                {/* Projects */}
                {isPortrait && <ProjectItems />}

                <GithubLink />

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
