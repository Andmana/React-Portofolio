import { COLOR } from "../../constants/Color";

const Name = () => {
    return (
        <div className="flex w-5/6 flex-col gap-4">
            <h6 className="text-2xl font-bold w-fit">
                Hi <span style={{ color: COLOR.ABOUT }}>,</span> I AM
            </h6>
            <p className="text-3xl md:text-4xl portrait:text-2xl lg:text-5xl font-black">
                ANDREAS P. PUTRA S.
            </p>
            <p className="text-xl portrait:text-lg">Full Stack Developer</p>
        </div>
    );
};

export default Name;
