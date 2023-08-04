import Perks from '../ui/Perks';
import ImageCarousel from '../ui/Carousel';
import EditorsPickList from '../ui/EditorsPickList';
import WomenNikeSneakers from '../features/sneakers/WomenNikeSneakers';
import WomenAdidasSneakers from '../features/sneakers/WomenAdidasSneakers';
import WomenNewBalanceSneakers from '../features/sneakers/WomenNewBalanceSneakers';

function WomenSneakers() {
  return (
    <>
      <ImageCarousel />
      <Perks />
      <EditorsPickList />
      <WomenNikeSneakers />
      <WomenAdidasSneakers />
      <WomenNewBalanceSneakers />
    </>
  );
}

export default WomenSneakers;
