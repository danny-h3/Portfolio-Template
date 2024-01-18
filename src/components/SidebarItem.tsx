import { ElementType } from "react"
import { Button, buttonStyles } from "@/components/Button"

/* 
    COMPONENT: SideBarItem 
    Description: functional component creates a component used in the 'SideBar'. Two types of components are
                 generated based on argument.  
    Arugments: Takes in a required ICON and 2 other OPTIONAL properties listed in 'SideBarItemProps'. 
               NOTE that errors will arrive if 2 of the optional properties are given! If url is given a link
               is generated. If info is given a button is generated that copies the info to the users clipboard
               when button is clicked. 
    Structure: 
        - Icon + Link | INFO TO COPY 
*/ 

// SidebarItem properties 
type SideBarItemProps = {
    Icon: ElementType,
    url?: string,   // Optional URL property 
    info?: string   // Optional info property
}

// Simple function to copygiven text top clipboard 
function copyToClipBoard(info: string) {
    navigator.clipboard.writeText(info);
    alert(info + "copied to clipboard"); 
}   

export function SideBarItem( {Icon, url, info}: SideBarItemProps ) 
{
    // If url is given - generate link with Icon 
    if (url) {
        return ( 
            <a href={url} className={buttonStyles( { variant: "faded", size:"icon" }) }>
                <Icon className="w-6 h-6"></Icon>
            </a>
            )
    }
    
    // If info is given - generate button with icon 
    if(info) {
        return ( 
            <Button
                onClick={() => copyToClipBoard(info)} 
                variant={"faded"} size={"icon"}
            > 
                <Icon className="w-6 h-6"></Icon>
            </Button>
        )
    }
    
}
