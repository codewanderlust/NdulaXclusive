import { useKidsSneakers } from './useKidsSneakers';

import Sneakers from './Sneakers';

export default function KidsNikeSneakers() {
  return (
    <Sneakers
      title="Kid's Nike Sneakers"
      age_sex="kids"
      brand="Nike"
      useSneakersHook={useKidsSneakers}
    />
  );
}
