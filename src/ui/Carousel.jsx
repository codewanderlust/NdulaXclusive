import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <>
      <div className="my-2 sm:my-4">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="h-auto w-full">
            <img src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/banner/1.png?t=2023-08-11T09%3A25%3A46.174Z" />
          </div>
          <div className="h-auto w-full">
            <img src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/banner/2.png?t=2023-08-11T09%3A26%3A02.674Z" />
          </div>
          <div className="h-auto w-full">
            <img src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/banner/3.png?t=2023-08-11T09%3A26%3A15.208Z" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
