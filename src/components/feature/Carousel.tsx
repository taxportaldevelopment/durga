import { useState, useEffect } from "react";
import carousel1 from "../../assets/banner/1.png";
import carousel2 from "../../assets/banner/2.png";
import carousel3 from "../../assets/banner/3.png";
const images = [
   carousel1,carousel2,carousel3
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative" >
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden bg-black">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-3 sm:p-4 rounded-full z-20 text-2xl font-bold"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-3 sm:p-4 rounded-full z-20 text-2xl font-bold"
      >
        ›
      </button>

      {/* Dots / Indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-500 scale-125" : "bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
      {/* company name and details */}
      <div className="absolute top-52 left-1/2 -translate-x-1/2 text-center text-white z-20">
        {/* <h2 className=" font-bold text-6xl">Company Name</h2>
        <p className="text-lg py-2">Company details go here</p> */}
      </div>
    </div>
  );
};

export default Carousel;
