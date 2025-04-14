import Footer from "./components/Footer";
import Main from "./components/Main";
import TopNav from "./components/TopNav";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <>
            <ThemeProvider>
                <div className="bg-white dark:bg-[#242424] min-h-screen text-black dark:text-white">
                    <TopNav />
                    <Main />
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
