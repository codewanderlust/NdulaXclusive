import Sneakers from './Sneakers';
import { useWomenSneakers } from './useWomenSneakers';

export default function WomenAdidasSneakers() {
  return (
    <Sneakers
      title="Women's Adidas Sneakers"
      age_sex="female"
      brand="Adidas"
      useSneakersHook={useWomenSneakers}
    />
  );
}
