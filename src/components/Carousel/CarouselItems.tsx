import { motion } from "framer-motion";
import { IProject } from "../../constants/ProjectList";
import { TAG } from "../../constants/Tags";
import { MouseEvent } from "react";
import iconLink from "../../assets/icons/icon-link.svg";

interface CarouselItemsProps {
    currentIndex: number;
    carouselData?: unknown;
}

const CarouselItems = ({ currentIndex, carouselData }: CarouselItemsProps) => {
    const data = carouselData as IProject[];
    return (
        <>
            {data.map((item, id) => (
                <motion.div
                    key={id}
                    style={{
                        backgroundImage: `url(${item.image})`,
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
                    className="w-full h-full shrink-0 bg-neutral-800 object-cover flex justify-center items-center overflow-hidden backdrop-blur-3xl text-center px-4"
                >
                    <div className="absolute w-full h-full top-0 left-0 -z-10 bg-[#b9b6b6] dark:bg-[#242424] opacity-60 dark:opacity-50  pointer-none brightness-80 dark:brightness-30"></div>
                    <div className="pointer-events-none flex flex-col gap-4 justify-center items-center not-dark:text-black">
                        <h2 className="text-lg lg:text-4xl font-bold inset-shadow-sm shadow-blue-500/50">
                            {item.name}
                        </h2>
                        <p className="text-base lg:text-xl font-semibold ">
                            {item.description}
                        </p>
                        <div className="flex">
                            {item.tags.map((tag, index) => (
                                <div
                                    className="p-1 text-white font-semibold flex items-center gap-2 text-xs"
                                    style={{ backgroundColor: TAG[tag].color }}
                                    key={index}
                                >
                                    <img
                                        src={TAG[tag].icon}
                                        className="w-5 h-5"
                                        alt=""
                                    />
                                    {TAG[tag].name}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            {item.demo && (
                                <AnchorTag
                                    label="DEMO"
                                    href={item.demo}
                                ></AnchorTag>
                            )}
                            <AnchorTag
                                label="REPO"
                                href={item.repository}
                            ></AnchorTag>
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

const AnchorTag = ({ label, href }: { label: string; href: string }) => {
    const clickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.open(href, "_blank");
    };
    return (
        <a
            href={href}
            onClick={clickHandle}
            className="font-bold dark:filter-(--whitening) flex items-center gap-1 pointer-events-auto cursor-pointer"
        >
            {label}
            <img src={iconLink} alt="" className="w-5 inline-block" />
        </a>
    );
};

export default CarouselItems;
