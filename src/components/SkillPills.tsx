import { Button } from "./Button"

/* 
    COMPONENT: SkillPills 
    Description: functional component creates a component displaying a users skills 
    Arugment: takes in an array of skills 
*/ 

// SkillPill Properties 
type SkillPillsProps = {
    skills: string[]
}

export function SkillPills ( {skills} : SkillPillsProps) {
    return (
        <div className="gap-3">
            { skills.map( skill => (
                <Button 
                    key = {skill} 
                    variant="green"
                    className="py-1 px-3 m-1 whitespace-nowrap text-dark_green"
                    size="rounded">
                { skill }
                </Button>
            ))}
        </div>
    )
}