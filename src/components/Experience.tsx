
import { SkillPills } from "./SkillPills"

/* 
    COMPONENT: Experience 
    Description: functional component that displays a users experience details  
    Arguments: Experience requires all the properties listed in 'ExperienceProps' below
*/ 

// Types of properties accepted by 'Experience' component 
type ExperienceProps = {
    role: string, 
    company: string, 
    startDate: string,
    endDate: string, 
    description: string,   
    skills: string[] 
}

// Following component is returned when called 
export function Experience( 
    {
        role, 
        company,
        startDate, 
        endDate, 
        description,
        skills,
    } : ExperienceProps
) {
    return (
        <div className="flex flex-col gap-2 font-roboto p-2 rounded-lg transition transform ease-in-out hover:scale-105 hover:bg-slate-800/75">

            {/* Top Part, Role + Company */}
            <p className="text-4xl sm:text-5xl text-white">{role} @ {company}</p>
          
            {/* Duration at Company */}
            <p className="italic text-slate-400">{startDate} - {endDate}</p>
           
            {/* Job Description */}
            <p className="text-xl text-white">{description}</p>

            {/* Skills Developed */}
            <div className="pb-5 ">
                <SkillPills skills={skills}></SkillPills>
            </div>
        </div>
    )
}