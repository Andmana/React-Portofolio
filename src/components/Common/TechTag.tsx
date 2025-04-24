import { TAG } from "../../constants/Tags";

const TechTag = ({ tag }: { tag: string }) => {
    return (
        <div
            className="p-2 flex items-center gap-2 text-xs"
            style={{
                backgroundColor: TAG[tag].color,
            }}
        >
            <img
                src={TAG[tag].icon}
                className="w-3 lg:w-4 portrait:w-3"
                alt=""
            />
            <span className="text-[8px] lg:text-[11px] portrait:text-[10px] text-white font-bold tracking-[0.15em]">
                {TAG[tag].name}
            </span>
        </div>
    );
};

export default TechTag;
