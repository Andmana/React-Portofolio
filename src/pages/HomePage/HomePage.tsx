import Content from "../../components/Content";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import TopNav from "../../components/TopNav";
import { ContentProvider } from "../../contexts/ContentContext";
import { HomePageProvider } from "../../contexts/HomePageContext";
import { ThemeProvider } from "../../contexts/ThemeContext";

const HomePage = () => {
    return (
        <ThemeProvider>
            <ContentProvider>
                <HomePageProvider>
                    <div className="font-display text-[#27272A] dark:text-[#F1F5F9] bg-[#F1F5F9] dark:bg-[#242424] overflow-x-hidden">
                        <TopNav />
                        <SideMenu />

                        <Content />
                        <Footer />
                    </div>
                </HomePageProvider>
            </ContentProvider>
        </ThemeProvider>
    );
};
export default HomePage;
