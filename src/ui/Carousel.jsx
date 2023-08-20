import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <>
      {/* <div className="mx-auto lg:w-1/2 xl:w-1/3"> */}
      <div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          responsive={[
            {
              breakpoint: 640, // Small screens
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Medium screens
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024, // Large screens
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ]}
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
