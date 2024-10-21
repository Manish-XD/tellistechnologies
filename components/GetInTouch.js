import Image from "next/image";
import ContactForm from "./ContactForm";

import dashedLine from "../public/dashedLine.png";

const styles = {
    outerContainer: "flex flex-col items-center bg-[#FDF5F3]",
    container: "w-full max-w-[1200px] flex flex-col md:flex-row px-[20px] md:px-[0px] py-[50px] md:py-[150px] items-center",
    left: "w-full md:w-[50%] md:mr-[80px]",
    right: "w-full md:w-[50%]",
    heading: "font-cormorant text-[#023A15] text-[60px] mb-[30px]",
    strong: "relative font-cormorant font-light",
    dashedLine: "absolute bottom-[0px] left-[0px]",
    para: "text-center md:text-left text-[#567C49]",
    contactContainer: "flex flex-col md:flex-row mt-[50px] justify-between",
    subHeading: "font-cormorant text-[#023A15] text-[40px] mb-[30px]",
    listItems: "flex mb-[25px] text-[#567C49]",
    svg: "fill-[#023A15] w-[20px] mr-[30px]"
};

function GetInTouch() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>
                        Get In
                        &nbsp;
                        <strrong className={styles.strong}>
                            Touch
                            <Image src={dashedLine} alt="spiral vector design" className={styles.dashedLine}/>
                        </strrong>
                    </h1>
                    <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies.</p>
                    <div className={styles.contactContainer}>
                        <div>
                            <h1 className={styles.subHeading}>Texas</h1>
                            <ol>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.svg}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    140 Hope Street, Plano
                                </li>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.svg}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    +1 234 567 890
                                </li>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.svg}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    anyemail@mail.com
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h1 className={styles.subHeading}>Washington</h1>
                            <ol>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.svg}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                    3071 conifer Drive, Seattle
                                </li>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.svg}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    +1 234 567 890
                                </li>
                                <li className={styles.listItems}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.svg}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    anyemail@mail.com
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <ContactForm />
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444108.84989812225!2d76.76357532713901!3d28.644287357275072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1729527066376!5m2!1sen!2sin" style={{width: "100%", height: "500px"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default GetInTouch;