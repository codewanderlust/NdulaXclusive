import { useMenSneakers } from './useMenSneakers';

import Sneakers from './Sneakers';

export default function KidsNewBalanceSneaker() {
  return (
    <Sneakers
      title="Men's Adidas Sneakers"
      age_sex="male"
      brand="Adidas"
      useSneakersHook={useMenSneakers}
    />
  );
}
