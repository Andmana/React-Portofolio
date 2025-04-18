import { COLOR } from "../../constants/Color";
import ColoredText from "../Common/ColoredText";

const Detail = () => {
    return (
        <div className="px-14 py-8 portrait:p-0">
            <div className="border-y-2 flex flex-col gap-3 py-14 portrait:py-8">
                <h1 className="text-3xl font-bold">
                    Hello
                    <ColoredText label=" !," color={COLOR.ABOUT} />
                </h1>
                <p className=" text-base lg:text-lg portrait:text-[0.9rem] whitespace-pre-line indent-8 text-justify leading-relaxed portrait:leading-snug tracking-wide">
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

                <p className="text-base md:text-lg leading-relaxed portrait:leading-snug tracking-wide">
                    Here are the tech stacks I have used in various projects:
                </p>
            </div>
        </div>
    );
};

export default Detail;
