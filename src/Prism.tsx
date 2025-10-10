import React, { useState, useEffect } from 'react';

const images = [
  "https://img.freepik.com/free-photo/panorama-shot-canal-lake-pukaki-twisel-surrounded-with-mountains_181624-45343.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/beautiful-mountain-landscape_181624-31969.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/snowy-mountains-blue-sky_181624-27789.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/lake-with-beautiful-mountain-view_181624-46439.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/beautiful-nature-landscape_181624-33497.jpg?semt=ais_hybrid&w=740&q=80"
];

const Prism = () => {
  const [current, setCurrent] = useState(0);

  // auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="bg-black h-screen w-screen items-center justify-center ">
      hiii
      <div className="relative w-full h-96 max-h-3xl overflow-hidden  shadow-lg">
        <img
          src={images[current]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-700 ease-linear"
        />

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prism;
