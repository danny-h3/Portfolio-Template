import { Button } from "@/components/Button"
import PDF from "../assets/sample.pdf" // Swap with your own pdf  

/* 
    COMPONENT: HomePage
    Description: functional component that creates homepage. Contains a brief introduction and a button
                 that opens a resume in a seperate tab 
    Structure: 
        - NAME 
        - INTRODUCTION 
        - WHAT YOU DO
        - RESUME BUTTON 

*/ 
export function HomePage() {
    return (

        <div className="m-10" id="home">
            {/* Name */}
            <p className="font-roboto text-white text-8xl font-bold uppercase pb-5"> 
                Name 
            </p>
            
            <div className="p-2">
                {/* Introduction */}
                <p className="font-roboto text-light_slate text-6xl pb-5">
                    Student at University 
                </p>
                
                {/* What you do */}
                <p className="font-roboto text-light_slate text-4xl pb-5">
                    Upcoming Software Engineering looking for opportunities 
                </p>

                {/* Button for resume */}
                <Button className="text-2xl md:text-3xl" variant="gradient" >
                    <a href={PDF} target='_blank' rel='noopener noreferrer'> 
                        My Resume 
                    </a> 
                </Button>
            </div>
            
        </div>

        
    )
}