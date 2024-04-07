import Achievements from "./components/Achievements";
import Details from "./components/Details";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Heading from "./components/Hero"
import Navbar from "./components/Navbar";

const Layout=()=>{
    return(
        <div className="flex-col bg-dark-green align-center w-full min-h-full justify-center">
        <div className="flex-col bg-pale-green w-full min-h-full max-w-5xl mx-auto">
        <Navbar/>
        <Heading/>
        <Details/>
        <Achievements/>
        <DownloadApp/>
        <Footer/>
        </div>
        </div>
    )
}
export default Layout;