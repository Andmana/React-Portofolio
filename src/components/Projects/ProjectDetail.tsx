import { MouseEvent } from "react";
import { IProject } from "../../constants/ProjectList";
import { TAG } from "../../constants/Tags";
import iconLink from "../../assets/icons/icon-link.svg";
import TechTag from "../Common/TechTag";

const AnchorTag = ({ label, href }: { label: string; href: string }) => {
    const clickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.open(href, "_blank");
    };

    return (
        <a
            href={href}
            onClick={clickHandle}
            className="flex items-center gap-1 pointer-events-auto cursor-pointer"
        >
            <span className="text-sm lg:text-lg portrait:text-sm font-semibold ">
                {label}
            </span>
            <img
                src={iconLink}
                alt=""
                className="w-5 portrait:w-4 dark:filter-(--whitening)"
            />
        </a>
    );
};

const ProjectDetail = ({ project }: { project: IProject }) => {
    return (
        <>
            {/* Title */}
            <h2 className="text-lg portrait:text-xl landscape:lg:text-4xl font-bold">
                {project.name}
            </h2>

            {/* Description */}
            <p className=" text-sm lg:text-lg portrait:text-sm font-semibold text-center ">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center">
                {project.tags.map((tag, index) => (
                    <TechTag tag={tag} key={index} />
                ))}
            </div>

            {/* Hrefs */}
            <div className="flex flex-wrap gap-8">
                {project.demo && (
                    <AnchorTag label="Demo" href={project.demo}></AnchorTag>
                )}
                <AnchorTag label="Repo" href={project.repository}></AnchorTag>
            </div>
        </>
    );
};

export default ProjectDetail;
