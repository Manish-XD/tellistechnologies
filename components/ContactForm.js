import Image from "next/image";
import Button from "./Button";

import lightSemicircle from "../public/lightSemicircle.png";

const styles = {
    container: "bg-[#023A15] text-white py-[40px] px-[20px] md:py-[80px] md:px-[64px] relative mt-[70px] md:mt-[0px]",
    inputContainer: "flex flex-col md:flex-row mb-[25px] w-full",
    input: "bg-transparent py-[15px] px-[30px] w-full border-2 border-white outline-none rounded-full",
    form: "flex flex-col items-center",
    lightSemicircle: "absolute w-[160px] md:w-[290px]"
};

function ContactForm() 
{
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <input type="text" className={`${styles.input} md:mr-[20px] mb-[25px] md:mb-[0px]`} name="FirstName" placeholder="First Name" required/>
                    <input type="text" className={styles.input} name="FirstName" placeholder="Last Name" required/>
                </div>
                <div className={styles.inputContainer}>
                    <input type="email" className={`${styles.input} md:mr-[20px] mb-[25px] md:mb-[0px]`} name="FirstName" placeholder="Email" required/>
                    <input type="number" className={styles.input} name="FirstName" placeholder="Phone" required/>
                </div>
                <textarea className={`${styles.input} rounded-[30px] h-max-[10rem] mb-[20px]`} rows={4} draggable="false" placeholder="Message"/>
                <Button title={"JOIN MEMBERSHIP"} ctn/>
            </form>
            <Image src={lightSemicircle} alt="light semicircle vector design" className={`${styles.lightSemicircle} md:top-[-80px] md:left-[-100px] top-[-50px] left-[-50px] rotate-[330deg]`}/>
            <Image src={lightSemicircle} alt="light semicircle vector design" className={`${styles.lightSemicircle} md:bottom-[-80px] md:right-[-100px] bottom-[-50px] right-[-10px] rotate-[180deg] md:rotate-[150deg]`}/>
        </div>
    );
}

export default ContactForm;