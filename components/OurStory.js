import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import GateShapeImage from "./GateShapeImage";
import Button from "./Button";
import lightSemicircle from "../public/lightSemicircle.png";
import darkSemicircle from "../public/darkSemicircle.png";
import dashedLine from "../public/dashedLine.png";


function OurStory({about}) {
    const styles = {
      outerContainer: "flex justify-center bg-[#FDF5F3] pb-[100px]",
      container: `max-w-[1200px] w-full flex ${about?'flex-col-reverse md:flex-row-reverse':'flex-col-reverse md:flex-row'} px-[20px] md:px-[0px]`,
      left: "w-full md:w-[50%] md:pr-[70px] relative mt-[50px] md:mt-[0px]",
      darkSemicircle: "absolute  w-[160px] md:w-[290px] top-0 md:left-[-50px] z-[10] rotate-[320deg]",
      right: `w-full md:w-[50%] ${about?'flex flex-col items-end':''}`,
      darkContainer: `mt-[100px] mb-[90px] bg-[#023A15] p-[30px] md:p-[80px] relative ${about?'md:translate-x-[50px]':'md:translate-x-[-150px]'} md:block flex flex-col items-center`,
      heading: "text-white font-light font-cormorant text-[40px] md:text-[60px]",
      strong: "font-light font-cormorant relative",
      dashedLine: "absolute w-full bottom-0 left-0",
      para: "mt-[30px] mb-[60px] text-white text-center md:text-left",
      lightSemicircle: "absolute bottom-[-50px] right-0 md:right-[-100px] rotate-[160deg] md:rotate-[140deg] w-[160px] md:w-[290px]",
      counterContainer: `flex flex-col items-center md:flex-row justify-between mt-[50px] w-full md:w-[60%] text-black ${about?'mr-[100px]':''}`,
      counter: "text-[60px] font-cormorant",
      counterContent: "text-[#319E48]",
      counterContainerLeft: "mb-[50px] md:mb-[0px]"
    };
  const [startCounting, setStartCounting] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const componentRef = useRef(null);

  // Increment Counter Function
  const incrementCounter = (start, end, setValue, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Scroll into view detection using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Start counting when the component comes into view
  useEffect(() => {
    if (startCounting) {
      incrementCounter(0, 955, setCount1, 2000); // 955+ count animation
      incrementCounter(0, 240, setCount2, 2000); // 240+ count animation
    }
  }, [startCounting]);

  return (
    <div className={styles.outerContainer} ref={componentRef}>
      {!about && <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src={darkSemicircle}
            alt="dark semicircle vector design"
            className={styles.darkSemicircle}
          />
          <GateShapeImage
            src={"/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2.jpg"}
            alt="woman-taking-a-bath-massage-soap-treat-yourself"
            height={900}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.darkContainer}>
            <h1 className={styles.heading}>
              Our
              &nbsp;
              <strong className={styles.strong}>
                Story
                <Image src={dashedLine} alt="dashed line" className={styles.dashedLine} />
              </strong>
            </h1>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat
              posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum
              lorem rhoncus eu. Donec justo urna, mattis non maximus.
            </p>
            <Button title={"READ MORE"} ctn />
            <Image
              src={lightSemicircle}
              alt="light semicircle vector design"
              className={styles.lightSemicircle}
            />
          </div>
          <div className={styles.counterContainer}>
            <div className={styles.counterContainerLeft}>
              <h1 className={styles.counter}>{count1}+</h1>
              <span className={styles.counterContent}>Happy Customers</span>
            </div>
            <div className={styles.counterContainerRight}>
              <h1 className={styles.counter}>{count2}+</h1>
              <span className={styles.counterContent}>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>}
      {about && <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src={darkSemicircle}
            alt="dark semicircle vector design"
            className={styles.darkSemicircle}
          />
          <GateShapeImage
            src={"/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2.jpg"}
            alt="woman-taking-a-bath-massage-soap-treat-yourself"
            height={900}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.darkContainer}>
            <h1 className={styles.heading}>
              Our
              &nbsp;
              <strong className={styles.strong}>
                Story
                <Image src={dashedLine} alt="dashed line" className={styles.dashedLine} />
              </strong>
            </h1>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat
              posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum
              lorem rhoncus eu. Donec justo urna, mattis non maximus.
            </p>
            <Button title={"READ MORE"} ctn />
            <Image
              src={lightSemicircle}
              alt="light semicircle vector design"
              className={styles.lightSemicircle}
            />
          </div>
          <div className={styles.counterContainer}>
            <div className={styles.counterContainerLeft}>
              <h1 className={styles.counter}>{count1}+</h1>
              <span className={styles.counterContent}>Happy Customers</span>
            </div>
            <div className={styles.counterContainerRight}>
              <h1 className={styles.counter}>{count2}+</h1>
              <span className={styles.counterContent}>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default OurStory;
