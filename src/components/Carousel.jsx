import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  // Next + Prev
  const nextSlide = useCallback(() => {
    setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-play
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
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/30" />
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-shocking p-2 rounded-full hover:text-thulian transition cursor-pointer z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-shocking p-2 rounded-full hover:text-thulian transition cursor-pointer z-10"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
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