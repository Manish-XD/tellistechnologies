import Image from "next/image"
import Button from "./Button"

import expert1 from "../public/brown-D9SR4HS-1536x768.jpg";
import expert2 from "../public/woman-holding-grapefruit-HV8L8KM-1536x768.jpg";
import spiral from "../public/spiral.png";


function Expert({services}) {
    const styles = {
        outerContainer: "flex justify-center bg-[#FDF5F3]",
        container: `max-w-[1200px] w-full py-[50px] md:py-[100px] flex ${services?'flex-col md:flex-row-reverse':'flex-col-reverse md:flex-row'} px-[20px] md:px-[0px]`,
        left: "w-full md:w-[50%] flex flex-col justify-center",
        right: `w-full md:w-[50%] ${services?'md:pr-[100px]':'md:pl-[100px]'}`,
        circle: "bg-white absolute top-[45%] right-[40px] z-[10] rounded-full px-[20px] py-[16px] cursor-pointer",
        svg: "w-[20px]",
        heading: "font-light font-cormorant text-[40px] md:text-[60px] text-[#023A15] leading-[1.3em]",
        strong: "font-light font-cormorant text-[40px] md:text-[60px] text-[#023A15] relative",
        strongSpiral: "absolute bottom-0 left-0",
        para: "py-[30px] text-[#567C49]",
        listItems: "text-[#319E48] flex items-center mb-[16px]",
        svgListItems: "fill-[#319E48] w-[20px] mr-[16px]"
    }
  return (
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <div className={`${styles.left} md:hidden flex mt-[50px]`}>
                <div className="relative w-full overflow-hidden rounded-r-full bg-gray-200 mb-[40px]">
                    <Image src={expert1} alt="brown-D9SR4HS-1536x768.jpg"/>
                </div>
                <div className="relative w-full overflow-hidden rounded-l-full bg-gray-200">
                    <Image src={expert2} alt="woman-holding-grapefruit"/>
                    <div className={styles.circle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.svg}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                    </div>
                </div>
            </div>
            <div className={`${styles.left} hidden md:flex`}>
                <div className="relative w-full h-64 overflow-hidden rounded-r-full bg-gray-200 mb-[40px]">
                    <Image src={expert1} alt="brown-D9SR4HS-1536x768.jpg"/>
                </div>
                <div className="relative w-full h-64 overflow-hidden rounded-l-full bg-gray-200">
                    <Image src={expert2} alt="woman-holding-grapefruit"/>
                    <div className={styles.circle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.svg}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.heading}>
                    Expert Skincare For Your
                    &nbsp;
                    <strong className={styles.strong}>
                        Beautiful
                        <Image src={spiral} alt="spiral vector design" className={styles.strongSpiral}/>
                    </strong>
                    &nbsp;
                    Skin
                </h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.</p>
                <ol className="mb-[50px]">
                    <li className={styles.listItems}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgListItems}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Cnsectetur adipiscing elit.</li>
                    <li className={styles.listItems}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgListItems}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Proin lobortis sed sapien.</li>
                    <li className={styles.listItems}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgListItems}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Donec tincidunt, quam.</li>
                    <li className={styles.listItems}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgListItems}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        dolor sem laoreet orci, quis.</li>
                    <li className={styles.listItems}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.svgListItems}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        Vestibulum ipsum tortor.</li>
                </ol>
                <Button title={"LEARN MORE"} cta/>
            </div>
        </div>
    </div>
  )
}

export default Expert