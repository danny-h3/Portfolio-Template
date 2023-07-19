import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// Import logo here; 

type Props = {}

const Navbar = (props: Props) => {

    const flexBetween = "flex items-center justify-between";
  
    return <nav>
        {/* Outter div to hold outter layer of navbar */}
        <div 
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >   
            {/* Inner div to hold navbar components */}
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Website Logo Left Side*/}
                    <p> LOGO </p>

                    {/* Right Side */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>About</p>
                            <p>Projects</p>
                            <p>Experience</p>
                            <p>Skills</p>
    
                        </div>
                    </div>
                    {/* Far Right Side */}
                    <div className={`${flexBetween} gap-8`}>
                        <button>Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}; 

export default Navbar