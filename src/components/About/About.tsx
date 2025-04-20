import { COLOR } from "../../constants/Color";
import Header from "./Header";
import Name from "./Name";
import SlideButton from "./SlideButton";
import useAbout from "./UseAbout";

const About = () => {
    const {
        isPortrait,
        sectionRef,
        isSectionInView,
        darkMode,
        headerRef,
        offSet,
    } = useAbout();
    return (
        <section
            ref={sectionRef}
            className="relative w-full h-(--section) portrait:h-fit px-6 md:px-14 isolate"
        >
            {/* Scroll landscape screen */}
            <div
                className={
                    isPortrait
                        ? "relative w-full h-fit flex flex-col gap-8"
                        : "relative w-full h-full overflow-x-scroll flex"
                }
                style={{ scrollbarWidth: "none" }}
            >
                {/* Content */}
                <article
                    style={
                        isPortrait
                            ? {}
                            : {
                                  backgroundImage: `linear-gradient( ${COLOR.ABOUT}, ${COLOR.ABOUT})`,
                                  // backgroundColor: COLOR.ABOUT,
                                  backgroundSize: darkMode
                                      ? "29% 100%"
                                      : "71% 100%",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: darkMode
                                      ? 0
                                      : "right 30%",
                              }
                    }
                    className="relative w-full h-full flex portrait:flex-col"
                >
                    <div
                        className="absolute portrait:static flex portrait:flex-col items-center portrait:items-start gap-4 h-full "
                        style={{
                            left: `calc(29% - ${offSet}px)`,
                            width: isPortrait
                                ? "100%"
                                : `calc(100% - ${offSet}px - 90px)`,
                        }}
                    >
                        {/* SECTIOON TITLE */}
                        <div
                            className="text-header portrait:text-xl portrait:flex"
                            ref={headerRef}
                        >
                            <Header isSectionInView={isSectionInView} />
                        </div>
                        {/* NAME */}
                        <div className="flex-1 flex justify-center">
                            <Name isSectionInView={isSectionInView} />
                        </div>
                    </div>
                </article>
                <article className="absolute top-0 left-full portrait:static h-full w-7/10 portrait:w-full bg-black "></article>

                {/* SLide button for landscape screen */}
                {!isPortrait && (
                    <SlideButton isSectionInView={isSectionInView} />
                )}
            </div>
        </section>
    );
};

export default About;
