import Image from "next/image";
import spiral from "../public/spiral.png";
import Button from "./Button";
import Accordion from "./Accordion";

const styles = {
    outerContainer: "flex justify-center bg-[#FDF5F3] w-full mt-[100px] md:mt-[0px]",
    container: "flex flex-col md:flex-row items-center w-full max-w-[1200px] py-[150px] px-[20px] md:px-[0px]",
    left: "w-full md:w-[50%] transition-all duration-300",
    right: "w-full md:w-[50%] md:px-[50px] md:py-[100px]",
    heading: "text-[40px] md:text-[60px] font-cormorant text-[#023A15] font-light",
    strong: "text-[40px] md:text-[60px] font-cormorant text-[#023A15] font-light relative",
    spiral: "absolute top-[10px] left-0",
    para: "mt-[40px] mb-[60px] text-[#567C49]"
};

function FAQ() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Accordion title={"Can i get special discount?"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh."}/>
                    <Accordion title={"Can i get special discount?"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh."}/>
                    <Accordion title={"Can i get special discount?"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh."}/>
                    <Accordion title={"Can i get special discount?"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh."}/>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>
                        Frequently
                        &nbsp;
                        <strong className={styles.strong}>
                            Asked
                            <Image src={spiral} alt="spiral vector design"  className={styles.spiral}/>
                        </strong>
                        &nbsp;
                        Questions
                    </h1>
                    <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae.</p>
                    <Button title={"VIEW MORE"} cta />
                </div>
            </div>
        </div>
    );
}

export default FAQ;