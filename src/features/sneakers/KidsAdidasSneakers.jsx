import { useKidsSneakers } from './useKidsSneakers';

import Sneakers from './Sneakers';

export default function KidsAdidasSneakers() {
  return (
    <Sneakers
      title="Kid's Adidas Sneakers"
      age_sex="kids"
      brand="Adidas"
      useSneakersHook={useKidsSneakers}
    />
  );
}
