import HeaderText from '@/shared/HeaderText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';

type Props = {setSelectedPage: (value: SelectedPage) => void;
};

const Skills = ( {setSelectedPage}: Props) => {
  return (
    <section
        id="skills"
        className = "mx-auto min-h-full"
    >
        <motion.div>
            <motion.div className="md:my-5 md:w-3/5 p-20">
                <HeaderText>
                    My Skills
                </HeaderText>
                <p className="my-5 text-md">
                    Ranked by me :3
                </p>
            </motion.div>

            {/* Display Skills */}
        </motion.div>

    </section>
  )
}

export default Skills