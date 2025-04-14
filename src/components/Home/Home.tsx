const Home = () => {
    const mainColor = "#F87171";
    return (
        <section
            style={{
                minHeight: "calc(100vh - 112px)",
            }}
            className="relative flex justify-center items-stretch px-4 md:px-14 isolate"
            id="Home"
        >
            <div className="flex-1/2" style={{ backgroundColor: mainColor }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-3/4 -translate-y-full animate-bounce">
                    <div className="transform -rotate-90 font-semibold text-xl">
                        ← Scroll
                    </div>
                </div>
            </div>
            <div className="flex-1/2"></div>

            <div className="self-center absolute h-full text-[150px] leading-none font-black flex flex-col justify-center">
                <div>
                    <div>HE</div>
                </div>
                <div>
                    <div>
                        LLO
                        <span style={{ color: mainColor }}>.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
