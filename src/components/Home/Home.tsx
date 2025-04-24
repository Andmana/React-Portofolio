import { COLOR } from "../../constants/Color";
import AnimatedHeader from "../Common/AnimatedHeader";
import ColoredText from "../Common/ColoredText";
import BounceSign from "./BounceSign";
import useHome from "./UseHome";

const Home = () => {
    const { ref, isInView, centerRef } = useHome();

    return (
        <section
            ref={ref}
            className="relative px-6 md:px-16 min-h-(--section) w-full portrait:min-h-(--section-mobile) flex"
        >
            <div className="relative flex-1 flex justify-center items-center">
                <div
                    style={{ backgroundColor: COLOR.HOME }}
                    className="absolute top-0 left-0 h-full w-1/2"
                >
                    {/* Bounce sign */}
                    <BounceSign isInView={isInView} />
                </div>

                <div className="absolute text-header flex flex-col">
                    <AnimatedHeader isInView={isInView}>HE</AnimatedHeader>
                    <AnimatedHeader isInView={isInView}>
                        LLO
                        <ColoredText label="." color={COLOR.HOME} />
                    </AnimatedHeader>
                </div>
            </div>

            <div
                ref={centerRef}
                className="absolute top-1/2 left-1/2 w-2 h-2 opacity-0 -z-10 transform -translate-1/2"
            ></div>
        </section>
    );
};

export default Home;
