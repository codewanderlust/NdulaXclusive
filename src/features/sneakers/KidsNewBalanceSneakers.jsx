import { useKidsSneakers } from './useKidsSneakers';

import Sneakers from './Sneakers';

export default function KidsNewBalanceSneaker() {
  return (
    <Sneakers
      title="Kid's New Balance Sneakers"
      age_sex="kids"
      brand="New Balance"
      useSneakersHook={useKidsSneakers}
    />
  );
}
