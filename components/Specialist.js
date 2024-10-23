import Card from "./Card";
import GateShapeImage from "./GateShapeImage";

import melisaLauren from  "../public/healthy-woman-having-massage-therapy-at-spa-salon-CGTPC6A.jpg";
import kateAmanda from "../public/massage-therapist-massaging-woman-DDGRCPN.jpg"
import Image from "next/image";
import Button from "./Button";
import dashedLine from "../public/dashedLine.png"

const styles = {
    outerContainer: 'flex justify-center w-full bg-[#FDF5F3]',
    container: 'w-full max-w-[1200px] px-[20px] py-[50px] md:px-[0px] md:py-[150px] flex items-center flex-col md:flex-row',
    left: 'md:mr-[100px] w-full md:w-[33%] mb-[50px] md:mb-[0px]',
    right: 'flex flex-col md:flex-row w-full md:w-[66%]',
    heading: 'font-cormorant font-light text-[40px] md:text-[60px]',
    strong: 'font-cormorant font-light text-[40px] md:text-[60px] relative',
    dashedLine: 'absolute bottom-[-10px] left-0',
    para: 'my-[30px] text-[#567C49] '
};

function Specialist() 
{
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>
                        Meet our
                        &nbsp;
                        <strong className={styles.strong}>
                            Specialist
                            <Image src={dashedLine} alt="dashed line" className={styles.dashedLine}/>
                        </strong>
                    </h1>
                    <p className={styles.para}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas.
                    </p>
                    <Button title={"SEE MORE"} cta/>
                </div>
                <div className={styles.right}>
                    <div className='mr-[50px] w-full'>
                        <Card title={"Melisa Lauren"} description={"Specialist"} src={melisaLauren} about/>
                    </div>
                    <Card title={"Kate Amanda"} description={"Specialist"} src={kateAmanda} about/>
                </div>
            </div>
        </div>
    )
}

export default Specialist