import Content from "../../components/Content";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import TopNav from "../../components/TopNav";
import { ThemeProvider } from "../../contexts/ThemeContext";

const HomePage = () => {
    return (
        <ThemeProvider>
            <div className="font-display text-black dark:text-white bg-white dark:bg-[#242424]">
                <TopNav />
                <SideMenu />

                <Content />
                <Footer />
            </div>
        </ThemeProvider>
    );
};
export default HomePage;
