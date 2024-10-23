import Image from "next/image";
import Header from "@/components/Header";
import spiral from "../public/spiral.png";
import servicesBg from "../public/woman-getting-spa-therapy-N57JH5N.jpg"
import SpecialService from "@/components/SpecialService";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Review from "@/components/Review";
import Available from "@/components/Available";
import Expert from "@/components/Expert";
import JoinMembership from "@/components/JoinMembership";

function services() 
{
  return (
    <div>
      <Header/>
        <div className="relative w-full h-[50vh] bg-[#023A15] flex items-center justify-center">
            <div className="absolute inset-0">
                <Image
                src={servicesBg}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                />
            </div>
            <h1 className="relative text-white text-[40px] md:text-[60px] font-cormorant z-10">
                Our
                &nbsp;
                <strong className='relative font-light font-cormorant'>
                    Service
                    <Image src={spiral} alt="spiral vector design" className='absolute top-[10px] left-[0px]'/>
                </strong>
            </h1>
        </div>
        <SpecialService/>
        <Review services/>
        <Available/>
        <JoinMembership/>
        <Expert services/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default services;