import ContactForm from "./ContactForm";
import spiral from "../public/spiral.png";
import dashedLine from "../public/dashedLine.png";
import Image from "next/image";

const styles = {
    outerContainer: "flex justify-center w-full bg-[#FDF5F3]",
    container: "w-full max-w-[1200px] flex flex-col md:flex-row px-[20px] md:px-[0px] md:py-[150px]",
    heading: "font-cormorant font-light text-[40px] md:text-[60px] text-[#023A15]",
    strong: "font-cormorant font-light text-[40px] md:text-[60px] text-[#023A15] relative",
    spiral: "absolute top-0 left-0 h-full",
    dashedLine: "absolute bottom-[0px] left-[0px]",
    listContainer: "flex flex-col md:flex-row justify-between",
    listItems: "flex items-center text-[#567C49] mb-[15px]",
    para: "text-[#567C49] py-[30px]",
    left: "w-full md:w-[50%]",
    right: "w-full md:w-[50%] md:pl-[90px] mt-[100px] md:mt-[0px]",
    svg: 'fill-[#319E48] mr-[15px] w-[20px]'
}

function JoinMembership() {
  return (
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <div className={styles.left}>
                <ContactForm/>
            </div>
            <div className={styles.right}>
                <h1 className={styles.heading}>
                    Join
                    &nbsp;
                    <strong className={styles.strong}>
                        Membership
                        <Image src={spiral} alt="spiral vector design" className={styles.spiral}/>
                    </strong>
                </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies.</p>
                <div className={styles.listContainer}>
                    <ol>
                        <li className={styles.listItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Cnsectetur adipiscing elit.
                        </li>
                        <li className={styles.listItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Proin lobortis sed sapien.
                        </li>
                        <li className={styles.listItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Donec tincidunt, quam.
                        </li>
                    </ol>
                    <ol>
                    <li className={styles.listItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        dolor sem laoreet orci, quis.
                        </li>
                        <li className={styles.listItems}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Vestibulum ipsum tortor.
                        </li>
                    </ol>
                </div>
                <h1 className={styles.heading}>
                    Membership
                    &nbsp;
                    <strong className={styles.strong}>
                        Benefits
                        <Image src={dashedLine} alt="dashed line vector design" className={styles.dashedLine}/>
                    </strong>
                </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu.</p>
            </div>
        </div>
    </div>
  )
}

export default JoinMembership