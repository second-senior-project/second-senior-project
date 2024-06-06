"use client"
import { useState } from 'react';


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "https://slidechef.net/wp-content/uploads/2023/09/Iphone-15-Presentation-Template.jpg",
    "https://static.wixstatic.com/media/1c92ab_a0c05a895d1045e89bc3b81e71d31a7d~mv2.jpg",
    "https://mspoweruser.com/wp-content/uploads/2020/06/9CA72E16-7D11-4966-AD64-1946F889BA6F.jpeg",
    "https://asset1.ruecdn.com/images/content/events/780019/780019_banner_tablet_hires.jpg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-40 overflow-hidden rounded-lg md:h-96 ">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            data-carousel-item={index === activeIndex ? 'active' : undefined}
          >
            <img src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-300'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
