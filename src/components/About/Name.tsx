import { COLOR } from "../../constants/Color";
import ColoredText from "../Common/ColoredText";

const Name = () => {
    return (
        <div className="flex flex-col gap-4 w-fit">
            <h6 className="text-2xl font-bold w-fit">
                Hi <ColoredText label="," color={COLOR.ABOUT} flexible={true} />{" "}
                I AM
            </h6>
            <p className="text-3xl w-fit md:text-4xl portrait:text-2xl lg:text-5xl font-black">
                ANDREAS P. PUTRA S.
            </p>
            <p className="text-xl portrait:text-lg">Full Stack Developer</p>
        </div>
    );
};

export default Name;
