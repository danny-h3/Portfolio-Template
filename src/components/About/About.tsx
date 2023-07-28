import { SelectedPage } from "@/shared/types"
import catOnPc from "@/assets/mochj_cat_chilling.gif"
import brooklyn from "@/assets/brooklyn_pixel_art.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void; 
};


const About = ( {setSelectedPage}: Props) => {
  return (
    <section
        id="about"
        className="mx-auto min-h-full p-10 bg-gray-20"
    >
        <div className="items-center ">
            <div className="relative">

                {/* Greetings */}
                <div className="px-16 py-20 ">
                    <p className="text-8xl font-bold">
                        Nice to meet you!
                    </p>
                </div>

                {/* More information about yourself (Totally not from CHAT GPT :P) */}
                <div className="relative">
                    <div className="px-20 float-left w-3/5">
                        <p className="py-10">
   
    &nbsp;
    Hey there, I'm Mochj Cat, hailing from the vibrant streets of Brooklyn, New York. 
    
    Ever since I was a young feline, I've been captivated by technology, diving headfirst into the digital world.
   
    Admittedly, my eagerness got the best of me on two occasions, leading me to accidentally break two computers while experimenting with suspicious software online.

    <br /> <br /> &nbsp;
    
    But as they say, every cloud has a silver lining. Those mishaps sparked a passion for coding and software development in me. 
    
    I embraced the challenges, diving into coding languages and unraveling software mysteries.

    Now, with a wealth of knowledge and skills, I'm ready to make a real impact in the tech industry. 
    
    <br /> <br /> &nbsp;
    I'm eager to join a reputable company and put my coding prowess to good use.

    As the sun rises over Brooklyn, I stand tall, fueled by resilience and an unyielding thirst for knowledge. 
    
    I'm living proof that curiosity and determination can shape a bright and promising future in the world of technology.
                        </p>

                    <AnchorLink
                        className="text-sm font-bold text-primary-600 underline hover:text-secondary-500"
                        onClick = {() => setSelectedPage(SelectedPage.Projects)}    
                        href={`#${SelectedPage.Projects}`}
                    >
                                
                        <p> Check Out What I'm Doing </p>
                    </AnchorLink>
                    
                    </div>

                    {/* Images */ }
                    <div className="float-left px-20">
                        <img className="max-w-lg" src={catOnPc} alt="mochj cat chilling" />
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
};


export default About