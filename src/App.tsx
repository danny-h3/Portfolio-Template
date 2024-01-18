import { PageHeader } from "./layouts/PageHeader"
import { SideBar } from "./layouts/SideBar"
import { HomePage } from "./layouts/HomePage"
import { ExperiencePage } from "./layouts/ExperiencePage"
import { ProjectsPage } from "./layouts/ProjectsPage"
import { SkillsPage } from "./layouts/SkillsPage"


export default function App() {
    return (
        <div className="flex flex-col w-full h-full bg-dark_slate ">
            {/* Page Header/ Navigation Bar [ Stuck on top of page ] */}
            <PageHeader />
    
            {/* Side Bar + Scrollable Information Page */}
            <div className="flex h-full overflow-hidden">
                {/* Side bar w/ social media links */}
                <SideBar />

                {/* Scrollable information page */}
                <div className="flex-grow h-full p-4 overflow-y-auto custom-scrollbar">
                    <HomePage />
                    <ExperiencePage />
                    <ProjectsPage />
                    <SkillsPage />
                </div>
            </div>
        </div>
       
    )
}
