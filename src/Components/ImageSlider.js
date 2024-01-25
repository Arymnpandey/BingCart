// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically change the slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

 

  return (
    <div className="relative w-[98%] mx-auto mt-2  h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
