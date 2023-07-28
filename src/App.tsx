import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home 
    );

    {/* Here the app is detecting to see if the user is on top of the screen: */}
    const [istTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home); 
            }

            if(window.scrollY !== 0) {
                setIsTopOfPage(false); 
            }
        }
        
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll); 
    }, []);

    return <div className="app bg-gray-20">
        <Navbar
            isTopOfPage={istTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage} />
            
        <Home setSelectedPage={setSelectedPage}/>
    
        <About setSelectedPage={setSelectedPage} />
    </div> ;
}

export default App; 