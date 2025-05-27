'use client';
import { useState, useEffect } from "react";

const banners = [
  "assets/banner_1.jpg",
  "assets/banner_2.jpg",
  "assets/banner_3.jpg",
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="relative w-full overflow-hidden h-48 sm:h-56 md:h-64 lg:h-120 px-2 sm:px-4 md:px-8">
    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img
        src={banners[currentIndex]}
        alt="Banner"
        className="w-full h-full object-cover transition-all duration-700"
      />
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>
       {/* Dots Indicator */}
       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
