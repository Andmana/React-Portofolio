import Content from "../../components/Content";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import TopNav from "../../components/TopNav";
import { HomePageProvider } from "../../contexts/HomePageContext";
import { ThemeProvider } from "../../contexts/ThemeContext";

const HomePage = () => {
    return (
        <ThemeProvider>
            <HomePageProvider>
                <div className="font-display text-black dark:text-[#F1F5F9] bg-white dark:bg-[#242424] overflow-x-hidden">
                    <TopNav />
                    <SideMenu />

                    <Content />
                    <Footer />
                </div>
            </HomePageProvider>
        </ThemeProvider>
    );
};
export default HomePage;
