// components/Carousel.js
import { useEffect, useState } from "react";
import GateShapeImage from "./GateShapeImage";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll after every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-full md:max-w-4xl mx-auto">
      <div className="overflow-hidden">
        {/* Slides */}
        <div
          className="hidden md:flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
            <div className="flex min-w-full">
                <GateShapeImage src={"/carousel1.jpg"} alt={"testing"} height={600} marginRight={"40px"}/>
                <GateShapeImage src={"/carousel2.jpeg"} alt={"testing"} height={600} marginRight={"40px"}/>
            </div>
            <div className="flex min-w-full">
                <GateShapeImage src={"/carousel3.jpeg"} alt={"testing"} height={600} marginRight={"40px"}/>
                <GateShapeImage src={"/carousel1.jpg"} alt={"testing"} height={600} marginRight={"40px"}/>
            </div>
        </div>
        <div className="flex md:hidden transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="flex min-w-full">
                <GateShapeImage src={"/carousel1.jpg"} alt={"testing"} height={500}/>
            </div>
            <div className="flex min-w-full">
                <GateShapeImage src={"/carousel2.jpeg"} alt={"testing"} height={500}/>
            </div>
            <div className="flex min-w-full">
                <GateShapeImage src={"/carousel3.jpeg"} alt={"testing"} height={500}/>
            </div>
        </div>
      </div>

      {/* Previous Button */}
      <div className="absolute bottom-[-70px] left-[30%] md:left-0 z-[10]">
        <button onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[40px] fill-white mr-[20px]"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className="w-[40px] fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
      </div>
    </div>
  );
};


export default Carousel;
