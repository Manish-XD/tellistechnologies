import Image from "next/image";

import Card from "./Card";
import spiral from "../public/spiral.png";

const styles = {
    outerContainer: "flex justify-center bg-[#FDF5F3] py-[110px] md:mt-[0px] mt-[100px]",
    container: "max-w-[1200px] w-full md:px-[0px] px-[20px]",
    HeadingContainer: "text-center flex flex-col items-center mb-[95px]",
    heading: "font-light text-[#023A15] text-[50px] md:text-[60px] font-cormorant",
    strong: "font-light font-cormorant relative",
    strongSpiral: "absolute top-[20%] left-0 w-full",
    para: "mt-[20px] text-[#567C49]  md:w-[560px]",
    row: "flex flex-col md:flex-row justify-between"
}; 

function SpecialService() 
{
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.HeadingContainer}>
                    <h1 className={styles.heading}>
                        Special Services from&nbsp;
                        <strong className={styles.strong}>
                            Chloro
                            <Image src={spiral} alt="Spiral vector design" className={styles.strongSpiral}/>
                        </strong>
                    </h1>
                    <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.</p>
                </div>
                <div className={styles.row}>
                    <Card src={"/faceScrub.jpg"} alt={"Face Scrub"}title={"Face Scrub"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Card src={"/bodyMassage.jpg"} alt={"Face Massage"}title={"Face Massage"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Card src={"/faceMassage.jpg"} alt={"Body Massage"}title={"Body Massage"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                </div>
                <div className={styles.row}>
                    <Card src={"/botox.jpg"} alt={"Botox Filler"}title={"Botox Filler"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Card src={"/pedicure.jpg"} alt={"Pedicure"}title={"Pedicure"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Card src={"/faceCleanser.jpg"} alt={"Face Cleanser"}title={"Face Cleanser"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                </div>
            </div>
        </div>
    );
}

export default SpecialService;