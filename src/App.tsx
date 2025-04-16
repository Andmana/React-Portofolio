import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <>
            <ThemeProvider>
                <div className="font-display bg-white dark:bg-black min-h-screen text-black dark:text-white">
                    <TopNav />
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
