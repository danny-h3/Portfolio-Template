import HeaderText from '@/shared/HeaderText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';



type Props = {
    setSelectedPage: (value: SelectedPage) => void; 
};

const Experience = ({setSelectedPage}: Props ) => {
  return (
    <section
        id="experience"
        className="mx-auto min-h-full py-20 bg-gray-20"
    >
        <motion.div className="px-20"> 
            <motion.div className="md:my-5 md:w-3/5" >
                {/* Header Text for experience section */ }
                <HeaderText>
                    Here are some places that I've worked at!
                </HeaderText>

                {/* Add places here */}
                
            </motion.div>
           
        </motion.div>

    </section>
  )
}

export default Experience