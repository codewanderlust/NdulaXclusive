import Perks from '../ui/Perks';
import ImageCarousel from '../ui/Carousel';
import EditorsPickList from '../ui/EditorsPickList';
import MenNikeSneakers from '../features/sneakers/MenNikeSneakers';
import MenAdidasSneakers from '../features/sneakers/MenAdidasSneakers';
import MenNewBalanceSneaker from '../features/sneakers/MenNewBalanceSneakers';

function Sneaker() {
  return (
    <>
      <ImageCarousel />
      <Perks />
      <EditorsPickList />
      <MenNikeSneakers />
      <MenAdidasSneakers />
      <MenNewBalanceSneaker />
    
    </>
  );
}

export default Sneaker;
