import spiral from "../public/spiral.png";
import Image from "next/image";
import GateShapeImage from "./GateShapeImage";
import lightSemicircle from "../public/lightSemicircle.png";
import darkSemicircle from "../public/darkSemicircle.png";

const styles = {
    outerContainer: "flex justify-center w-full bg-[#FDF5F3]",
    container: "w-full flex-col md:flex-row max-w-[1200px] flex items-center py-[120px] px-[20px] md:px-[0px]",
    left: 'w-full md:w-[50%] md:pr-[65px] relative',
    right: 'w-full md:w-[50%] md:pl-[65px] mt-[70px] md:mt-[0px]',
    heading: "font-cormorant text-[60px] text-[#023A15] relative",
    spiral: "absolute top-0 left-0 h-full",
    headingContainer: "flex items-end",
    sessionSpan: 'text-[#567C49] mb-[20px]',
    subHeading: "mt-[30px] font-cormorant text-[30px] text-[#023A15]",
    para: "text-[#567C49] mt-[30px] mb-[50px]",
    listContainer: "flex flex-col md:flex-row mt-[30px]",
    listItems: "flex items-center text-[#567C49] mb-[15px]",
    listSvg: "fill-[#567C49] w-[20px] mr-[15px]",
    lightSemicircle: "absolute rotate-[330deg] top-[-50px] left-[-50px] z-[10] w-[290px] hidden md:block",
    darkSemicircle: "absolute rotate-[140deg] bottom-[-50px] right-[-10px] z-[10] w-[290px] hidden md:block"
};

function ServiceDescription() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Image src={lightSemicircle} alt="light semi circle vector design" className={styles.lightSemicircle}/>
                    <GateShapeImage src={"/faceScrub.jpg"} alt={"Face Scrub"} height={600}/>
                    <Image src={darkSemicircle} alt="dark semi circle vector design" className={styles.darkSemicircle}/>
                </div>
                <div className={styles.right}>
                    <div className={styles.headingContainer}>
                        <h1 className={styles.heading}>
                            $25.00
                            <Image src={spiral} alt="spiral vector design" className={styles.spiral} />
                        </h1>
                        &nbsp;
                        <span className={styles.sessionSpan}>/session</span>
                    </div>
                    <h1 className={styles.subHeading}>Description</h1>
                    <p className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae.
                        Tincidunt scelerisque augue. Nunc quis fringilla magna, vel sollicitudin quam.
                        <br />
                        Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae.
                    </p>
                    <hr/>
                    <h1 className={styles.subHeading}>Include and Exclude</h1>
                    <div className={styles.listContainer}>
                        <ol className="mr-[200px]">
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={styles.listSvg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <span>Skincare</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={styles.listSvg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <span>Hot Towel</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={styles.listSvg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <span>Massage</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={styles.listSvg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <span>Flower Bath</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className={styles.listSvg}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            <span>Cleanser</span>
                            </li>
                        </ol>
                        <ol>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.listSvg}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <span>Hairdo</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.listSvg}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <span>Pedicure</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.listSvg}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <span>Madicure</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.listSvg}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <span>Face Mask</span>
                            </li>
                            <li className={styles.listItems}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={styles.listSvg}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            <span>Lips Treatment</span>
                            </li>
                            
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDescription