import { COLOR } from "../../constants/Color";
import { TAG } from "../../constants/Tags";
import ColoredText from "../Common/ColoredText";

const Detail = () => {
    return (
        <div className="px-14 h-fit md:pe-4 lg:pe-14 py-8 portrait:p-0">
            <div className="border-y-2 flex flex-col gap-3 py-4 lg:py-14 portrait:py-8 text-sm leading-relaxed portrait:leading-snug lg:text-lg">
                <h1 className="text-3xl font-bold">
                    Hello
                    <ColoredText label=" !," color={COLOR.ABOUT} />
                </h1>
                <p className="portrait:text-[0.9rem] whitespace-pre-line indent-8 text-justify leading-relaxed tracking-wide">
                    A Computer Science graduate with 6 months of internship
                    experience as Backend Web Developer. I am currently
                    improving my skils in web development and have strong desire
                    to learn more in IT and exploring new fields. I'm looking
                    for my first full-time professional experience in the IT
                    industry and other fields. My portfolio reflects a
                    commitment to continuous learning and showcases the
                    practical projects I have completed, highlighting my ability
                    to bring creative web solutions to life!
                </p>

                <p className=" tracking-wide">
                    Here are the tech stacks I have used in various projects:
                </p>

                <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                    {Object.entries(TAG).map(([key, tag]) => (
                        <li
                            className="p-1 text-white font-semibold flex items-center gap-2"
                            style={{ backgroundColor: tag.color }}
                            key={key}
                        >
                            <img src={tag.icon} className="w-5 h-5" alt="" />
                            {tag.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Detail;
