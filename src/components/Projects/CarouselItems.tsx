import { motion } from "framer-motion";
import PROJECT_LISTS from "../../constants/ProjectList";
import ProjectDetail from "./ProjectDetail";

interface CarouselItemsProps {
    currentIndex: number;
}

const CarouselItems = ({ currentIndex }: CarouselItemsProps) => {
    return (
        <>
            {PROJECT_LISTS.map((project, id) => (
                <motion.div
                    key={id}
                    style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backdropFilter: "blur(100px)",
                    }}
                    animate={{
                        scale: currentIndex === id ? 1 : 0.85,
                    }}
                    transition={{
                        type: "spring",
                        mass: 3,
                        stiffness: 400,
                        damping: 50,
                    }}
                    className="w-full h-full shrink-0 bg-neutral-800 object-cover flex justify-center items-center overflow-hidden backdrop-blur-3xl text-center px-2 lg:px-4"
                >
                    <div className="absolute w-full h-full top-0 left-0 -z-10 bg-[#b9b6b6] dark:bg-[#242424] opacity-60 dark:opacity-50 pointer-none brightness-80 dark:brightness-30"></div>
                    <div className="pointer-events-none flex flex-col gap-1 lg:gap-4  justify-center items-center not-dark:text-black tracking-wider">
                        <ProjectDetail project={project} />
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default CarouselItems;
