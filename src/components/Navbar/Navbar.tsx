import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// Import logo here:
import Logo from '@/assets/logo.png'; 
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage; 
    setSelectedPage: (value: SelectedPage) => void; 
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between";
    {/* Detecting if screen size is above medium using hook: */}
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    {/* When screen size is at the width or lower, a hamburger menu will appear */}
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    {/* Showing navigation bar if we are not on top of page */}
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    
    return <nav>
        {/* Outter div to hold outter layer of navbar */}
        <div 
            className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >   
            {/* Inner div to hold navbar components */}
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    
                    {/* Website Logo Left Side*/}
                    <img className={`${flexBetween} w-10 h-10`} src={Logo} alt="logo"/>
                    
                    {/* Right Side of Logo */}
                    {isAboveMediumScreens ? ( 
                        <>
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>

                                    {/* Links to parts of web-page */}
                                    <Link page = "Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                    
                                    <Link page = "About"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>

                                    <Link page = "Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                                            
                                    <Link page = "Experience"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                                    
                                    <Link page = "Skills"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
            
                                </div>

                                 {/* Far Right Side */}
                                <div className = {`${flexBetween} gap-8`}>
                                    <ActionButton setSelectedPage={setSelectedPage}>Contact Me</ActionButton>
                                </div>
                            </div>
                        </>
                    ): (
                        <button
                            className = "rounded-full bg-purple-400 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                        ) 
                    } 
                </div>
            </div>
        </div>

        {/* Mobile MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className = "fixed right-0 bottom-0 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                {/* Close Icon for Menu */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
                    </button>
                </div>

                {/* Menu items */}
                <div className={`m-[33%] flex flex-col gap-10 text-2xl`}>

                    {/* Links to parts of web-page */}
                    <Link page = "Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>

                    <Link page = "About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>

                    <Link page = "Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
                                            
                    <Link page = "Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
                                    
                    <Link page = "Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>

                    <Link page = "Contact"
                    selectedPage = {selectedPage}
                    setSelectedPage={setSelectedPage} /> 
                </div>
                
            </div>
        )}
    </nav>;

}; 

export default Navbar