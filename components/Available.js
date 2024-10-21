import Image from "next/image";
import { useEffect, useState } from "react";

import spiral from "../public/spiral.png";
import company1 from "../public/company1.png";
import company2 from "../public/company2.png";
import company3 from "../public/company3.png";
import company4 from "../public/company4.png";
import company5 from "../public/company5.png";
import company6 from "../public/company6.png";
import company7 from "../public/company7.png";

const styles = {
    heading: "font-light text-[40px] md:text-[60px] font-cormorant text-white text-center",
    strong: "font-light text-[40px] md:text-[60px] font-cormorant text-white relative",
    spiral: "absolute bottom-0 left-0",
    outerContainer: "flex justify-center",
    container: "max-w-[1200px] w-full px-[20px] md:px-[0px] pt-[100px] pb-[200px]",
    headingContainer: "flex justify-center mb-[50px]",
    sliderImage: "w-full md:w-[25%] opacity-60 transition-all duration-300 hover:opacity-100 cursor-pointer",
};

function Available({images = [1,2,3,4]}) {
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
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>
                    Our Product Also
                    &nbsp;
                    <strong className={styles.strong}>
                        Available
                        <Image src={spiral} alt="spiral vector design" className={styles.spiral}/>
                    </strong>
                    &nbsp;
                    At
                </h1>
            </div>
            <div className="relative w-full max-w-full mx-auto md:hidden block">
      <div className="overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            <div className="flex min-w-full">
                <Image src={company1} alt="company logo" className={styles.sliderImage}/>
            </div>
            <div className="flex min-w-full">
                <Image src={company2} alt="company logo" className={styles.sliderImage}/>
            </div>
            <div className="flex min-w-full">
                <Image src={company3} alt="company logo" className={styles.sliderImage}/>
            </div>
            <div className="flex min-w-full">
                <Image src={company4} alt="company logo" className={styles.sliderImage}/>
            </div>
        </div>
      </div>

      {/* Previous Button */}
      <div className="absolute bottom-[-70px] left-[35%] md:left-[45%] z-[10]">
        <button onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[40px] fill-white mr-[20px]"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className="w-[40px] fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
      </div>
    </div>
            <div className="relative w-full max-w-full mx-auto hidden md:block">
      <div className="overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
            <div className="flex min-w-full">
                <Image src={company1} alt="company logo" className={styles.sliderImage}/>
                <Image src={company2} alt="company logo" className={styles.sliderImage}/>
                <Image src={company3} alt="company logo" className={styles.sliderImage}/>
                <Image src={company4} alt="company logo" className={styles.sliderImage}/>
            </div>
            <div className="flex min-w-full">
                <Image src={company5} alt="company logo" className={styles.sliderImage}/>
                <Image src={company6} alt="company logo" className={styles.sliderImage}/>
                <Image src={company7} alt="company logo" className={styles.sliderImage}/>
            </div>
        </div>
      </div>

      {/* Previous Button */}
      <div className="absolute bottom-[-70px] left-[45%] z-[10]">
        <button onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[40px] fill-white mr-[20px]"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        <button onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"className="w-[40px] fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Available