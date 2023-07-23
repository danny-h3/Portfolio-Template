import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import profilePicture from '@/assets/crying_bmochj_cat.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;

};

const Home = ( {setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

    return (
        <section
            id = "home"
            className="gap-16, bg-gray-20 py-10 md:h-full md:pd-0"    
        >
            {/* Profile Picture and Main Header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headers*/}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 md:before:content-cstext before:-left-20 before:z-[-1] ">
                                 <p className="text-8xl font-bold"> Hello! </p>
                            </div>
                            <div className="text-4xl py-5">
                                <p> I'm Mochj Cat </p>
                            </div>  
                            
                        </div>

                        <p className="mt-4text-md md:text-start">
                            I'm a undergraduate computer science student at RPI!
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            About Me
                        </ActionButton>

                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick = {() => setSelectedPage(SelectedPage.Contact)}    
                            href={`#${SelectedPage.Contact}`}
                        >
                            <p> Reach Out</p>
                        </AnchorLink>

                    </div>
                </div>

                {/* PFP */}
                <div className="flex basis-3/5 py-5 justify-center md:z-10 md:ml-40 md:justify-items-end">
                    <img src={profilePicture} alt="profile-picture" />
                </div>
            </div>

            {/* Personal Links */}

            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6 ">
                        <div className="flex w-3/5 items-end gap-8">
                            <p>Github</p>
                            <p>LinkedIn</p>
                            
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home