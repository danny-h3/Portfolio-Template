import { Experience } from "../components/Experience"


/*
    COMPONENT: ExperiencePage
    Description: functional component that creates an 'experience page' containing 'experience' components
    Structure: 
        [ Experiences are always displayed stacked ]
        - TITLE
        - Experience 1
        - Experience 2 
        - etc . . . 
*/

// Following are lists of skills gained from each experience 
// Create as many lists as you want for each relavant experience you want to add 
let example1: string[] = [
    'Vue', 'React', 'TypeScript', 'HTML', 'CSS'
]

let example2: string[] = [
    'Python', 'MongoDB', 'FastAPI', 'MySQL'
]

export function ExperiencePage() {
    return (
        <div className="m-10" id="experience">
            {/* Page Title  */}
            <p className="font-roboto text-white text-6xl md:text-8xl font-bold uppercase pb-5">
                Experience 
            </p>

            {/* Experience Component 1*/}
            <Experience 
                role="FrontEnd Developer" 
                company="Company" 
                startDate="Start Date"
                endDate="End Date"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                skills={example1}

            />

            {/* Experience Component 2 */}
            <Experience 
                role="BackEnd Developer" 
                company="Company" 
                startDate="Start Date"
                endDate="End Date"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                skills={example2} 
            /> 

            {/* Feel free to add more relevant experiences */}
     
        </div>
    )
}