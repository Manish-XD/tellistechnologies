import Image from "next/image";

import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import CarouselComponent from "@/components/CarouselComponent";
import spiral from "../public/spiral.png";
import lightSemicircle from "../public/lightSemicircle.png";
import darkSemicircle from "../public/darkSemicircle.png";
import GateShapeImage from "@/components/GateShapeImage";
import OurProduct from "@/components/OurProduct";
import SpecialService from "@/components/SpecialService";
import OurStory from "@/components/OurStory";
import Review from "@/components/Review";
import Expert from "@/components/Expert";
import Available from "@/components/Available";
import Blog from "@/components/Blog";
import HeroSecondary from "@/components/HeroSecondary";

const styles ={
  container: "bg-primaryGreen",
  heroOuter: "flex justify-center mt-[150px] pb-[100px]",
  hero: "md:flex-row flex-col flex max-w-[1200px] w-[1200px] md:px-0 px-[20px]",
  heroLeft: "w-full md:w-[40%] mt-[50px]",
  heroHeading: "text-white text-[50px] md:text-[75px] font-light leading-[1.2em] italic",
  heroSpiral: "absolute top-[15px] right-[-25px]",
  strongText: "font-cormorant text-white relative",
  heroPara: "text-white mt-[55px] mb-[76px]",
  heroRight: "w-full md:w-[60%] md:translate-x-[100px] relative mt-[30px]",
  heroSemicircle: "hidden md:block absolute rotate-180 z-[-10]",
};

const images = [
  "../public/logo.png",
  "../public/logo.png",
  "../public/logo.png",
];

export default function Home() 
{
  return (
      <div className={styles.container}>
        <Header/>
        <div className={styles.heroOuter}>
          <div className={styles.hero}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroHeading}>
                <strong className={styles.strongText}>
                  A whole
                <Image src={spiral} alt="spiral design" className={styles.heroSpiral}/>
                </strong> 
                &nbsp;
                new world, 
                &nbsp;
                <strong className={styles.strongText}>
                  a whole
                </strong> 
                &nbsp;
                new look
              </h1>
              <p className={styles.heroPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <Button title={"DISCOVER MORE"} ctn/>
            </div>
            <div className={styles.heroRight}>
              <CarouselComponent images={images}/>
              <Image src={lightSemicircle} alt="semi circle vector design" className={styles.heroSemicircle} style={{bottom: "-70px", left: "-150px"}}/>
              <Image src={lightSemicircle} alt="semi circle vector design" className={styles.heroSemicircle} style={{bottom: "-200px", right: "-60px"}}/>
            </div>
          </div>
        </div>
          <HeroSecondary/>
          <OurProduct/>
          <SpecialService/>
          <OurStory/>
          <Review/>
          <Expert/>
          <Available/>
          <Blog/>
        <Subscribe/>
        <Footer/>
      </div>
  );
}
