import { COLOR } from "../../constants/Color";
import Header from "./Header";
import useAbout from "./UseAbout";
import Name from "./Name";
import SlideButton from "./SlideButton";
import Detail from "./Details";
const About = () => {
    const { headerRef, isInView, contentRef, slideButtonRef, isSlide } =
        useAbout();

    const buttonHandle = () => {
        if (contentRef.current) {
            if (isSlide) {
                // Scroll to the left (start) smoothly
                contentRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                // Scroll to the right (end) smoothly
                contentRef.current.scrollTo({
                    left: contentRef.current.scrollWidth,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        // Border
        <section className="relative w-full h-(--section) portrait:h-fit p-6 md:px-14 isolate">
            <div
                ref={contentRef}
                style={{ scrollbarWidth: "none" }}
                className="relative w-full h-full overflow-scroll flex flex-col gap-8 justify-center  overflow-x-scroll overflow-y-scroll"
            >
                <article className="min-w-full h-full flex portrait:flex-col gap-4 md:gap-14">
                    <div
                        className="relative w-2/5 h-full flex items-center"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${COLOR.ABOUT}, ${COLOR.ABOUT})`,
                            backgroundSize: "75% 100%",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Header ref={headerRef} isInView={isInView} />
                    </div>

                    <div className="w-3/5 portrait:w-full h-full font-semibold flex justify-center items-center portrait:justify-start">
                        <Name />
                    </div>
                </article>
                <article className="absolute portrait:static left-[min(130%,calc(100%+150px))] w-7/10 portrait:w-full h-full flex items-center">
                    <Detail />
                </article>

                <SlideButton
                    isSlide={isSlide}
                    buttonHandle={buttonHandle}
                    slideButtonRef={slideButtonRef}
                />
            </div>

            <div className=""></div>
        </section>
    );
};

export default About;
