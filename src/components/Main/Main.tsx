import About from "../About";
import Home from "../Home";

const Main = () => {
    return (
        <main className="py-14 flex flex-col gap-14 isolate">
            <Home />
            <About />
            <section className="h-screen" />
        </main>
    );
};

export default Main;
