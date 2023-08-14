import Sneakers from './Sneakers';
import { useWomenSneakers } from './useWomenSneakers';

export default function WomenNikeSneakers() {
  return (
    <Sneakers
      title="Women's Nike Sneakers"
      age_sex="female"
      brand="Nike"
      useSneakersHook={useWomenSneakers}
    />
  );
}
