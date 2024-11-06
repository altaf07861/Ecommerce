import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';

const HomeSectionCarousel = () => {

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className='relative px-4'>
      <div>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
        />
      </div>
    </div>
  )
}

export default HomeSectionCarousel