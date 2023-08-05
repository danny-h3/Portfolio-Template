import { SelectedPage, ProjectType} from "@/shared/types";
import { CommandLineIcon } from "@heroicons/react/24/solid"; 
import { motion } from "framer-motion"; 
import HeaderText from "@/shared/HeaderText";
import Project from "./Project";

const project: Array <ProjectType> = [
    {
        icon: <CommandLineIcon className = "h-6 w-6"/>,
        title: "Random Number generator",
        description: "Insert any range and the program will generate a random number!"
    },
    {
        icon: <CommandLineIcon className = "h-6 w-6"/>,
        title: "Password generator",
        description: "Insert any range and the program will generate a random secure password!"
    },
    {
        icon: <CommandLineIcon className = "h-6 w-6"/>,
        title: "Name generator",
        description: "Insert some letters and generate a random name for your anything!"
    },

]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void; 
};

const Projects = ( {setSelectedPage}: Props) => {
  return (
    <section 
        id="projects"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        > 
            <motion.div className="md:my-5 md:w-3/5">

                {/* Header Text */}
               <HeaderText>
                    Here's some of my projects!
               </HeaderText>
               <p className="my-5 text-md">
                    After many long night I've created the following programs. 
               </p>
            </motion.div>

            {/* Projects Display */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {project.map((project: ProjectType) => (
                    <Project
                        key={project.title}
                        icon={project.icon}
                        title={project.title}
                        description={project.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Projects