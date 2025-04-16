import About from "../About";
import Home from "../Home";
import Project from "../Project";

const Main = () => {
    return (
        <main className="py-14 flex flex-col gap-14 isolate">
            <Home />
            <About />
            <Project />
        </main>
    );
};

export default Main;
