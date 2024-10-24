import Image from "next/image";

import Header from "@/components/Header";
import spiral from "../public/spiral.png";
import aboutBg from "../public/partial-view-of-attractive-girl-with-freckles-posi-FTF5KCT.jpg"
import HeroSecondary from "@/components/HeroSecondary";
import OurStory from "@/components/OurStory";
import SpecialService from "@/components/SpecialService";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Specialist from "@/components/Specialist";


function about() {
    return (
        <div>
            <Header />
            <div className="relative w-full h-[50vh] bg-[#023A15] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={aboutBg}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                </div>
                <h1 className="relative text-white text-[60px] font-cormorant z-10">
                    <strong className='relative font-light font-cormorant'>
                        About
                        <Image src={spiral} alt="spiral vector design" className='absolute top-[10px] left-[0px]' />
                    </strong>
                    &nbsp;
                    Us
                </h1>
            </div>
            <HeroSecondary about/>
            <OurStory about/>
            <SpecialService about/>
            <Specialist/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default about