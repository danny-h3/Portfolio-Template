import HeaderText from '@/shared/HeaderText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ( {setSelectedPage}: Props) => {
  return (
    <section
        id="contact"
        className = "mx-auto min-h-full"
    >
        <motion.div>
            <motion.div className="md:my-5 md:w-3/5 p-20 align-center">
                <HeaderText>
                    Coming up with design! 
                </HeaderText>
                <p className="my-5 text-md">
                    
                </p>
            </motion.div>

        </motion.div>

    </section>
  )
}

export default ContactMe