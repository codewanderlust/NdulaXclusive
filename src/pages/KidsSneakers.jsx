import Perks from '../ui/Perks';
import ImageCarousel from '../ui/Carousel';
import EditorsPickList from '../ui/EditorsPickList';
import KidsAdidasSneakers from '../features/sneakers/KidsAdidasSneakers';
import KidsNikeSneakers from '../features/sneakers/KidsNikeSneakers';
import KidsNewBalanceSneakers from '../features/sneakers/KidsNewBalanceSneakers';

function KidsSneakers() {
  return (
    <>
      <ImageCarousel />
      <Perks />
      <EditorsPickList />
      <KidsNikeSneakers />
      <KidsAdidasSneakers />
      <KidsNewBalanceSneakers />
    </>
  );
}

export default KidsSneakers;
