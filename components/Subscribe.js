import Image from "next/image";
import { useState } from "react";

import spiral from "../public/spiral.png";
import lightSemicircle from "../public/lightSemicircle.png";
import Button from "./Button";

const styles = {
    subscribeOuter: "flex justify-center bg-[#3d634b] relative",
    subscribe: "flex flex-col items-center pt-[109px] pb-[126px] max-w-[1200px] w-[1200px] px-[20px] md:px-[0px]",
    subscribeHeading: "text-[35px] md:text-[60px] text-white font-cormorant text-center font-light leading-[1.3em]",
    strong: "font-light font-cormorant relative",
    spiral: "absolute top-[20px] left-0 w-[100%]",
    subscribeForm: "w-full md:w-[70%] border-2 flex p-[8px] rounded-full mt-[65px]",
    inputField: "w-full bg-transparent pl-[35px] outline-none text-lg text-white",
    lightSemicircle: "absolute top-[-100px] left-[-100px] rotate-[340deg] hidden md:block"
}

function Subscribe() {
    const [email, setEmail] = useState('');
  return (
    <div className={styles.subscribeOuter}>
        <div className={styles.subscribe}>
            <h1 className={styles.subscribeHeading}>
                Get the latest
                <strong className={styles.strong}>
                    &nbsp;update&nbsp;
                    <Image src={spiral} alt="spiral vector design" className={styles.spiral}/>
                </strong>
                about our products and services
            </h1>
            <form className={`${styles.subscribeForm} flex md:hidden`}>
                <input name="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} className={styles.inputField}/>
            </form>
            <div className="block md:hidden mt-[20px]">
                <Button ctn title={"SUBSCRIBE"}/>
            </div>
            <form className={`${styles.subscribeForm} hidden md:flex`}>
                <input name="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} className={styles.inputField}/>
                <Button ctn title={"SUBSCRIBE"}/>
            </form>
        </div>
        <Image src={lightSemicircle} alt="lightSemicircle" className={styles.lightSemicircle}/>
    </div>
  )
}

export default Subscribe