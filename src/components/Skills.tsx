
/* 
    COMPONENT: Skill 
    Description: functional component that creates a component to display a users skill 
    Arguments: Requires all properties listed in 'SkillProps'
*/ 

// Defines a type that can contain one of the following three proficiencies
type Proficiency = 'beginner' | 'intermediate' | 'advanced'; 

// Skill properties 
type SkillProps = {
    name: string, 
    proficiency: Proficiency,
    color: string
}

export function Skill( {name, proficiency, color}: SkillProps) {
    let progress = '';
    // Depending on the given proficiency generate a bar of different sizes 
    switch (proficiency) {
        case 'beginner':
            progress = 'w-1/3';
            break;
        case 'intermediate':
            progress = 'w-2/3';
            break;
        case 'advanced':
            progress = 'w-full';
            break;
        default: 
        break; 
    }

    return (
        <div className="flex flex-col text-white transition ease-in-out hover:-translate-y-1 hover:scale-105">
            <p className="font-nunito text-md">{name}</p>
            <div className="w-full bg-slate-100 rounded">
                <div className={`${progress} ${color} rounded text-xs text-center`}> 
                    {proficiency}
                </div>
            </div>
        </div>
    )
}