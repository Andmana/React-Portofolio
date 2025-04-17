import Home from "../Home";
import SideMenuButton from "./SideMenuButton";

const Content = () => {
    return (
        <main className="relative w-full py-14 flex flex-col gap-14">
            <SideMenuButton />
            <Home />
            <section className="h-screen"></section>
            <section className="h-screen"></section>
        </main>
    );
};

export default Content;
