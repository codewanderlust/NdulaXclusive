import Sneakers from './Sneakers';
import { useMenSneakers } from './useMenSneakers';

export default function MensNikeSneakers() {
  return (
    <Sneakers
      title="Men's Nike Sneakers"
      age_sex="male"
      brand="Nike"
      useSneakersHook={useMenSneakers}
    />
  );
}
