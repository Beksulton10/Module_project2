import React, { useState } from 'react';
import img1 from '../assets/slider_1.jpg'
import img2 from '../assets/slider_2.jpg'
import img3 from '../assets/slider_3.jpg'


const images = [
  img1, img2, img3
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-auto h-[100vh]   pt-[147px] w-[100%]">
      <div className="relative h-[510px] w-[100%]">
        <div className='left-[390px] mx-auto  absolute pt-[100px]'>
          <h6 className='uppercase font-medium mb-[29px]'>Spring / Summer Collection 2017</h6>
          <h1 className='text-[72px] font-normal leading-none'>Get up to 30% Off <br /> New Arrivals</h1>
          <button className='bg-[#fe4c50] text-white rounded-[3px] py-[10px] px-[25px] uppercase text-sm font-medium mt-[32px] hover:bg-red-400'>shop now</button>
        </div>
        <img
          src={images[activeIndex]}
          alt={`carousel image ${activeIndex}`}
          className="relateive h-full  object-cover w-full"
        />
      </div>
      <div className="absolute top-[40%]  transform -translate-y-1/2 flex justify-between  w-full px-4">
        <button
          onClick={handlePrev}
          className=" rounded-full p-2 shadow-lg"
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
         </svg>
        </button>
        <button
          onClick={handleNext}
          className=" rounded-full p-2 shadow-lg"
        >
           <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        </button>
      </div>
      <div className="absolute bottom-[320px] left-1/2  -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-1 w-5 rounded-full ${
              activeIndex === i ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
