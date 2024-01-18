import { Button } from "./Button"
import { Link } from "lucide-react"


/* 
    COMPONENT: Project 
    Description: functional component that displays a users project details  
    Arguments: Requires all properties listed in 'ProjectProps'
    Structure: 
        - Project Name + Link
        - Description 
*/ 

// Project Properties 
type ProjectProps = {
    name: string,
    description: string, 
    link: string
}

export function Project(
    {   
        name,
        description, 
        link
    }: ProjectProps 
) {
    return (
        <div className="gap-2 p-2 m-2 font-roboto rounded-lg transition transform ease-in-out hover:scale-110 hover:bg-slate-800/75">
            <div className="flex flex-row">
                {/* Project Name */}
                <p className="text-base text-2xl text-blue-300 mt-1"> { name } </p> 
                {/* Link to Project */}
                <Button variant="transparent" className="text-green-400">
                    <a href={link}> <Link /> </a> 
                </Button> 
            </div>
            {/* Description  */}
            <p className="text-base text-md text-light_slate"> { description } </p>
        </div>
    )
}


