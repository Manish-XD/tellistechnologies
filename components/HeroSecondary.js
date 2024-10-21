import Image from "next/image";
import GateShapeImage from "./GateShapeImage";

import darkSemicircle from "../public/darkSemicircle.png";
import lightSemicircle from "../public/lightSemicircle.png";
import spiral from "../public/spiral.png";

const styles = {
    heroSecondary: "w-full md:flex-row flex-col flex bg-[#FDF5F3] md:py-[188px] md:px-[100px] px-[20px] py-[100px]",
    heroSecLeft: "w-full md:w-[30%] relative",
    heroSecMiddle: "w-full md:w-[40%] flex flex-col items-center text-center px-[45px] pt-[66px]",
    heroSecMiddleSpan: "text-[#023A15] font-bold",
    heroSecMiddleHeading: "font-cormorant text-[#023A15] text-[35px] md:text-[50px] font-light mt-[30px]",
    heroSecMiddleStrong: "font-cormorant text-[#023A15] text-[35px] md:text-[50px] font-light relative w-[15rem]",
    heroSecMiddleStrongSpiral: "absolute bottom-0 left-0",
    heroSecMiddlePara: "mt-[30px] text-[#567C49]",
    heroSecRight: "w-full md:w-[30%] relative mt-[66px] md:mt-[0px]"
}

function HeroSecondary() 
{
    return (
        <div className={styles.heroSecondary}>
            <div className={styles.heroSecLeft}>
                <Image src={lightSemicircle} alt="semi circle vector design" className="absolute z-[10] rotate-[340deg] md:top-[-100px] md:left-[-80px] w-[160px] md:w-[290px]"/>
                <GateShapeImage src={"/heroSec1.jpg"} alt={"A container with red paste"} height={400}/>
            </div>
            <div className={styles.heroSecMiddle}>
              <span className={styles.heroSecMiddleSpan}>Alive Every moment</span>
              <h1 className={styles.heroSecMiddleHeading}>Beauty is all about</h1>
              <strong className={styles.heroSecMiddleStrong}>
                you.
                <Image src={spiral} alt="spiral design" className={styles.heroSecMiddleStrongSpiral}/>
              </strong>
              <p className={styles.heroSecMiddlePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>
            </div>
            <div className={styles.heroSecRight}>
              <Image src={darkSemicircle} alt="semi circle vector design" className="absolute z-[10] md:z-[10] rotate-[160deg] bottom-[-50px] md:bottom-[-100px] right-0 md:right-[-80px] w-[160px] md:w-[290px]"/>
              <GateShapeImage src={"/heroSec2.jpg"} alt={"A container with red paste"} height={400}/>
            </div>
          </div>
    );
}

export default HeroSecondary;