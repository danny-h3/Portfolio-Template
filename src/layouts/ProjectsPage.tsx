import { Project } from "../components/Project"

/* 
    COMPONENT: ProjectsPage
    Description: functional component that creates a ProjectsPage' component layout that contains 'Project' 
                 components
    Structure:
        - Title 
         [ Following appears stacked on small screens but appear in a grid on bigger screens ]
        - Project 1
        - Project 2
        - etc . . . 
*/ 

export function ProjectsPage() {
    return (
        <div className="m-10" id="projects">
            {/* Title  */}
            <p className="text-5xl md:text-8xl text-white uppercase font-bold font-roboto">
                Projects 
            </p>

            {/* Display projects in a grid like structure */}
            <div className="flex grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">

                {/* Project Component 1 */}
                <Project 
                    name="Project 1" 
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit \
                    anim id est laborum." 
                    link="something"
                /> 
                
                {/* Project Component 2 */}
                <Project 
                    name="Project 2" 
                    description=  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit \
                    anim id est laborum."
                    link="something"
                />  

                {/* Project Component 3  */}
                <Project 
                    name="Project 3" 
                    description=  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit \
                    anim id est laborum."
                    link="something"
                /> 

            </div>
        </div>

    )   
} 