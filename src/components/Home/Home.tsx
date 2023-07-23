import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;

};

const Home = ( {setSelectedPage }: Props) => {
  return (
    <div>Home</div>
  )
}

export default Home