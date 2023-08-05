import { Carousel } from 'react-carousel-minimal';

function ImageCarousel() {
  const data = [
    {
      image:
        'https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/anh-tuan-to-SWFNDe0TvM0-unsplash.jpg?t=2023-08-04T18%3A27%3A26.621Z',
      caption: 'Grab a pair today!',
    },
    {
      image:
        'https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg',
      caption: 'Grab a pair today!',
    },
    {
      image:
        'https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/brandon-kahler-I_FHxvZYT-8-unsplash.jpg?t=2023-08-04T18%3A38%3A35.853Z',
      caption: 'Grab a pair today!',
    },
    {
      image:
        'https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/justin-chrn-qtM9bJ-piVU-unsplash.jpg?t=2023-08-04T18%3A39%3A26.437Z',
      caption: 'Grab a pair today!',
    },
    {
      image:
        'https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/karsten-winegeart-j7DepkurgNc-unsplash.jpg?t=2023-08-04T18%3A39%3A49.347Z',
      caption: 'Grab a pair today!',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
