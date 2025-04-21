import { COLOR } from "../../constants/Color";
import Header from "./Header";
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
                className="w-3/4 portrait:w-full  h-full flex gap-8 lg:gap-14"
            ></div>
            <div className="flex-1/4 portrait:w-full h-full text-header portrait:text-4xl flex portrait:flex-row-reverse justify-end">
                <Header
                    isPortrait={isPortrait}
                    isSectionInView={isSectionInView}
                    darkMode={darkMode}
                />
            </div>
        </section>
    );
};
export default Projects;
