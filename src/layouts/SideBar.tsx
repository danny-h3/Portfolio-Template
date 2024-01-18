import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { SideBarItem } from '../components/SideBarItem'

/* 
    COMPONENT: SideBar
    Description: functional component that creates a 'SideBar' component layout that contains 'SideBarItem' 
                 components
    Structure: 
        [ Following is centered in the side bar, side bar appears on the left hand side]
        - SideBarItem 1
        - SideBarItem 2
        - etc 
*/ 

export function SideBar() {
    return  (
    <div className="flex flex-col w-1/12 h-full place-content-center items-center">
        {/* Modify the following based on links or information you deem important */}
        <SideBarItem Icon={Github} url="https://www.github.com"  />
        <SideBarItem Icon={Linkedin} url="https://www.linkedin.com"  />
        <SideBarItem Icon={Mail} info="person@email.com"  />
        <SideBarItem Icon={Phone} info="111-111-1111" />
    </div>
    )

}

