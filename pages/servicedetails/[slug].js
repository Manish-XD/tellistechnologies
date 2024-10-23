import Image from "next/image";
import spiral from "../../public/spiral.png";
import Header from "@/components/Header";
import serviceDetailsBg from "../../public/young-woman-in-white-towel-sitting-in-bathroom-wit-9NFVSS5.jpg";
import OurProduct from "@/components/OurProduct";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import ServiceDescription from "@/components/ServiceDescription";
import FAQ from "@/components/FAQ";

function servicedetails() {
    return (
        <div>
            <Header />
            <div className="relative w-full h-[50vh] bg-[#023A15] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={serviceDetailsBg}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                </div>
                <h1 className="relative text-white text-[30px] md:text-[60px] font-cormorant z-10">
                    Service
                    &nbsp;
                    <strong className='relative font-light font-cormorant'>
                        Details
                        <Image src={spiral} alt="spiral vector design" className='absolute top-[10px] left-[0px]' />
                    </strong>
                </h1>
            </div>
            <ServiceDescription/>
            <OurProduct/>
            <FAQ/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default servicedetails;