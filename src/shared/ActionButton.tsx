import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage ) => void;
}


const ActionButton = ( {children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className = "rounded-md bg-secondary-500 px-10 py-2 hover:bg-orange-500 hover:text-white transition duration-500"   
        onClick={() => setSelectedPage(SelectedPage.Contact)}  
        href = {`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton