import { MouseEvent } from "react";
import PROJECT_LISTS from "../../constants/ProjectList";
import iconLink from "../../assets/icons/icon-link.svg";
import { TAG } from "../../constants/Tags";
import { COLOR } from "../../constants/Color";

const ProjectItems = () => {
    return (
        <div className="w-full flex flex-col gap-6">
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
                            <span className="text-4xl font-black text-stroke">
                                {index.toString().padStart(2, "0")}
                            </span>
                        </div>

                        <div className="w-full flex flex-col items-center gap-2">
                            <h2 className="text-xl font-bold inset-shadow-sm">
                                {project.name}
                            </h2>
                            <p className="text-sm font-semibold text-center ">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center">
                                {project.tags.map((tag, index) => (
                                    <div
                                        className="p-1 text-white font-semibold flex items-center gap-2 text-xs"
                                        style={{
                                            backgroundColor: TAG[tag].color,
                                        }}
                                        key={index}
                                    >
                                        <img
                                            src={TAG[tag].icon}
                                            className="w-3 h-3 lg:w-5 lg:h-5"
                                            alt=""
                                        />
                                        {TAG[tag].name}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-8">
                                {project.demo && (
                                    <AnchorTag
                                        label="DEMO"
                                        href={project.demo}
                                    ></AnchorTag>
                                )}
                                <AnchorTag
                                    label="REPO"
                                    href={project.repository}
                                ></AnchorTag>
                            </div>
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
        </div>
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

export default ProjectItems;
