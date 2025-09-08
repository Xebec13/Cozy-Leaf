import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  // Go to next slide
  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Go to previous slide
  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-play every 8s
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl">
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === slide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30" />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-2 rounded-full text-shocking hover:text-thulian transition cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-2 rounded-full text-shocking hover:text-thulian transition cursor-pointer"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            role="button"
            aria-selected={i === slide}
            onClick={() => setSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === slide ? "bg-seashell" : "bg-shocking"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;