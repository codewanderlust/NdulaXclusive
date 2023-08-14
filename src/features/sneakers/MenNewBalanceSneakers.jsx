import Sneakers from './Sneakers';
import { useMenSneakers } from './useMenSneakers';

export default function MensNikeSneakers() {
  return (
    <Sneakers
      title="Men's New Balance Sneakers"
      age_sex="male"
      brand="New Balance"
      useSneakersHook={useMenSneakers}
    />
  );
}
