import Sneakers from './Sneakers';
import { useWomenSneakers } from './useWomenSneakers';

export default function WomenNewBalanceSneakers() {
  return (
    <Sneakers
      title="Women's New Balance Sneakers"
      age_sex="female"
      brand="New Balance"
      useSneakersHook={useWomenSneakers}
    />
  );
}
