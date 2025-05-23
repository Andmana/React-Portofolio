import PROJECT_LISTS from "../../constants/ProjectList";
import { COLOR } from "../../constants/Color";
import ProjectDetail from "./ProjectDetail";
import { motion } from "motion/react";

const ProjectItems = ({ isSectionInView }: { isSectionInView: boolean }) => {
    return (
        <motion.div
            animate={{ opacity: isSectionInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: isSectionInView ? 0.4 : 0,
                    delay: isSectionInView ? 0.5 : 0,
                },
            }}
            className="w-full flex flex-col gap-6"
        >
            {PROJECT_LISTS.map((project, index) => (
                <>
                    <div className="w-full flex flex-col gap-4">
                        <div
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                            }}
                            className="w-full aspect-video "
                        >
                            <span className="text-5xl p-2 font-black text-stroke">
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                        </div>

                        <div className="w-full flex flex-col items-center gap-2 tracking-wider">
                            <ProjectDetail project={project} />
                        </div>
                    </div>
                    {index + 1 != PROJECT_LISTS.length && (
                        <div
                            className="w-full h-0.5"
                            style={{ backgroundColor: COLOR.PROJECTS }}
                        />
                    )}
                </>
            ))}
        </motion.div>
    );
};

export default ProjectItems;
