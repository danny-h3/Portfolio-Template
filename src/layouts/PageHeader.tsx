import { Menu } from "lucide-react"
import logo from "../assets/logo.png"
import { Button } from "../components/Button"
import { useState } from "react"

/* 
    COMPONENT: PageHeader
    Description: functional component that creates a navigation bar at the top of the web-page. It's
                 responsive by design.
    Structure:
        [ Left Side ]
        - Logo 
        [ Right Side ]
        - Home  
        - Experience
        - Projects
        - Skills 

        Note: There's also a hamburger menu icon that is hidden on big screens but visible on small ones.
        Tapping the icon opens a dropdown that consists of tappable links to different areas of the web-page. 

*/ 
export function PageHeader() {

    // Following is used to open and close hamburger menu on small screens 
    const [isOpen, setIsOpen] = useState(false);  
    const toggleDropDown = () => setIsOpen(!isOpen); 

    return (
        // Custom Navigation Bar 
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 z-10 bg-dark_slate sticky top-0">
            <div className="flex m-3 flex-shrink-0 flex-grow">
                
                {/* Logo Area   */}
                <Button variant="faded" size="icon">
                    {/* Inserting logo here with height of 6 */}
                    <a href="/">
                        <img src={logo} className="h-6" />
                    </a>
                </Button>

           </div>
           <div className="flex flex-shrink-0 md:gap-2 ">    
                {/* Hamburger Menu [Shown only when screen is small]*/}
                <Button onClick={toggleDropDown} variant="faded" className="sm:hidden">
                    <Menu />
                    {/* If button is clicked render the div */}
                    {   
                        isOpen && (
                            <div className="absolute right-0 w-52 py-2 mt-2 bg-white rounded shadow-xl">
                            <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
                            <a href="#experience" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Experience</a>
                            <a href="#projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Projects</a>
                            <a href="#skills" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Skills</a>
                        </div>
                        )
                    }
                </Button>

                {/* Home Button */}
                <Button variant="faded" size="default" className="hidden sm:block ">
                    {/* Link to Home Here  */}
                    <a href="#home">Home</a>
                </Button>

                {/* Experience Button */}
                <Button variant="faded" size="default" className="hidden sm:block ">
                    {/* Link to Experience Page Here  */}
                    <a href="#experience">Experience</a>
                </Button>

                {/* Projects Button */}
                <Button variant="faded" size="default" className="hidden sm:block ">
                    {/* Link to Projects Here */}
                    <a href="#projects">Projects</a>
                </Button>

                {/* Skills Button */}
                <Button variant="faded" size="default" className="hidden sm:block ">
                    {/* Link to Skills Here */}
                    <a href="#skills">Skills</a>
                </Button>
            </div>
        </div>

    )
}