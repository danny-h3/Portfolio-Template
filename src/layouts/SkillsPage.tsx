import { Skill } from "@/components/Skills"

/* 
    COMPONENT: SkillsPage 
    Description: functional component that creates a 'SkillsPage' component layouy that contains 'Skill'
                 components
    Structure:
        - Title 
        [On smaller screens skills are stacked, on bigger they are displayed in a grid like structure]
        - Skill 1
        - Skill 2
        - etc 
*/ 

export function SkillsPage() {
    return (
        <div className="flex flex-col m-10" id="skills">
            {/* Title */}
            <p className="font-roboto text-white text-5xl md:text-8xl font-bold uppercase pb-5"> 
                My Skills
            </p>

            {/* Skills Displayed as grid  */}
            {/* Grid with gap of 1rem, repeat to make as many coloums necessary and minmax to define dimensions of content */}
            <div className="grid gap-4 p-2 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
                <Skill name="Python" proficiency="advanced" color="bg-green-400"></Skill>
                <Skill name="Java" proficiency="intermediate" color="bg-green-400"></Skill>
                <Skill name="HTML" proficiency="intermediate" color="bg-green-400"></Skill>
                <Skill name="CSS" proficiency="intermediate" color="bg-green-400"></Skill>
                <Skill name="Vue" proficiency="beginner" color="bg-green-400"></Skill>
                <Skill name="React" proficiency="beginner" color="bg-green-400"></Skill>
                <Skill name="Typescript" proficiency="beginner" color="bg-green-400"></Skill>
                <Skill name="MySQL" proficiency="beginner" color="bg-green-400"></Skill>
                <Skill name="FastAPI" proficiency="beginner" color="bg-green-400"></Skill>
            </div>
        </div>
    )
}