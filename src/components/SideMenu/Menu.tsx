import SocialMedia from "./SocialMedia";
import ThemeButton from "../ThemeButton";
import { COLOR } from "../../constants/Color";
import { useContent } from "../../contexts/ContentContext";
import ColoredText from "../Common/ColoredText";
import SectionAnchor from "./SectionAnchor";

const Menu = () => {
    const { activeContent } = useContent();

    return (
        <>
            <div className="not-portrait:hidden">
                <ThemeButton />
            </div>

            <h1 className="text-4xl lg:text-6xl font-black">
                <ColoredText color={COLOR[activeContent]} label="M" />
                ENU
            </h1>

            {/* Section */}
            <div className="flex flex-col gap-3 text-2xl lg:text-4xl font-bold portrait:items-end">
                <SectionAnchor label="HOME" />
                <SectionAnchor label="ABOUT" />
                <SectionAnchor label="PROJECTS" />
            </div>

            <div className="flex flex-col gap-4 text-lg portrait:text-base portrait:items-end font-light">
                <h2 className="text-2xl lg:text-3xl font-bold">
                    <ColoredText color={COLOR[activeContent]} label="C" />
                    ONTACT
                </h2>
                <div className="text-left portrait:text-right portrait:text-sm font-medium">
                    <p className="">ANDREAS P. PUTRA S.</p>
                    <p>andreas.pputras@gmail.com</p>
                </div>
                <SocialMedia />
            </div>
        </>
    );
};

export default Menu;
