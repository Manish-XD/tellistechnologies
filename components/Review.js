import Image from "next/image";
import { useEffect, useState } from "react";

import reviewImage from "../public/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg";
import dashedLine from "../public/dashedLine.png";
import lightSemicircle from "../public/lightSemicircle.png";

const styles = {
    container: "flex flex-col md:flex-row relative",
    left: "w-full md:w-[50%] flex items-center md:pl-[150px] md:pr-[100px] px-[20px] mt-[50px] md:mt-[0px] pb-[100px]",
    right: "w-full md:w-[50%]",
    heading: "text-white text-[40px] md:text-[60px] font-light font-cormorant leading-[1.3em] mb-[60px] text-center md:text-left",
    strong: "text-white text-[40px] md:text-[60px] font-light font-cormorant relative",
    dashedLine: "absolute bottom-0 left-0",
    lightSemicircle: "absolute left-[40%] bottom-[-2px] w-[290px] hidden",
    content: "min-w-[80%]"
};

function Review({ images = [1, 2, 3, 4, 5] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll after every 1 second
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [images]);

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
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.content}>
                <h1 className={styles.heading}>
                    Review From Our
                    &nbsp;
                    <strong className={styles.strong}>
                        Customer
                        <Image src={dashedLine} alt="dashed line" className={styles.dashedLine}/>
                    </strong>
                </h1>
                <div className="relative w-full max-w-full mx-auto">
                    <div className="overflow-hidden">
                        {/* Slides */}
                        <div
                            className="flex transition-transform duration-700"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <div className="flex flex-col min-w-full text-white mt-[20px] md:mt-[40px]">
                                <p className="mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                                <span className="font-cormorant text-[30px]">Leony Ann</span>
                                <span>Customer</span>
                            </div>
                            <div className="flex flex-col min-w-full text-white mt-[20px] md:mt-[40px]">
                                <p className="mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                                <span className="font-cormorant text-[30px]">Nikky Kimso</span>
                                <span>Customer</span>
                            </div>
                            <div className="flex flex-col min-w-full text-white mt-[20px] md:mt-[40px]">
                                <p className="mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                                <span className="font-cormorant text-[30px]">Jane Smitch</span>
                                <span>Customer</span>
                            </div>
                            <div className="flex flex-col min-w-full text-white mt-[20px] md:mt-[40px]">
                                <p className="mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                                <span className="font-cormorant text-[30px]">Kim Park</span>
                                <span>Customer</span>
                            </div>
                            <div className="flex flex-col min-w-full text-white mt-[20px] md:mt-[40px]">
                                <p className="mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.”</p>
                                <span className="font-cormorant text-[30px]">Liu Chucu</span>
                                <span>Customer</span>
                            </div>
                        </div>
                    </div>

                    {/* Previous Button */}
                    <div className="absolute bottom-[-70px] left-[30%] md:bottom-0 md:right-0 z-[10]">
                        <button onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[40px] fill-white mr-[20px]"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                        </button>
                        <button onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[40px] fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={reviewImage} alt="lifting-anti-wrinkle-collagen-patches-under-eyes" />
            </div>
            <Image src={lightSemicircle} alt="light semicircle vector design" className={styles.lightSemicircle}/>
        </div>
    );
}

export default Review;