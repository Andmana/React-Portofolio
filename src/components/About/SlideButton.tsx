import iconArrow from "../../assets/icon-arrow-2.svg";

interface SlideButtonProps {
    showDetail: boolean;
    handleShowDetail: () => void;
}

const SlideButton = ({ showDetail, handleShowDetail }: SlideButtonProps) => {
    return (
        <div className=" w-15 h-full flex flex-col justify-center items-center cursor-pointer transform -translate-x-2/4 portrait:hidden">
            <button
                className="text-xl font-bold rotate-90 animate-bounce"
                onClick={handleShowDetail}
            >
                {showDetail ? (
                    <>
                        HIDE
                        <img
                            src={iconArrow}
                            className="rotate-180 dark:filter-(--icon-filter)"
                        />
                    </>
                ) : (
                    <>
                        <img
                            src={iconArrow}
                            className="dark:filter-(--icon-filter)"
                        />
                        MORE
                    </>
                )}
            </button>
        </div>
    );
};

export default SlideButton;
